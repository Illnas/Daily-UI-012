let right = document.getElementById("right");
let left = document.getElementById("left");
let environment = document.getElementById("environment");
let enviDesc = document.getElementsByClassName("envi-description");
let count = 0;

let imgArray = [
  ["0.jpg", "url: https://unsplash.com/photos/12IHVEFRacQ", "Desert"],
  ["1.jpg", "url: https://unsplash.com/photos/sp-p7uuT0tw", "Forest"],
  ["2.jpg", "url: https://unsplash.com/photos/bNOh-Y-ECSg", "Grassland"],
  ["3.jpg", "url: https://unsplash.com/photos/IRsY8g_TvxM", "Sea"],
  ["4.jpg", "url: https://unsplash.com/photos/Bkci_8qcdvQ", "Lake"],
  ["5.jpg", "url: https://unsplash.com/photos/ycG0A6DlvOk", "Mountain"],
  ["6.jpg", "url: https://unsplash.com/photos/QInWybktc1w", "River"],
  ["7.jpg", "url: https://unsplash.com/photos/QInWybktc1w", "Rainforrest"]
];

environment.style.backgroundImage = `url(img/${[count]}.webp)`;
environment.style.backgroundRepeat = "no-repeat";
environment.style.backgroundSize = "cover";
environment.style.backgroundPosition = "center";
enviDesc[0].innerHTML = "Environment Preset: " + imgArray[count][2];
left.disabled = true;


right.onclick = () => {
  count++;
  environment.style.backgroundImage = `url(img/${[count]}.webp)`;
  enviDesc[0].innerHTML = "Environment Preset: " + imgArray[count][2];
  left.disabled = false;
  console.log(count);
  if (count >= 7) {
    right.disabled = true;
  }
};

left.onclick = () => {
  count--;
  right.disabled = false;
  environment.style.backgroundImage = `url(img/${[count]}.webp)`;
  enviDesc[0].innerHTML = "Environment Preset: " + imgArray[count][2];
  console.log(count);
  if (count <= 0) {
    left.disabled = true;
  }
};