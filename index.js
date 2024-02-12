
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider");
  const figure = slider.querySelector("figure");
  const images = figure.querySelectorAll("img");
  let currentIndex = 0;
  const radios = document.querySelectorAll('input[name="slider"]');
  const prevSlide = document.getElementById("prev-slide");
  const nextSlide = document.getElementById("next-slide");

  function updateSlider() {
    radios[currentIndex].checked = true;
    figure.style.left = `-${currentIndex * 100}%`;
  }

  function navigateSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateSlider();
  }

  slider.addEventListener("click", (event) => {
    if (event.target === prevSlide) {
      navigateSlide(-1);
    } else if (event.target === nextSlide) {
      navigateSlide(1);
    }
  });

  radios.forEach(function(radio, index) {
    radio.addEventListener('change', function() {
      currentIndex = index;
      updateSlider();
    });
  });
});

function teilen() {
  if (navigator.share) {
      navigator.share({
          title: 'Solarprojekt Eikwe-Schweinfurt',
          text: 'Hallo, dies ist die Website des P-Seminars. Hier finden Sie alle Informationen zum Solarprojekt in Eikwe. Besuchen Sie die Website: ',
          url: 'https://eikwe.github.io/SW',
      })
      .then(() => console.log('Erfolgreich geteilt!'))
      .catch((error) => console.error('Fehler beim Teilen:', error));
  } else {
      // Fallback, wenn die share API nicht unterstützt wird
      alert('Die Share-API wird von diesem Browser nicht unterstützt. Teilen Sie die Website manuell: https://eikwe.github.io/SW');
  }
}