// API: https://www.thecolorapi.com/docs#schemes

let colorArray = [];
const seed = document.getElementById("color-picker");
let seedValue = "";
let seedMode = document.getElementById("color-mode");
let seedModeValue = "";
const button = document.getElementById("color-btn");
let hexValue = document.getElementById("hex")

seed.addEventListener("input", selectColor);

seedMode.addEventListener("input", selectMode);

button.addEventListener("click", function (event) {
  event.preventDefault();
  colorArray.forEach((color, i) => {
    document.querySelector(`.color-${i + 1}`).style.backgroundColor = color;
  });
  generateColorHex();
});

function generateColor() {
  colorArray = [];
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${seedModeValue}`
  )
    .then(res => res.json())
    .then(data => {
      const importArray = data.colors;
      importArray.forEach(item => {
        colorArray.push(item.hex.value);
      });
    });
}

function selectColor() {
  seedValue = this.value.slice(1);
  generateColor();
}

function selectMode() {
  seedModeValue = seedMode.value;
  generateColor();
}

function generateColorHex() {
  hexValue.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    let html = `<p>${colorArray[i]}</p>`;
    hexValue.innerHTML += html;
  }
}
