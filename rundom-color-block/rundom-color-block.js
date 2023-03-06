const text = document.querySelector('.color-number');
const block = document.querySelector('.block');
const button = document.querySelector('.button');
const hex = '0123456789ABCDEF';

button.addEventListener('click', () => {
  const currentColor = getRundomColor();
  block.style.backgroundColor = currentColor;
  block.style.border = 'none';
  text.textContent = currentColor;
})

function getRundomColor() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}