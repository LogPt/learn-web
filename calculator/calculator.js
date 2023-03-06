const number = document.querySelectorAll('.number, .operand');
const str = document.querySelector('.string');
const res = document.querySelector('.result');
const equals = document.querySelector('.equals');

equals.onclick = () => displayResult();

number.forEach(el => {
  el.addEventListener('click', () => displayString(el.textContent))
});

function displayString(textContent) {
  console.log(textContent);
  str.innerHTML = str.innerHTML + textContent;
};

function displayResult() {
  // console.log(eval(str.innerHTML));
  res.innerHTML = eval(str.innerHTML);
}