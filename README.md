# מתן כהן · הדרכת הורים — דף נחיתה

דף נחיתה (גלילה) בעברית RTL עבור מתן כהן, מחנך ומנחה הורים מקיבוץ שניר.
המסר: "המלחמות הן בחוץ, לא כאן בפנים" — הבית כמקלט רגשי, עם שני כלים מהירים והזמנה לשיחת התייעצות ללא עלות.

**Repository:** https://github.com/motibn/matanchoen_new26

## מבנה הקבצים

```
matanchoen_new26/
├── index.html      ← הקובץ הראשי (HTML + Hero)
├── styles.css      ← כל העיצוב
├── sections.js     ← מקטעי התוכן (סיפור, כלים, הגישה, CTA, פוטר)
├── .gitignore
└── assets/
    ├── matan.jpeg  ← תמונת התדמית
    └── logo.jpeg   ← הלוגו
```

## עריכה

- **טקסטים של המקטעים** (מי אני / שני כלים / הגישה / הזמנה לפעולה) — נמצאים ב-`sections.js`.
- **כותרת ה-Hero, התת-כותרת והכפתורים** — נמצאים ב-`index.html`.
- **צבעים, גופנים, מרווחים** — מוגדרים כמשתני CSS בראש `styles.css` (`:root`).
- **קישור הוואטסאפ** — מספר `972506425570` מופיע ב-`index.html` וב-`sections.js`. לעדכון מספר, חפש והחלף בשני הקבצים.

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

### 5. עדכונים עתידיים

```bash
# מקומי — לאחר שינוי קבצים
git add .
git commit -m "Update content"
git push

# על השרת
cd /var/www/matanchoen && git pull
```

---
© מתן כהן · יוצרים אווירה בבית
