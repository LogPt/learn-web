const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
let timerId = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    // console.log(time);
    screens[1].classList.remove('down');
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRundomCircle();
  };
});



function startGame() {
  timerId = setInterval(decreaseTime, 1000);
  // timerId = id;
  createRundomCircle();
  setTime(time);
};

function decreaseTime() {
  if (time === 0) {
    clearInterval(timerId);
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
  // console.log(value);
}

function finishGame() {
  // timeEl.parentNode.style.display = 'None';
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class="primary">${score} </span></h1>`;
  const startAgain = document.createElement('div');
  startAgain.classList.add('time-btn');
  startAgain.style.marginTop = '20px';
  startAgain.innerText = 'Начать снова?';
  board.parentNode.append(startAgain);
  startAgain.addEventListener('click', () => {
    score = 0;
    screens[1].classList.remove('up');
    screens[1].classList.add('down');
    board.innerHTML = null;
    timeEl.parentNode.classList.remove('hide');
    startAgain.classList.remove('time-btn');
    startAgain.innerHTML = null;
  });
}


function createRundomCircle() {
  const circle = document.createElement('div');
  let {
    width,
    height
  } = board.getBoundingClientRect();
  let size = getRandomNumber(10, 60);
  let randomColor = getRandomColor();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = randomColor;
  board.append(circle);

}

function getRandomColor() {
  const red = Math.round(Math.random() * 250);
  const green = Math.round(Math.random() * 250);
  const blue = Math.round(Math.random() * 250);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  // console.log(randomColor);
  return randomColor;
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}