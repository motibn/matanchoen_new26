# מתן כהן · הדרכת הורים — דף נחיתה

דף נחיתה (גלילה) בעברית RTL עבור מתן כהן, מחנך ומנחה הורים מקיבוץ שניר.
המסר: "המלחמות הן בחוץ, לא כאן בפנים" — הבית כמקלט רגשי, עם שני כלים מהירים והזמנה לשיחת התייעצות ללא עלות.

**Repository:** https://github.com/motibn/matanchoen_new26

## מבנה הקבצים

```
matanchoen_new26/
├── index.html      ← הקובץ הראשי (HTML + Hero)
├── styles.css      ← כל העיצוב
├── contact.js      ← מספר טלפון וקישורי וואטסאפ (מקור יחיד)
├── sections.js     ← מקטעי התוכן (סיפור, כלים, הגישה, CTA, פוטר)
├── nav.js          ← תפריט מובייל וכפתור וואטסאפ צף
├── .gitignore
└── assets/
    ├── matan.jpeg  ← תמונת התדמית
    └── logo.jpeg   ← הלוגו
```

## עריכה

- **טקסטים של המקטעים** (מי אני / שני כלים / הגישה / הזמנה לפעולה) — נמצאים ב-`sections.js`.
- **כותרת ה-Hero, התת-כותרת והכפתורים** — נמצאים ב-`index.html`.
- **צבעים, גופנים, מרווחים** — מוגדרים כמשתני CSS בראש `styles.css` (`:root`).
- **טלפון ווואטסאפ** — מוגדרים ב-`contact.js` בלבד (`phoneE164`, `waNumber`, `waMessage`).

## הפעלה מקומית

```bash
python3 -m http.server 8080
```

פתח http://localhost:8080 בדפדפן. (אין שלב build — HTML/CSS/JS רגיל.)

## פריסה על שרת VPS

### 1. Clone על השרת

```bash
sudo mkdir -p /var/www/matanchoen
sudo chown $USER:$USER /var/www/matanchoen
git clone https://github.com/motibn/matanchoen_new26.git /var/www/matanchoen
```

### 2. nginx

צור קובץ `/etc/nginx/sites-available/matanchoen` (החלף `YOUR_DOMAIN` בדומיין שלך):

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;
    root /var/www/matanchoen;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|jpeg|jpg|png|webp|svg|ico)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

הפעלה:

```bash
sudo ln -s /etc/nginx/sites-available/matanchoen /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 3. SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

### 4. DNS (אצל רשם הדומיין)

| סוג | שם | ערך |
|-----|-----|-----|
| A | `@` | IP של ה-VPS |
| A | `www` | IP של ה-VPS |

### 5. פריסה אוטומטית (GitHub Actions)

כל push ל-`main` מפעיל workflow שמעלה את הקבצים ל-VPS ב-SSH.

#### הגדרה חד-פעמית

**א. על ה-VPS** — הרץ (החלף `your-domain.co.il` בדומיין):

```bash
curl -fsSL https://raw.githubusercontent.com/motibn/matanchoen_new26/main/scripts/vps-bootstrap.sh | bash -s your-domain.co.il
```

או ידנית:

```bash
bash scripts/vps-bootstrap.sh your-domain.co.il
```

**ב. מפתח SSH ל-GitHub Actions** — על המחשב שלך:

```bash
ssh-keygen -t ed25519 -C "github-actions-matanchoen" -f matanchoen_deploy -N ""
```

- הוסף את `matanchoen_deploy.pub` ל-`~/.ssh/authorized_keys` על ה-VPS
- את התוכן של `matanchoen_deploy` (המפתח הפרטי) שמור כ-Secret

**ג. Secrets ב-GitHub** — Repository → Settings → Secrets and variables → Actions:

| Secret | דוגמה | חובה |
|--------|--------|------|
| `DEPLOY_HOST` | `123.45.67.89` או `your-domain.co.il` | כן |
| `DEPLOY_USER` | `ubuntu` | כן |
| `DEPLOY_SSH_KEY` | תוכן מלא של המפתח הפרטי (PEM) | כן |
| `DEPLOY_PATH` | `/var/www/matanchoen` | לא (ברירת מחדל) |

#### עדכונים

```bash
git add .
git commit -m "Update content"
git push origin main
```

הפריסה רצה אוטומטית. ניתן גם להפעיל ידנית: Actions → Deploy to VPS → Run workflow.

### 6. עדכון ידני (גיבוי)

```bash
cd /var/www/matanchoen && git pull
```

---
© מתן כהן · יוצרים אווירה בבית
