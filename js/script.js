let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (index + totalSlides) % totalSlides; // Loop slide jika index kurang dari 0 atau lebih dari jumlah slide
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}