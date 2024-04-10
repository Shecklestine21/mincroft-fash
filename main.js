// Functionize Minecraft Fishing Start Code

// html variables
var resultImg = document.getElementById("result-img");
var numCodSpan = document.getElementById("num-cod");
var numSalmonSpan = document.getElementById("num-salmon");
var numTropicalSpan = document.getElementById("num-tropical");
var numPufferSpan = document.getElementById("num-puffer");

// Fish count var
var numCod = 0;
var numSalmon = 0;
var numTropical = 0;
var numPuffer = 0;


// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
// determine selected character
  let character = document.getElementById("character-select").value;
  console.log(character);

if (character === "steve") {
  // Steve fish simulator 
  var randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.7) {
    resultImg.src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.9) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.95) {
    resultImg.src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
} else if (character === "alex") {
  // Alex fish simulator 
  var randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.1) {
    resultImg.src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.2) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.5) {
    resultImg.src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
} else if (character === "villager") {
  var randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.25) {
    resultImg.src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.50) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.75) {
    resultImg.src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
}

  

  





}
