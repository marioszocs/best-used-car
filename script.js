const revealTargets = document.querySelectorAll(
  '.trust__card, .logistics__header, .logistics__card, .logistics__cta, .form-intro, .car-form, .hero__content > *'
);

for (const el of revealTargets) {
  el.classList.add('reveal');
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((el) => observer.observe(el));

const dateField = document.getElementById('bekuldve-datum');
if (dateField) {
  dateField.value = new Date().toLocaleString('hu-HU');
}

const form = document.getElementById('car-form');
if (form) {
  form.addEventListener('submit', () => {
    const button = form.querySelector('.btn-submit');
    if (button) {
      button.textContent = 'Küldés folyamatban...';
      button.disabled = true;
    }
  });
}
