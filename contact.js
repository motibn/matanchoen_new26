// Single source of truth for contact CTAs — update phone number here only
window.CONTACT = {
  phoneDisplay: '050-6425570',
  phoneE164: '+972506425570',
  waNumber: '972506425570',
  waMessage: 'שלום מתן! ראיתי את הדף ואשמח לתאם שיחת התייעצות קצרה.',
  get tel() {
    return 'tel:' + this.phoneE164;
  },
  get whatsapp() {
    return 'https://wa.me/' + this.waNumber + '?text=' + encodeURIComponent(this.waMessage);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-contact="whatsapp"]').forEach((el) => {
    el.href = CONTACT.whatsapp;
  });
  document.querySelectorAll('[data-contact="tel"]').forEach((el) => {
    el.href = CONTACT.tel;
    if (!el.textContent.trim()) el.textContent = CONTACT.phoneDisplay;
  });
});
