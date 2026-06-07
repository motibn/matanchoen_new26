#!/usr/bin/env bash
# One-time VPS setup for matanchoen landing page
set -euo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/var/www/matanchoen}"
DOMAIN="${1:-}"

echo "==> Creating deploy directory: $DEPLOY_PATH"
sudo mkdir -p "$DEPLOY_PATH"
sudo chown -R "$USER:$USER" "$DEPLOY_PATH"

if [ -n "$DOMAIN" ]; then
  echo "==> Writing nginx config for $DOMAIN"
  sudo tee /etc/nginx/sites-available/matanchoen >/dev/null <<NGINX
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    root ${DEPLOY_PATH};
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \\.(css|js|jpeg|jpg|png|webp|svg|ico)\$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
NGINX
  sudo ln -sf /etc/nginx/sites-available/matanchoen /etc/nginx/sites-enabled/matanchoen
  sudo nginx -t && sudo systemctl reload nginx
  echo "==> Run: sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
fi

echo ""
echo "Next steps:"
echo "1. Add GitHub repository secrets (Settings → Secrets → Actions):"
echo "   DEPLOY_HOST   = VPS IP or hostname"
echo "   DEPLOY_USER   = SSH user (e.g. ubuntu)"
echo "   DEPLOY_SSH_KEY = private SSH key (full PEM contents)"
echo "   DEPLOY_PATH   = ${DEPLOY_PATH}  (optional)"
echo ""
echo "2. Ensure this user's ~/.ssh/authorized_keys contains the matching public key."
echo "3. Push to main — GitHub Actions will deploy automatically."
