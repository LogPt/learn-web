const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach(el => {
  el.addEventListener('dragover', dragover);
  el.addEventListener('dragenter', dragenter);
  el.addEventListener('dragleave', dragleave);
  el.addEventListener('drop', dragdrop);
});

function dragstart(event) {
  event.target.className = 'item';
  event.target.classList.add('hold');
  setTimeout(() => {
    event.target.classList.add('hide')
  }, 0);

};

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
};

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
  item.classList.remove('done');
  item.classList.remove('progress');

  if (event.target.className.includes('progress')) {
    item.classList.add('progress');
  } else if (event.target.className.includes('done')) {
    item.classList.add('done');
  };

}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}