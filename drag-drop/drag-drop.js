const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');

function allowDrop(event) {
  event.preventDefault();
};
// const ufo = document.querySelector('#ufo');

const pictures = [
  './1.png',
  './2.png',
  './3.png',
  './4.png',
  './5.png',
  './6.png'
];

pictures.forEach((el, index) => {
  let img = document.createElement('img');
  img.className = 'img';
  img.alt = "самолетик";
  img.draggable = "true";
  img.src = el;
  img.id = `ufo #${index}`;
  zone2.append(img);
  img.ondragstart = drag;
});

const ufo = document.querySelectorAll('.img');
zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;

// ufo.forEach((el, index) => {
//   el.id = `ufo #${index}`;
//   el.ondragstart = drag;
// });

// ufo.ondragstart = drag;

function drag(event) {
  event.dataTransfer.setData('id', event.target.id);
  let item = event.dataTransfer.getData('id');
  console.log(event.target.id);
  event.target.classList.add('hold');
  // setTimeout(() => {
  //   event.target.classList.add('hide')
  // }, 0);

};

zone1.ondrop = drop;
zone2.ondrop = drop;

function drop(event) {
  event.target.classList.remove('hold', 'hide');
  let item = event.dataTransfer.getData('id');
  // console.log(item);
  try {
    event.target.append(document.getElementById(item));
  } catch (error) {
    console.error(error.message);
  }

}