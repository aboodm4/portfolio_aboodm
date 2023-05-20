let thePlus = document.querySelector(".fa-solid.fa-plus");
let boxTwo = document.getElementById("1212");

boxTwo.addEventListener("mouseenter", function(){
  thePlus.classList.add("dissapperr");
});
boxTwo.addEventListener("mouseleave", function(){
  thePlus.classList.remove("dissapperr");
});


let boxOne = document.querySelector(".box");

boxTwo.addEventListener("mouseenter", function(){
  boxOne.classList.add("corner");
});
boxTwo.addEventListener("mouseleave", function(){
  boxOne.classList.remove("corner");
});

thePlus.addEventListener("mouseenter", function() {
  thePlus.classList.add("dissapperr");
});
thePlus.addEventListener("mouseenter", function() {
  thePlus.classList.remove("dissapperr");
});



let colorSpans = document.querySelectorAll("span.color");
let learnedSection = document.querySelector(".learned");
let numbers = document.querySelectorAll("div.progress")
addEventListener("scroll", function() {
  if ( window.scrollY + 300 >= learnedSection.offsetTop ) {
    colorSpans.forEach( function(span) {
      span.classList.add("active");
    });
    numbers.forEach( function(number) {
      setTimeout(function()
      { number.classList.add("active")}, 1000)
    });
  };
});



let homeBtn = document.querySelector(".hh");
let learnedBtn = document.querySelector(".ll");
let projectBtn = document.querySelector(".pp");

function removeAllActive() {
  homeBtn.classList.remove("active");
  learnedBtn.classList.remove("active");
  projectBtn.classList.remove("active");
};

learnedBtn.addEventListener("click", function() {
  removeAllActive();
learnedBtn.classList.add("active");
});
projectBtn.addEventListener("click", function() {
  removeAllActive();
  projectBtn.classList.add("active");
});

let homeSection = document.querySelector(".landing")
let headerSection = document.querySelector("header")
addEventListener("scroll", function() {
  if ( window.scrollY <= headerSection.offsetTop ) {
      removeAllActive();
      homeBtn.classList.add("active");
    };
});
// Start Projects-Section 
let firstBox = document.querySelector(".box.first");
let secondBox = document.querySelector(".box.second");
let thirdBox = document.querySelector(".box.third");
let forthBox = document.querySelector(".box.forth");
let fifthBox = document.querySelector(".box.fifth");
let sixBox = document.querySelector(".box.six");
let sevenBox = document.querySelector(".box.seven");
let eightBox = document.querySelector(".box.eight");

firstBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Login1/", "_blank");
});
secondBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Template_Two/", "_blank");
});
thirdBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Business_project/", "_blank");
});
forthBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Template_one/", "_blank");
});
fifthBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Hungman_game/", "_blank");
});
sixBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Qurani/", "_blank");
});
sevenBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Empty_project/", "_blank");
});
eightBox.addEventListener("click", function() {
window.open("https://aboodm4.github.io/Empty_project/", "_blank");
});