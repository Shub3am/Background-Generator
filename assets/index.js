const body = document.body; //Selects the Body
const color_1 = document.querySelector(".color-1"); //Selects Input Color Picker One
const color_2 = document.querySelector(".color-2"); //Selects Input Color Picker Second
const CurrentStat = document.querySelector(".stat"); //Selects H3 Tag

const Display_Color = (color1, color2) => {
  CurrentStat.textContent = `Current Color: ${color_1.value} and ${color_2.value}`;
};

function changeColor() {
  body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
  Display_Color(color_1.value, color_2.value);
}

color_1.addEventListener("input", changeColor, Display_Color());
color_2.addEventListener("input", changeColor, Display_Color());
