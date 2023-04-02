const dino = document.querySelector('.dino');
const cactus = document.querySelectorAll('.cactus');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');


document.addEventListener('keydown', (event) => {
  jump()
});
startBtn.addEventListener('click', startRun);
stopBtn.addEventListener('click', stopGame);

function startRun() {
  cactus[0].classList.add('cactus-animated');
  cactus[1].classList.add('cactus2-animated');
  stopBtn.style.transform = `translateX(0vw)`;
  startBtn.style.transform = `translateX(100vw)`;
}

function stopGame() {
  cactus[0].classList.remove('cactus-animated');
  cactus[1].classList.remove('cactus2-animated');
  stopBtn.style.transform = `translateX(-100vw)`;
  startBtn.style.transform = `translateX(0vw)`;
}

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(() => {
    dino.classList.remove('jump')
  }, 700);
}

let isAlive = setInterval(() => {
      let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
      let cactus1Left = parseInt(window.getComputedStyle(cactus[0]).getPropertyValue('left'));
      let cactus2Left = parseInt(window.getComputedStyle(cactus[1]).getPropertyValue('left'));

      if (cactus1Left < 90 && cactus1Left > 20 && dinoBottom < 50) {
        alert ('Game Over!')
      }

      if (cactus2Left < 90 && cactus2Left > 20 && dinoBottom < 50) {
        alert ('Game Over!')
      }

}, 30);