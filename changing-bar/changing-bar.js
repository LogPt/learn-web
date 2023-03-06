const number = document.querySelector('.number ');
const blockEmpty = document.querySelector('.block-empty');
const blockFilled = document.querySelector('.block-filled');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const btnFinish = document.querySelector('finish');

// let widthMax = blockEmpty.style.width;
// console.log(widthMax);

let widthMax = parseInt(window.getComputedStyle(blockEmpty).width);
let borderWidth = parseInt(window.getComputedStyle(blockEmpty).border);

// console.log(borderWidth);

btn.addEventListener('click', () => {
  // console.log('press');
  let n = Number(number.value);
  let widthNew = 0;

  for (let m = 0; m <= 5; m++) {
    
    // console.log(m);
    blockFilled.style.width = 0;
    text.textContent = 0 + '%';

    for (let i = 1; i <= n; i++) {
      widthNew = (widthMax - 2 * borderWidth) * i / 100;
      // console.log(widthNew);
      blockFilled.style.width = widthNew + 'px';
      text.textContent = i + '%';
          }

    setTimeout(() => {
      console.log("World!");
    }, 8000);

  }

})