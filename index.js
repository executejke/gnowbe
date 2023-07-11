const slider = document.querySelector(".power__list");
const buttons = document.querySelector(".power__buttons");
const leftButton = buttons.firstElementChild;
const rightButton = buttons.lastElementChild;
const styles = getComputedStyle(slider);
const transformValue = styles.transform;

let intervalId;

console.log(transformValue);

let value = Number(transformValue.split(", ")[4]);

leftButton.addEventListener("click", function () {
  if (value === 475) {
    return;
  }
  slider.style.transform = `translateX(${(value += 475)}px)`;
  clearInterval(intervalId);
  intervalId = setInterval(autoSlide, 5000);
});

rightButton.addEventListener("click", function () {
  if (value === -475) {
    return;
  }
  slider.style.transform = `translateX(${(value -= 475)}px)`;
  clearInterval(intervalId);
  intervalId = setInterval(autoSlide, 5000);
});

function autoSlide() {
  value -= 475;
  if (value === -950) {
    value = 475;
  }
  slider.style.transform = `translateX(${value}px)`;
}

intervalId = setInterval(autoSlide, 5000);
