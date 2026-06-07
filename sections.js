// Render content sections after hero
document.getElementById('content-root').innerHTML = `
<!-- =========== STORY =========== -->
<section id="story" class="story">
  <div class="wrap">
    <div class="story-grid">
      <div class="story-text fi">
        <span class="eyebrow">מי אני</span>
        <h2 class="h2">היי, אני <em>מתן כהן</em><br/>מקיבוץ שניר</h2>
        <p>אבא לזוהר ושחר, ומחנך ב-15 השנים האחרונות.</p>
        <p>לחיות בגליל בתקופה הזו דורש מכולנו המון כוחות. המציאות בחוץ מלאה בחוסר ודאות, והילדים סופגים הכל.</p>
        <p>דווקא עכשיו, הבית חייב להיות המקלט הרגשי — המקום שבו מורידים את השכפ"ץ, ולא המקום שבו ממשיכים לנהל קרבות. <strong>אנחנו המבוגר האחראי, ותפקידנו לוודא שהמלחמה נשארת בחוץ.</strong></p>
      </div>
      <div class="story-photo fi" style="transition-delay:.1s">
        <span class="story-photo-deco"></span>
        <span class="story-photo-deco-2"></span>
        <img src="assets/matan.jpeg" alt="מתן כהן מקיבוץ שניר" />
        <div class="story-photo-tag">
          <span class="dot"></span>
          <span><strong>מתן כהן</strong> · קיבוץ שניר</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =========== QUOTE =========== -->
<section class="quote-band">
  <div class="quote-inner fi">
    <div class="quote-mark">״</div>
    <p class="quote-text">
      הבית חייב להיות המקלט הרגשי —
      <em>המקום שבו מורידים את השכפ"ץ, לא המקום שבו ממשיכים לנהל קרבות.</em>
    </p>
    <span class="quote-author">מתן כהן · מחנך והורה</span>
  </div>
</section>

<!-- =========== WHAT (2 tools) =========== -->
<section id="what" class="what">
  <div class="wrap">
    <div class="what-head fi">
      <span class="eyebrow">הפלייליסט המשפחתי</span>
      <h2 class="h2">שני כלים מהירים<br/>להחזיר את <em>השקט כבר מהערב</em></h2>
      <p class="lede" style="margin:1rem auto 0">פשוטים ליישום, גם כשהעייפות של הערב משתלטת. שניהם מתחילים בנו — המבוגרים שעורכים את האווירה בבית.</p>
    </div>
    <div class="cards cards-2">
      <div class="card fi">
        <span class="card-num">01</span>
        <div class="card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <h3>לכוון את התדר שלנו</h3>
        <p>אנחנו אלו שעורכים את האווירה בבית. לפני שאנחנו מגיבים או שמים גבול — נעצור לשנייה ונשים לב לטון הדיבור שלנו: כועס ומתוח, או מזמין ונעים? כשאנחנו בוחרים בשקט, הבית מסתנכרן איתנו.</p>
      </div>
      <div class="card fi" style="transition-delay:.08s">
        <span class="card-num">02</span>
        <div class="card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
        </div>
        <h3>לבנות גשרים של חיבור</h3>
        <p>בזמנים מתוחים הילדים צריכים לדעת שאנחנו שם בשבילם, גם כשאנחנו לא לידם. כשיוצאים — נגיד לילד בדיוק איפה אנחנו ומתי חוזרים. נפחית ביקורת והערות, ונכניס חמלה. כך נוצר בית שפשוט נעים להיות בו, למרות הרעש שבחוץ.</p>
      </div>
    </div>
  </div>
</section>

<!-- =========== ABOUT =========== -->
<section id="about" class="about">
  <div class="wrap">
    <div class="about-grid">
      <div class="about-logo fi">
        <img src="assets/logo.jpeg" alt="מתן כהן - הדרכת הורים, יוצרים אווירה בבית" />
        <div class="about-logo-foot">יוצרים אווירה בבית · הדרכת הורים</div>
      </div>
      <div class="fi" style="transition-delay:.08s">
        <span class="eyebrow">אני מבין מאיפה אתם באים</span>
        <h2 class="h2">אני יודע שהתקופה הזו <em>שוחקת</em></h2>
        <p class="lede">ושזה קשה ליישם כשהעייפות של הערב משתלטת. עברתי ואני עובר את זה בעצמי, כאן בגליל, כאבא וכמחנך.</p>
        <ul class="about-list">
          <li>
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            מחנך כבר 15 שנה, אבא לזוהר ושחר
          </li>
          <li>
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            גישה היקשרותית — חיבור לפני תיקון
          </li>
          <li>
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            כלים שעובדים גם בלילות הכי עמוסים
          </li>
          <li>
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            מכיר את המציאות בגליל מבפנים
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- =========== OFFER =========== -->
<section id="cta" class="offer">
  <div class="offer-card fi">
    <div class="offer-inner">
      <div>
        <span class="offer-tag"><span class="pulse"></span>שיחה ראשונית · ללא שום עלות</span>
        <h2>אם הווליום בבית<br/>עלה <em>גבוה מדי</em> — אל תישארו עם זה לבד.</h2>
        <p>אם אתם מרגישים שחסר לכם השקט והביטחון בתוך המשפחה, שלחו לי הודעה קצרה בפרטי. נקיים שיחת התייעצות טלפונית קצרה, כדי לעשות סדר בבלגן ולהחזיר לבית שלכם את ההנאה שמגיעה לכם.</p>
        <div class="offer-meta">
          <span>✓ שיחה טלפונית קצרה</span>
          <span>✓ ללא שום עלות</span>
          <span>✓ דיסקרטי ואישי</span>
        </div>
      </div>
      <div class="offer-price">
        <div class="offer-price-label">שיחת התייעצות</div>
        <div class="offer-price-num">חינם</div>
        <div class="offer-price-sub">שיחה טלפונית קצרה · ללא התחייבות</div>
        <a href="https://wa.me/972506425570?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%21%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%93%D7%A3%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%AA%D7%90%D7%9D%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A6%D7%95%D7%AA%20%D7%A7%D7%A6%D7%A8%D7%94."
           target="_top" rel="noopener noreferrer" class="btn btn-wa">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          שלחו לי הודעה בוואטסאפ
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========== FOOTER =========== -->
<footer class="foot">
  <div class="foot-brand">
    <img src="assets/logo.jpeg" alt="מתן כהן - הדרכת הורים, יוצרים אווירה בבית" />
    <strong>מתן כהן · הדרכת הורים</strong>
  </div>
  <div>יוצרים אווירה בבית · קיבוץ שניר, הגליל</div>
  <div style="margin-top:.8rem">
    <a href="https://wa.me/972506425570">050-6425570</a>
    <span class="foot-sep">·</span>
    <a href="#cta">לשיחת התייעצות ללא עלות</a>
  </div>
</footer>
`;

// Re-observe newly inserted .fi elements
const io2 = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('on'); io2.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('#content-root .fi').forEach(el=>io2.observe(el));
