#!/usr/bin/env bash
# Configure Cloudflare DNS + SSL for matan-horut.co.il → Vercel
# Usage: CLOUDFLARE_API_TOKEN=xxx ./scripts/configure-cloudflare-dns.sh

set -euo pipefail

ZONE_NAME="matan-horut.co.il"
VERCEL_CNAME="cname.vercel-dns.com"
VERCEL_A1="216.198.79.1"
VERCEL_A2="64.29.17.1"
API="https://api.cloudflare.com/client/v4"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Error: set CLOUDFLARE_API_TOKEN (Zone.DNS Edit + Zone.SSL and Certificates Edit)" >&2
  exit 1
fi

cf_api() {
  local method="$1" path="$2"
  shift 2
  curl -sS -X "$method" "${API}${path}" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -H "Content-Type: application/json" \
    "$@"
}

get_zone_id() {
  local resp
  resp=$(cf_api GET "/zones?name=${ZONE_NAME}")
  echo "$resp" | python3 -c "
import json, sys
d = json.load(sys.stdin)
if not d.get('success') or not d.get('result'):
    print('Zone lookup failed:', d.get('errors', d), file=sys.stderr)
    sys.exit(1)
print(d['result'][0]['id'])
"
}

ensure_dns_record() {
  local zone_id="$1" type="$2" name="$3" content="$4" proxied="${5:-false}"
  local full_name="${name}.${ZONE_NAME}"
  [[ "$name" == "@" ]] && full_name="${ZONE_NAME}"

  local existing
  existing=$(cf_api GET "/zones/${zone_id}/dns_records?type=${type}&name=${full_name}")
  local record_id
  record_id=$(echo "$existing" | python3 -c "
import json, sys
d = json.load(sys.stdin)
recs = d.get('result', [])
print(recs[0]['id'] if recs else '')
")

  local payload
  payload=$(python3 -c "
import json
print(json.dumps({
    'type': '${type}',
    'name': '${name}',
    'content': '${content}',
    'proxied': ${proxied},
    'ttl': 1
}))
")

  if [[ -n "$record_id" ]]; then
    echo "Updating ${type} ${name} → ${content} (proxied=${proxied})"
    cf_api PUT "/zones/${zone_id}/dns_records/${record_id}" --data "$payload" \
      | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get('success') else 1)"
  else
    echo "Creating ${type} ${name} → ${content} (proxied=${proxied})"
    cf_api POST "/zones/${zone_id}/dns_records" --data "$payload" \
      | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get('success') else 1)"
  fi
}

remove_conflicting_www() {
  local zone_id="$1"
  local resp
  resp=$(cf_api GET "/zones/${zone_id}/dns_records?name=www.${ZONE_NAME}")
  echo "$resp" | python3 -c "
import json, sys, os, subprocess
d = json.load(sys.stdin)
zone_id = '${zone_id}'
api = '${API}'
token = os.environ['CLOUDFLARE_API_TOKEN']
for rec in d.get('result', []):
    if rec['type'] != 'CNAME' or rec['content'].rstrip('.') != '${VERCEL_CNAME}':
        print(f\"Removing conflicting www record: {rec['type']} → {rec['content']}\")
        subprocess.run([
            'curl', '-sS', '-X', 'DELETE',
            f\"{api}/zones/{zone_id}/dns_records/{rec['id']}\",
            '-H', f'Authorization: Bearer {token}'
        ], check=True)
"
}

set_ssl_mode() {
  local zone_id="$1" mode="$2"
  echo "Setting SSL mode to ${mode}"
  cf_api PATCH "/zones/${zone_id}/settings/ssl" --data "{\"value\":\"${mode}\"}" \
    | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get('success') else 1)"
}

echo "=== Cloudflare DNS setup for ${ZONE_NAME} ==="
ZONE_ID=$(get_zone_id)
echo "Zone ID: ${ZONE_ID}"

remove_conflicting_www "$ZONE_ID"
ensure_dns_record "$ZONE_ID" "CNAME" "www" "$VERCEL_CNAME" "false"
ensure_dns_record "$ZONE_ID" "A" "@" "$VERCEL_A1" "false"
ensure_dns_record "$ZONE_ID" "A" "@" "$VERCEL_A2" "false"
set_ssl_mode "$ZONE_ID" "full"

echo ""
echo "Done. Verify with:"
echo "  dig www.${ZONE_NAME} CNAME +short"
echo "  curl -sI https://www.${ZONE_NAME}/ | head -5"
