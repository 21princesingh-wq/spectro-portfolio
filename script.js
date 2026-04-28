/* ═══════════════════════════════════════════════
   Reflectance Spectrophotometer Portfolio
   script.js — All JavaScript
═══════════════════════════════════════════════ */

/* ─── PAGE ROUTER ─── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Close mobile menu if open
  const mob = document.getElementById('mobile-menu');
  if (mob) mob.style.display = 'none';
}

/* ─── NAV SCROLL SHADOW ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ─── MOBILE MENU TOGGLE ─── */
function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  if (!m) return;
  m.style.display = m.style.display === 'none' || m.style.display === '' ? 'block' : 'none';
}

/* ─── CONTACT FORM ─── */
function sendForm() {
  const name    = document.getElementById('cf-name');
  const email   = document.getElementById('cf-email');
  const subject = document.getElementById('cf-subject');
  const msg     = document.getElementById('cf-msg');
  const notice  = document.getElementById('form-msg');

  if (!name.value.trim() || !email.value.trim()) {
    alert('Please fill in at least your name and email.');
    return;
  }

  // Show success message
  if (notice) {
    notice.style.display = 'block';
    setTimeout(() => { notice.style.display = 'none'; }, 4000);
  }

  // Clear fields
  name.value    = '';
  email.value   = '';
  if (subject) subject.value = '';
  if (msg)     msg.value     = '';
}

/* ─── SPECTRUM BAR ENTRANCE ANIMATION ─── */
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.spectrum-bar');
  if (bar) {
    bar.style.opacity       = '0';
    bar.style.transform     = 'scaleX(0)';
    bar.style.transformOrigin = 'left';
    bar.style.transition    = 'all 1.2s cubic-bezier(0.4,0,0.2,1) 0.5s';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.opacity   = '1';
        bar.style.transform = 'scaleX(1)';
      });
    });
  }
});

/* ─── STAGGER CARD ANIMATIONS ON PAGE SHOW ─── */
const originalShowPage = showPage;
function showPage(id) {
  originalShowPage(id);
  setTimeout(() => {
    const page = document.getElementById(id);
    if (!page) return;
    const cards = page.querySelectorAll(
      '.paper-card, .obj-item, .outcome-card, .outcome-metric, .app-card'
    );
    cards.forEach((card, i) => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.opacity   = '1';
          card.style.transform = 'translateY(0)';
        });
      });
    });
  }, 50);
}
