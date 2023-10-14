let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
});

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => `<b style="transform: rotate(${i * 6.3}deg)">${char}</b>`)
  .join("");

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contents.forEach((content) => (content.style.display = "none"));
    contents[index].style.display = "block";
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const skill1 = document.getElementById("number1");
let counter1 = 0 ;
const html = "HTML"
setInterval(() => {
    if(counter1 == 85){
        clearInterval();
    }
    else {
          counter1 += 1;
number1.innerHTML = counter1 + "%" + `<br><h4>${html}</h4>` ;
    }
  
},22)

const skill2 = document.getElementById("number2");
let counter2 = 0 ;
const css = "CSS"
setInterval(() => {
    if(counter2 == 85){
        clearInterval();
    }
    else {
          counter2 += 1;
number2.innerHTML = counter2 + "%" + `<br><h4>${css}</h4>` ;
    }
  
},22)

const skill3 = document.getElementById("number3");
let counter3 = 0 ;
const js = "Javascript"
setInterval(() => {
    if(counter3 == 85){
        clearInterval();
    }
    else {
          counter3 += 1;
number3.innerHTML = counter3 + "%" + `<br><h4>${js}</h4>` ;
    }
  
},22)

const skill4 = document.getElementById("number2");
let counter4 = 0 ;
const ts = "TypeScript"
setInterval(() => {
    if(counter4 == 85){
        clearInterval();
    }
    else {
          counter4 += 1;
number4.innerHTML = counter4 + "%" + `<br><h4>${ts}</h4>` ;
    }
  
},22)
