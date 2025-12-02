let colorArray = [];
const seed = document.getElementById("color-picker");
let seedValue = "";
const seedMode = document.getElementById("color-mode");
let seedModeValue = "";
const button = document.getElementById("color-btn");
const hexValue = document.getElementById("hex");

seed.addEventListener("input", handleInput);
seedMode.addEventListener("input", handleInput);

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

function handleInput() {
  seedValue = seed.value.slice(1);
  seedModeValue = seedMode.value;
  generateColor();
}

function generateColorHex() {
  hexValue.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    hexValue.innerHTML += `<p class='textbox'>${colorArray[i]}</p>`;
  }
  
  document.querySelectorAll('.textbox').forEach(box => {
    box.addEventListener('click', () => {
      navigator.clipboard.writeText(box.innerText);
    alert("hex color copied to clipboard");
    })
  })

}
