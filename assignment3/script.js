// Finally adding the audio/ sound
// Just a short jingle for each instruments.. And that's all!!
// I was thinking maybe for future development I can input more sound for different notes
// and maybe adding like background music for each page listening to the instruments..
// but anyway, thankyou for teaching us this semester ^^

const angklung = document.getElementById("angklung");
if (angklung) {
  angklung.addEventListener("click", () => {
    const sound = document.getElementById("angklungSound");
    sound.currentTime = 0;
    sound.play();
  });
}

const gong = document.getElementById("gong");
if (gong) {
  gong.addEventListener("click", () => {
    const sound = document.getElementById("gongSound");
    sound.currentTime = 0;
    sound.play();
  });
}

const saron = document.getElementById("saron");
if (saron) {
  saron.addEventListener("click", () => {
    const sound = document.getElementById("saronSound");
    sound.currentTime = 0;
    sound.play();
  });
}

const tifa = document.getElementById("tifa");
if (tifa) {
  tifa.addEventListener("click", () => {
    const sound = document.getElementById("tifaSound");
    sound.currentTime = 0;
    sound.play();
  });
}
