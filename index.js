const slider = document.querySelector(".power__list");
const slides = Array.from(document.querySelectorAll(".power-item"));
const buttons = document.querySelector(".power__buttons");
const leftButton = buttons.firstElementChild;
const rightButton = buttons.lastElementChild;
const styles = getComputedStyle(slider);
const transformValue = styles.transform;
console.log(styles.width);

const maxValueOfSlidesWidth = slides.reduce((previous, current) => {}, 0);

const radio = Array.from(document.querySelectorAll(".power__button_radio"));

let intervalId;

console.log(transformValue);

let value = Number(transformValue.split(", ")[4]);

function radioBackground() {
    radio.forEach((button) => {
        button.style.background = '';
      });
    
      if (value === 0) {
        radio[1].style.background = 'green';
      } else if (value === 475) {
        radio[0].style.background = 'green';
      } else if (value === -475) {
        radio[2].style.background = 'green';
      }
  }
  
  radioBackground()
  

leftButton.addEventListener("click", function () {
  if (value === 475) {
    return;
  }
  slider.style.transform = `translateX(${(value += 475)}px)`;
  clearInterval(intervalId);
  intervalId = setInterval(autoSlide, 5000);
  radioBackground();
});

rightButton.addEventListener("click", function () {
  if (value === -475) {
    return;
  }
  slider.style.transform = `translateX(${(value -= 475)}px)`;
  clearInterval(intervalId);
  intervalId = setInterval(autoSlide, 5000);
  radioBackground();
});

function autoSlide() {
  value -= 475;
  if (value === -950) {
    value = 475;
  }
  slider.style.transform = `translateX(${value}px)`;
  radioBackground()
}

intervalId = setInterval(autoSlide, 5000);
