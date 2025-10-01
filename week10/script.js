// flip
const hoverclickButton = document.querySelector("#hoverclick-button");
console.log(hoverclickButton);

hoverclickButton.addEventListener("click", gotoFlip);

function gotoFlip() {
  window.location.href = "flip.html";
}

// dragdrop
const dragdropButton = document.querySelector("#dragdrop-button");
console.log(dragdropButton);

dragdropButton.addEventListener("click", gotoDragdrop);

function gotoDragdrop() {
  window.location.href = "dragdrop.html";
}

// multi
const multidragdropButton = document.querySelector("#multidragdrop-button");
console.log(multidragdropButton);

multidragdropButton.addEventListener("click", gotoMultidragdrop);

function gotoMultidragdrop() {
  window.location.href = "multidragdrop.html";
}

// queen
const queenButton = document.querySelector("#queen-button");
console.log(queenButton);

queenButton.addEventListener("click", gotoQueen);

function gotoQueen() {
  window.location.href = "queen.html";
}

const gameButton = document.querySelector("#completegame-button");
console.log(gameButton);
gameButton.addEventListener("click", function () {
  location.href = "game.html";
});
