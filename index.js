document.addEventListener("DOMContentLoaded", function() {
  const prevSlide = document.getElementById("prev-slide");
  const nextSlide = document.getElementById("next-slide");
  const figure = document.querySelector("#slider figure");
  const images = figure.querySelectorAll("img");
  const radioButtons = document.querySelectorAll("#slider-controls input[type='radio']");
  let currentIndex = 0;
  let isAutoplay = true;
  let autoplayInterval;

  const startAutoplay = function() {
    autoplayInterval = setInterval(function() {
      if (isAutoplay) {
        currentIndex = (currentIndex + 1) % images.length;
        goToSlide(currentIndex);
      }
    }, 3000);
  };

  const stopAutoplay = function() {
    clearInterval(autoplayInterval);
  };

  const goToSlide = function(index) {
    currentIndex = index;
    figure.style.left = `-${currentIndex * 100}%`;
    updateRadioButton();
    stopAutoplay();
    isAutoplay = false;
  };

  const goToPrevSlide = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(currentIndex);
  };

  const goToNextSlide = function() {
    currentIndex = (currentIndex + 1) % images.length;
    goToSlide(currentIndex);
  };

  const updateRadioButton = function() {
    radioButtons[currentIndex].checked = true;
  };

  prevSlide.addEventListener("click", goToPrevSlide);
  nextSlide.addEventListener("click", goToNextSlide);

  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function() {
      goToSlide(i);
    });
  }

  figure.addEventListener("mouseenter", function() {
    stopAutoplay();
    isAutoplay = false;
  });

  figure.addEventListener("mouseleave", function() {
    startAutoplay();
    isAutoplay = true;
  });

  startAutoplay();
});
