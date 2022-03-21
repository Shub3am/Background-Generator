const body = document.body;
const color_1 = document.querySelector(".color-1");
const color_2 = document.querySelector(".color-2");
const CurrentStat = document.querySelector(".stat");

function changeColor() {
  body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
  CurrentStat.textContent = `Current Color: ${color_1.value} and ${color_2.value}`;
}

color_1.addEventListener("input", changeColor);
color_2.addEventListener("input", changeColor);
