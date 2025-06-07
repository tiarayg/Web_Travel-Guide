document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.packages-list');
  const cards = document.querySelectorAll('.package-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const cardsPerView = 3;
  const total = cards.length;
  let current = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(list).gap) || 38;
    list.style.transform = `translateX(-${current * cardWidth}px)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (current < total - cardsPerView) {
      current++;
      updateCarousel();
    }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i <= total - cardsPerView) {
        current = i;
        updateCarousel();
      }
    });
  });

  // Responsive: update on resize
  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});