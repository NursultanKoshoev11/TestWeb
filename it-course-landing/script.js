const revealItems = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const leadForm = document.querySelector('#leadForm');
const formNote = document.querySelector('#formNote');

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const name = String(formData.get('name') || '').trim();

  formNote.textContent = `${name || 'Готово'}, заявка сохранена в демо-режиме. Подключи backend, Telegram bot или email-сервис для реальной отправки.`;
  leadForm.reset();
});
