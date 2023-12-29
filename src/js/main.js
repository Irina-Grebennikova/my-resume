const certificate = document.getElementById('certificate');

certificate.addEventListener('click', (e) => {
  certificate.classList.toggle('active');

  if (!certificate.classList.contains('active')) return;
  e.stopImmediatePropagation();

  const mask = document.querySelector('.courses__mask');
  mask.style.display = 'block';

  document.body.addEventListener(
    'click',
    () => {
      certificate.classList.remove('active');
      mask.style.display = 'none';
    },
    { once: true }
  );
});
