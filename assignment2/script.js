// Here I'm getting access to the video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// Then I'm going to start adding function to the buttons I have, following the same steps:
// 1. Getting access to those buttons with const (the button) and console.log
// 2. Adding an advent listeners to each of the buttons
// 3. Then finally, the function to each of those buttons

// PLAY PAUSE BUTTON
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

// MUTE UNMUTE BUTTON
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png ";
  }
}

// FAST FORWARD BUTTON
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForwardVideo);

function fastForwardVideo() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
    // making it 2 times faster
  } else {
    myVideo.playbackRate = 1.0;
    // making it back to normal
  }
}

// STEP-BY-STEP BUTTONS
// First step (cause its a lot)
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

const step3Button = document.querySelector("#step3-button");
console.log(step3Button);

const step4Button = document.querySelector("#step4-button");
console.log(step4Button);

const step5Button = document.querySelector("#step5-button");
console.log(step5Button);

const step6Button = document.querySelector("#step6-button");
console.log(step6Button);

const step7Button = document.querySelector("#step7-button");
console.log(step7Button);

const step8Button = document.querySelector("#step8-button");
console.log(step8Button);

const step9Button = document.querySelector("#step9-button");
console.log(step9Button);

// Second step: addEventListeners
step1Button.addEventListener("click", gotoStep1);
step2Button.addEventListener("click", gotoStep2);
step3Button.addEventListener("click", gotoStep3);
step4Button.addEventListener("click", gotoStep4);
step5Button.addEventListener("click", gotoStep5);
step6Button.addEventListener("click", gotoStep6);
step7Button.addEventListener("click", gotoStep7);
step8Button.addEventListener("click", gotoStep8);
step9Button.addEventListener("click", gotoStep9);

// Adding functions and making sure the time matches with the steps
function gotoStep1() {
  myVideo.currentTime = 32;
}

function gotoStep2() {
  myVideo.currentTime = 53;
}

function gotoStep3() {
  myVideo.currentTime = 70;
}
// using seconds to determine the time

function gotoStep4() {
  myVideo.currentTime = 98;
}

function gotoStep5() {
  myVideo.currentTime = 120;
}

function gotoStep6() {
  myVideo.currentTime = 169;
}

function gotoStep7() {
  myVideo.currentTime = 187;
}

function gotoStep8() {
  myVideo.currentTime = 218;
}

function gotoStep9() {
  myVideo.currentTime = 267;
}
// -------------------------------------------------------

// LIKES BUTTON
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);
// Then I'm getting access to the next area and I should also create a counter
let likes = 0;
const likesText = document.querySelector("#likes");
console.log(likesText);

heartButton.addEventListener("click", displayLikes);

function displayLikes() {
  likes++;
  likesText.textContent = likes;
}

// PROGRESS BAR
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  let duration = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = duration + "%";
}

// FULL SCREEN
const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

fullScreenButton.addEventListener("click", goFullScreen);
myVideo.addEventListener("dblclick", goFullScreen);

// then you can watch the video in full screen so that it's easier to focus
function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// REPLAY BUTTON
const replayButton = document.querySelector("#replay-button");
console.log(replayButton);

replayButton.addEventListener("click", replayVideo);

function replayVideo() {
  myVideo.currentTime = 0;
  // jump back to start
  myVideo.play();
  // play from the beginning
}

// okiee that's the end of this project, thankyou!!
