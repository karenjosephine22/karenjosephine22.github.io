const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "This is my New Heading";
topHeading.style.color = "red";
// buat change the content kalo gasuka ceunah

const firstPara = document.querySelector("p");
console.log(firstPara);
console.log(firstPara.textContent);
firstPara.textContent = "This is my new para";
firstPara.innerHTML += "<span> New Element </span>";

const mySection = document.querySelector("section");
console.log(mySection);
let mynewContent = `
<h2> this is an image of cat </h2>
<p> do you like it? </p>`;
mySection.innerHTML += mynewContent;
const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);

const allParas = document.querySelectorAll("p");
console.log(allParas);
// console.log(allParas.textContent);
// gabisa jadinya harus para for loop
for (let i = 0; i < allParas.length; i++) {
  console.log("Para", i + 1, ":", allParas[i].textContent);
  allParas[i].style.backgroundColor = "grey";
  //  allParas [i].textContent = 'this is my new paragraphs'
  allParas[i].classList.add("para-style");
}

const allAnothers = document.querySelectorAll(".another");
console.log(allAnothers);
for (let i = 0; i < allAnothers.length; i++) {
  console.log(
    "Elemets with class another",
    i + 1,
    ":",
    allAnothers[i].textContent
  );
}

function toggleMe() {
  const myImg = document.querySelector("img");
  console.log(myImg);
  myImg.classList.toggle("round");
}

const myImg = document.querySelector("img");
console.log(myImg);
myImg.addEventListener("mouseenter", addMe);
myImg.addEventListener("mouseleave", removeMe);
myImg.addEventListener("click", handleClick);

function addMe() {
  myImg.classList.add("round");
}

function removeMe() {
  myImg.classList.remove("round");
}

function handleClick() {
  console.log("did you just click me??");
  topHeading.textContent = "My Cat!";
}
