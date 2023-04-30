const field = document.querySelector('.field');
const input = document.querySelector('.input');

let snakeCoordinates;
let snakeBody;
let mouse;
let interval;
let direction = 'right';
let steps = false;
let score = 0;
input.value = `Ваши очки ${score}`;

makeField()

window.addEventListener('keydown', function (event) {
  // console.log(event.code);
  if (steps == true) {
    if (event.code == 'ArrowDown' && direction != 'up') {
      direction = 'down';
      steps = false;
    }
    if (event.code == 'ArrowUp' && direction != 'down') {
      direction = 'up';
      steps = false;
    }
    if (event.code == 'ArrowLeft' && direction != 'right') {
      direction = 'left';
      steps = false;
    }
    if (event.code == 'ArrowRight' && direction != 'left') {
      direction = 'right';
      steps = false;
    }
  }
  // console.log('direction = ', direction);
});

newGame();

function makeField() {
  let x = 1,
    y = 10;
  for (let i = 0; i < 100; i++) {
    const excel = document.createElement('div');
    excel.classList.add('excel');
    field.appendChild(excel);
    if (x > 10) {
      x = 1;
      y--;
    }
    excel.setAttribute('posX', x);
    excel.setAttribute('posY', y);
    x++;
  };
};

function generateCoordinate(max, minX, minY) {
  let posX = Math.round(Math.random() * (max - minX) + minX);
  let posY = Math.round(Math.random() * (max - minY) + minY);
  return [posX, posY];
}

function createSnake() {
  snakeCoordinates = generateCoordinate(10, 3, 1);
  snakeBody = [
    document.querySelector(`[posX = "${snakeCoordinates[0]}"][posY = "${snakeCoordinates[1]}"]`),
    document.querySelector(`[posX = "${snakeCoordinates[0]-1}"][posY = "${snakeCoordinates[1]}"]`),
    document.querySelector(`[posX = "${snakeCoordinates[0]-2}"][posY = "${snakeCoordinates[1]}"]`)
  ];

  snakeBody.forEach(el => {
    el.classList.add('snakeBody');
  });
  snakeBody[0].classList.add('snakeHead');

  // console.log('snake', snakeCoordinates);
  // console.log('snake', snakeBody);
}

function createMouse() {
  let mouseCoordinates;
  let mouseStatus;

  function setMouseCoordinates() {
    mouseCoordinates = generateCoordinate(10, 1, 1);
    mouse = document.querySelector(`[posX = "${mouseCoordinates[0]}"][posY = "${mouseCoordinates[1]}"]`);
    if (mouse.classList.contains('snakeBody')) {
      mouseStatus = false;
    } else
      mouse.classList.add('mouse');
    mouseStatus = true;
  };
  setMouseCoordinates();
  while (mouseStatus == false) {
    setMouseCoordinates();
  }

  // console.log('mouse', mouseCoordinates)
};

function moveSnake() {
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('snakeHead');
  snakeBody.at(-1).classList.remove('snakeBody');
  snakeBody.pop();

  if (direction == 'right') {
    if (snakeCoordinates[0] < 10) {
      snakeBody.unshift(document.querySelector(`[posX = "${Number(snakeCoordinates[0])+1}"][posY = "${snakeCoordinates[1]}"]`));
    } else {
      snakeBody.unshift(document.querySelector(`[posX = "1"][posY = "${snakeCoordinates[1]}"]`));
    }
  } else if (direction == 'left') {
    if (snakeCoordinates[0] > 1) {
      snakeBody.unshift(document.querySelector(`[posX = "${Number(snakeCoordinates[0])-1}"][posY = "${snakeCoordinates[1]}"]`));
    } else {
      snakeBody.unshift(document.querySelector(`[posX = "10"][posY = "${snakeCoordinates[1]}"]`));
    }
  } else if (direction == 'up') {
    if (snakeCoordinates[1] < 10) {
      snakeBody.unshift(document.querySelector(`[posX = "${snakeCoordinates[0]}"][posY = "${Number(snakeCoordinates[1])+1}"]`));
    } else {
      snakeBody.unshift(document.querySelector(`[posX = "${snakeCoordinates[0]}"][posY = "1"]`));
    }
  } else if (direction == 'down') {
    if (snakeCoordinates[1] > 1) {
      snakeBody.unshift(document.querySelector(`[posX = "${snakeCoordinates[0]}"][posY = "${Number(snakeCoordinates[1])-1}"]`));
    } else {
      snakeBody.unshift(document.querySelector(`[posX = "${snakeCoordinates[0]}"][posY = "10"]`));
    }
  }

  if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
    // console.log(true);
    mouse.classList.remove('mouse');
    let a = snakeBody.at(-1).getAttribute('posX');
    let b = snakeBody.at(-1).getAttribute('posY');
    snakeBody.push(document.querySelector(`[posX = "${a}"][posY = "${b}"]`));
    createMouse();
    score++;
    input.value = `Ваши очки ${score}`;
  }

  if (snakeBody[0].classList.contains('snakeBody')) {
    stopGame();
  }

  snakeBody.forEach(el => {
    el.classList.add('snakeBody');
  });
  snakeBody[0].classList.add('snakeHead');
  steps = true;
};

function stopGame() {
  setTimeout(() => {
    alert(`Вы набрали ${score} очков. Game Over!`);
    clearInterval(interval);
    clearOldGame();
    newGame();
  }, 500);
}

function clearOldGame() {

  const excel = document.querySelectorAll('.excel');
  excel.forEach(el => {
    el.classList.remove('snakeBody', 'snakeHead', 'mouse');
  })

  snakeBody = [];
  mouse = [];
}

function newGame() {
  direction = 'right';
  steps = false;
  score = 0;
  input.value = `Ваши очки ${score}`;
  createSnake();
  createMouse();
  interval = setInterval(moveSnake, 300);
};