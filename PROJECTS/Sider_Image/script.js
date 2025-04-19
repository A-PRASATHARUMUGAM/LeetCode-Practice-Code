const slides = document.getElementById("preview-img-slides");
const totalSlides = slides.children.length;
let index = 0;

document.getElementById("next-btn").onclick = () => {
  index = (index + 1) % totalSlides;
  updateSlider();
};

document.getElementById("prev-btn").onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
};

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 4 seconds
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 4000); 