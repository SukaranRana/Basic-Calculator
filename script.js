//Selecting elements
const allClear = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equals = document.querySelector(".equals");
const point = document.querySelector(".point");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const section2 = document.querySelector(".section-2");

// const prevCalc = document.querySelector(".prev-calc");
// const prevAns = document.querySelector(".prev-ans");
const currCalc = document.querySelector(".curr-calc");
const currAns = document.querySelector(".curr-ans");

let arrayOfCalc = [];
// let prevArrayOfCalc = [];

// let equalsPressed = false;

//Functions
const clearDisplay = function () {
  arrayOfCalc = [];
  // prevCalc.textContent = "";
  // prevAns.textContent = "";
  currCalc.textContent = "";
  currAns.textContent = "";
};

const backspaceFunction = function () {
  arrayOfCalc.pop();
  currCalc.textContent = arrayOfCalc.join("");
};

const displayOnCalc = function (e) {
  if (e.target?.classList.contains("math")) {
    arrayOfCalc.push(e.target.textContent);

    currCalc.textContent = arrayOfCalc.join("");
  }
};

// const updatingCurrPrev = function (e) {
//   document.addEventListener("keydown", function (e) {
//     if (
//       e.key === "1" ||
//       e.key === "2" ||
//       e.key === "3" ||
//       e.key === "4" ||
//       e.key === "5" ||
//       e.key === "6" ||
//       e.key === "7" ||
//       e.key === "8" ||
//       e.key === "9" ||
//       e.key === "0" ||
//       e.key === "."
//     ) {
//       arrayOfCalc.pop();
//       prevAns.textContent = currAns.textContent;
//       prevCalc.textContent = arrayOfCalc.join("");
//       currAns.textContent = "";
//       currCalc.textContent = "";
//       arrayOfCalc = [];
//       arrayOfCalc.push(e.key);
//     }
//   });
// };

const equalsFunc = function (e) {
  currAns.textContent =
    eval(arrayOfCalc.join("")) > Number.MAX_SAFE_INTEGER / 100000 ||
    eval(arrayOfCalc.join("")) < Number.MIN_SAFE_INTEGER / 100000
      ? "ERROR"
      : eval(arrayOfCalc.join(""));
  // updatingCurrPrev(e);
  // document.removeEventListener("keypress", (e) => updatingCurrPrev(e));
  // if (
  //   e.key === "1" ||
  //   e.key === "2" ||
  //   e.key === "3" ||
  //   e.key === "4" ||
  //   e.key === "5" ||
  //   e.key === "6" ||
  //   e.key === "7" ||
  //   e.key === "8" ||
  //   e.key === "9" ||
  //   e.key === "0" ||
  //   e.key === "." ||
  //   e.target.classList.contains("num")
  // ) {
  //   prevAns.textContent = currAns.textContent;
  //   prevCalc.textContent = currCalc.textContent;
  //   currAns.textContent = "";
  //   currCalc.textContent = "";
  //   arrayOfCalc = [];
  // }
};

//Event Listener
//<--1. Clearing Calculator Display-->
allClear.addEventListener("click", clearDisplay);

//<--2. Displaying numbers and operators on Calculator Display-->
section2.addEventListener("click", displayOnCalc);

//<--3. Backspace Functionality-->
backspace.addEventListener("click", backspaceFunction);

//<--4. Equals Functionality-->
equals.addEventListener("click", (e) => equalsFunc(e));

//<--Keyboard listener-->
document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") backspaceFunction();
  else if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0" ||
    e.key === "." ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "%"
  ) {
    arrayOfCalc.push(e.key);
    currCalc.textContent = arrayOfCalc.join("");
  } else if (e.key === "Enter") equalsFunc(e);
  else if (e.key === "a") clearDisplay();
});

//Light Mode
document.querySelector(".light").addEventListener("click", function () {
  document.querySelector(".calculator").style.backgroundColor = "#efeff4";
  document.querySelector("body").style.backgroundColor = "#f0f0f0";
  document.querySelector(".section-1").style.backgroundColor = "#ffffff";
  section2.style.backgroundColor = "#efeff4";
  document.querySelectorAll(".num").forEach((k) => (k.style.color = "black"));
  document
    .querySelectorAll(".operator")
    .forEach((k) => (k.style.color = "green"));
  document.querySelector(".backspace").style.color = "red";
  document.querySelector(".all-clear").style.color = "#eea620";
  currCalc.style.color = "black";
});
//Dark mode
document.querySelector(".dark").addEventListener("click", function () {
  document.querySelector(".calculator").style.backgroundColor = "#171a23";
  document.querySelector("body").style.backgroundColor = "grey";
  document.querySelector(".section-1").style.backgroundColor = "#30363c";
  section2.style.backgroundColor = "#171a23";
  document.querySelectorAll(".num").forEach((k) => (k.style.color = "white"));
  document
    .querySelectorAll(".operator")
    .forEach((k) => (k.style.color = "green"));
  document.querySelector(".backspace").style.color = "red";
  document.querySelector(".all-clear").style.color = "#eea620";
  currCalc.style.color = "white";
});
//Default Mode
document.querySelector(".default").addEventListener("click", function () {
  document.querySelector(".calculator").style.backgroundColor = "#002939";
  document.querySelector("body").style.backgroundColor = "#1f4590";
  document.querySelector(".section-1").style.backgroundColor = "#e4cfa9";
  section2.style.backgroundColor = "#002939";
  document
    .querySelectorAll(".num")
    .forEach((k) => (k.style.color = "rgba(255, 255, 255, 0.856)"));
  document
    .querySelectorAll(".operator")
    .forEach((k) => (k.style.color = "green"));
  document.querySelector(".backspace").style.color = "red";
  document.querySelector(".all-clear").style.color = "#eea620";
  currCalc.style.color = "black";
});
//Initialization
clearDisplay();
prevCalc.textContent = "";
prevAns.textContent = "";
