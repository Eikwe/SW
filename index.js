document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider");
  const figure = slider.querySelector("figure");
  const images = figure.querySelectorAll("img");
  let currentIndex = 0;

  slider.addEventListener("click", (event) => {
    const direction = event.target.id.includes("prev") ? -1 : 1;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    figure.style.left = `-${currentIndex * 100}%`;
  });
});
