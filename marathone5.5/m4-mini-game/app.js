const board = document.querySelector('#board');
// const colors = ['red', 'green', 'yellow', 'grey', 'blue', 'orange', 'violet', 'pink'];
const colors = [
  '250, 0, 0',
  '250, 250, 0',
   '0, 250, 0',
   '0, 250, 250',
   '0, 0, 250',
   '250, 0 ,250'
  ];
const SQUARES_NUMBER = 2000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })

  board.append(square);

};

function setColor(square) {
  const colorRnd = getRandomColor();
  const color = getColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 6px ${color}`;

};

function removeColor(square) {
  square.style.backgroundColor = '#ffff';
  square.style.boxShadow = `0 0 2px #0000`;
};

let indexOpasity = 0;
let index = 0;

function getColor() {
  indexOpasity += 0.025;
  if (indexOpasity > 1) {
    indexOpasity = 0.1;
    index += 1;
  };
  if (index > (colors.length - 1)) {
    index = 0;
  };
  // console.log(indexOpasity);
  let colorNew = `rgb(${colors[index]}, ${indexOpasity})`;

  // console.log(colorNew);
  return colorNew;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}