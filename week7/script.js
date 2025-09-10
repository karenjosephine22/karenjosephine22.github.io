//  I should also access the audio so that I can control with my buttons
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// I need to access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

//  Let us add a click event listener so that whenever
// someone click on the play button, we can play the audio

playButton.addEventListener("click", playAudio);
function playAudio() {
  myAudio.play();
  //   bisa diganti2 jadi myVideo.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  myAudio.pause();
}

// my logic for creating a popping sound effect
// first i need to access the popping sound

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

// i need to access the button and listen to clicks on it
//  so whenecer soeone clicks on the button, we hear the popping sound

popButton.addEventListener("click", popAudio);
function popAudio() {
  popSound.play();
}

// making a sound based feedback, like in games or websites etc
