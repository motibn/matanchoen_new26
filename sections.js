// Render content sections after hero
const C = window.CONTACT;
document.getElementById('content-root').innerHTML = `
<!-- =========== STORY =========== -->
<section id="story" class="story">
  <div class="wrap">
    <div class="story-grid">
      <div class="story-intro fi">
        <span class="eyebrow">מי אני</span>
        <h2 class="h2">נעים להכיר, אני <em>מתן כהן</em></h2>
        <p>נשוי לסלעית ואבא לזוהר ושחר. מחנך, ומלווה משפחות בתהליכי ייעוץ והדרכת הורים בגליל.</p>
      </div>
      <div class="story-photo fi" style="transition-delay:.1s">
        <span class="story-photo-deco"></span>
        <span class="story-photo-deco-2"></span>
        <img src="assets/matan.jpeg" alt="מתן כהן — ייעוץ והדרכת הורים בגליל" />
        <div class="story-photo-tag">
          <span class="dot"></span>
          <span><strong>מתן כהן</strong> · ייעוץ והדרכת הורים</span>
        </div>
      </div>
      <div class="story-body fi" style="transition-delay:.15s">
        <p>את הניסיון שלי בשטח אספתי במשך 15 השנים האחרונות – מהשנים שבהן עבדתי כגנן לגיל הרך, דרך העבודה שלי כמחנך, ומתוך החיים עצמם כאבא. מתוך השליחות הזו, בחרתי להעמיק ולהביא אליכם את הכלים המקצועיים והאפקטיביים ביותר: אני בוגר לימודי NLP ובעל הכשרה מקצועית מקיפה בהדרכת הורים וייעוץ משפחתי.</p>
        <p>הגישה שלי מאמינה בחיבור לפני תיקון. אני פוגש אתכם בגובה העיניים, בלי שיפוטיות, ומביא אליכם כלים מעשיים שעובדים – גם בלילות העמוסים והמאתגרים ביותר. בואו נוריד את השכפ"ץ, נשאיר את המלחמות בחוץ, ונחזיר יחד את השקט וההנאה להורות שלכם.</p>
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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </div>
        <h3>לכוון את התדר שלנו</h3>
        <p>אנחנו אלו שעורכים את האווירה בבית. לפני שאנחנו מגיבים או שמים גבול — נעצור לשנייה ונשים לב לטון הדיבור שלנו: כועס ומתוח, או מזמין ונעים? כשאנחנו בוחרים בשקט, הבית מסתנכרן איתנו.</p>
      </div>
      <div class="card fi" style="transition-delay:.08s">
        <span class="card-num">02</span>
        <div class="card-icon card-icon-hug" aria-hidden="true">
          <img src="assets/icon-heart-hug.png" alt="" width="38" height="38" loading="lazy" />
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

<!-- =========== SERVICES =========== -->
<section id="services" class="services" itemscope itemtype="https://schema.org/ItemList">
  <meta itemprop="name" content="שירותי הדרכת הורים וייעוץ משפחתי">
  <div class="wrap">
    <div class="services-head fi">
      <span class="eyebrow">השירותים</span>
      <h2 class="h2">איך אנחנו יכולים לעבוד <em>יחד</em></h2>
    </div>
    <div class="cards service-cards">
      <article class="card service-card fi" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <meta itemprop="position" content="1">
        <div itemprop="item" itemscope itemtype="https://schema.org/Service">
          <h3 itemprop="name">ליווי וייעוץ פרטני (בקליניקה או בזום)</h3>
          <p itemprop="description">תהליך אישי וממוקד שמותאם בול למשפחה שלכם. יחד, נמפה את האתגרים בבית (מאבקי כוח, שגרת ערב, גבולות) ונצא מהתהליך עם כלים מעשיים, עם הבנה גדולה יותר על הילדים שלכם ועל הקשר שלכם יחד, ועם ביטחון והנאה מההורות.</p>
        </div>
      </article>
      <article class="card service-card fi" style="transition-delay:.08s" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <meta itemprop="position" content="2">
        <div itemprop="item" itemscope itemtype="https://schema.org/Service">
          <span class="service-badge service-badge-free">ללא עלות</span>
          <h3 itemprop="name">שיחת התייעצות ראשונית (ללא עלות)</h3>
          <p itemprop="description">שיחה קצרה שבה נכיר, נבין מה האתגר המרכזי שלכם כרגע בבית, ונראה איך אני יכול לעזור לכם להחזיר את הרוגע והסמכות ההורית למשפחה.</p>
          <a href="#cta" class="service-link">למידע נוסף ←</a>
        </div>
      </article>
      <article class="card service-card service-card-soon fi" style="transition-delay:.16s" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <meta itemprop="position" content="3">
        <div itemprop="item" itemscope itemtype="https://schema.org/Service">
          <span class="service-badge service-badge-soon">בקרוב</span>
          <h3 itemprop="name">הרצאות וסדנאות להורים (בקרוב)</h3>
          <p itemprop="description">בהמשך הדרך יפתחו גם מפגשים קבוצתיים חווייתיים. נדבר בהם בגובה העיניים על האתגרים הבוערים של גידול ילדים במציאות של היום, ונצא עם כלים פרקטיים הביתה.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- =========== TESTIMONIALS =========== -->
<section id="testimonials" class="testimonials">
  <div class="wrap">
    <div class="testimonials-head fi">
      <span class="eyebrow">המלצות</span>
      <h2 class="h2">מה אומרים <em>ההורים</em></h2>
    </div>
    <div class="testimonial-cards">
      <blockquote class="testimonial-card fi" itemscope itemtype="https://schema.org/Review">
        <div class="testimonial-mark">״</div>
        <p class="testimonial-text" itemprop="reviewBody">יש אנשים שאתה עובר לידם וממשיך הלאה. ויש כאלה שנכנסים ללב. בטוחה שכשאדם כזה מלווה אותך - הדרך חייבת להיות טובה.</p>
        <footer class="testimonial-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">רעות, אמא של תלמידה</span>
        </footer>
      </blockquote>
      <blockquote class="testimonial-card fi" style="transition-delay:.08s" itemscope itemtype="https://schema.org/Review">
        <div class="testimonial-mark">״</div>
        <p class="testimonial-text" itemprop="reviewBody">ממליצה בחום. תהליך ששם את הקשר במרכז וממנו צומחים הפירות</p>
        <footer class="testimonial-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">הדס</span>
        </footer>
      </blockquote>
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
        <a href="${C.whatsapp}"
           target="_blank" rel="noopener noreferrer" class="btn btn-wa" data-cta="true" aria-label="שליחת הודעה בוואטסאפ">
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
  <div class="foot-contact">
    <a href="${C.tel}" class="foot-tel">${C.phoneDisplay}</a>
    <span class="foot-sep">·</span>
    <a href="${C.whatsapp}" target="_blank" rel="noopener noreferrer" class="foot-wa">וואטסאפ</a>
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
