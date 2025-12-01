// API: https://www.thecolorapi.com/docs#schemes

fetch('https://www.thecolorapi.com/scheme?hex=0047AB')
  .then(res => res.json())
  .then(data => console.log(data))