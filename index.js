document.addEventListener("DOMContentLoaded", function() {
    const prevSlide = document.getElementById("prev-slide");
    const nextSlide = document.getElementById("next-slide");
    const figure = document.querySelector("#slider figure");
    const images = figure.querySelectorAll("img");
    let currentIndex = 0;
    let isAutoplay = true;
    let autoplayInterval;
  
    const startAutoplay = function() {
      autoplayInterval = setInterval(function() {
        if (isAutoplay) {
          currentIndex = (currentIndex + 1) % images.length;
          figure.style.left = `-${currentIndex * 100}%`;
        }
      }, 3000);
    };
  
    const stopAutoplay = function() {
      clearInterval(autoplayInterval);
    };
  
    const goToPrevSlide = function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      figure.style.left = `-${currentIndex * 100}%`;
      stopAutoplay();
      isAutoplay = false;
    };
  
    const goToNextSlide = function() {
      currentIndex = (currentIndex + 1) % images.length;
      figure.style.left = `-${currentIndex * 100}%`;
      stopAutoplay();
      isAutoplay = false;
    };
  
    prevSlide.addEventListener("click", goToPrevSlide);
    nextSlide.addEventListener("click", goToNextSlide);
  
    figure.addEventListener("mouseenter", function() {
      stopAutoplay();
      isAutoplay = false;
    });
  
    figure.addEventListener("mouseleave", function() {
      startAutoplay();
      isAutoplay = true;
    });
  
    startAutoplay();
  })
  ;