const number = document.querySelectorAll('.number');
const operand = document.querySelectorAll('.operand');
const str = document.querySelector('.string');
const res = document.querySelector('.result');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const negate = document.querySelector('.negate');

let resultReady = false;
let operandEntered = false;

equals.onclick = () => displayResult();
// negate.onclick = () => 
clear.onclick = () => reset();
backspace.onclick = () => backSpace();

operand.forEach(el => {
    el.addEventListener('click', () => displayOperand(el.textContent))
});

number.forEach(el => {
  el.addEventListener('click', () => displayString(el.textContent))
});

function displayString(textContent) {
  str.innerHTML = str.innerHTML + textContent;
  operandEntered = false;
};

function displayOperand(textContent) {
  if (operandEntered == false) {
    str.innerHTML = str.innerHTML + textContent;
    operandEntered = true;
  }
  else{
    str.innerHTML = str.innerHTML.slice(0, -1) + textContent;
    operandEntered = true;
  }
}

function displayResult() {
  // console.log(eval(str.innerHTML));
  res.innerHTML = eval(str.innerHTML);
  resultReady = true;
}

function reset() {
  str.innerHTML = null;
  res.innerHTML = null;
  resultReady = false;
  operandEntered = false;
}

function backSpace() {
  if (resultReady == false) {
    str.innerHTML = str.innerHTML.slice(0, -1);
  }
}