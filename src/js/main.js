const certificates = document.querySelectorAll('.courses__certificate');

certificates.forEach((certificate) => {
  certificate.addEventListener('click', (e) => {
    certificate.classList.toggle('active');

    if (!certificate.classList.contains('active')) return;
    e.stopImmediatePropagation();

    const mask = document.querySelector('.courses__mask');
    mask.style.display = 'block';

    document.body.addEventListener(
      'click',
      (e) => {
        certificate.classList.remove('active');
        mask.style.display = 'none';

        if (e.target === certificate) {
          window.open(certificate.dataset.link, '_blank');
        }
      },
      { once: true }
    );
  });
});
