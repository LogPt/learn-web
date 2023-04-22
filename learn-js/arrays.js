const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

const headerElement = document.querySelector('h1');
const headerElementContent = headerElement.innerHTML;
const messageElement = document.querySelector('.message');
messageElement.innerHTML = `<p>Задан числовой массив: ${array}</br> Введите число для поиска в массиве</p>`;

const newInput = document.createElement('input');
newInput.type = "text";
newInput.placeholder = "введите число";
const newButton = document.createElement('button');
newButton.textContent = 'Линейный поиск';
const formElement = document.querySelector('.form');
formElement.prepend(newInput);
formElement.append(newButton);

const resultElement = document.querySelector('.result');

resultElement.innerHTML = '<p>Здесь будет результат поиска</p>';

newButton.addEventListener("click", function () {
  count = 0;
  let item = newInput.value;
  if (checkInput(item)) {
    let i = linearSearch(array, item);
    resultOutput(i, item);
  };
});

function findingByIndexOf() {
  let item = newInput.value;
  if (checkInput(item)) {
    let i = array.indexOf(Number(item));
    if (i != -1) {
      resultOutput(i, item)
    } else {
      resultOutput(null, item)
    }
  };
};

function checkInput(value) {
  if (isNumber(Number(value)) && value != '') {
    return true
  } else {
    errorOutput(value);
    return false
  }
}

function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
};

function resultOutput(index, item) {
  if (!(index == null)) {
    resultElement.innerHTML = '<p>Нашли число ' + item + ' в масcиве на  ' + (index + 1) + ' позиции</p>';
  } else {
    resultElement.innerHTML = '<p>Число ' + item + ' в данном масcиве не найдено.</p>';
  }
}

function errorOutput(item) {
  resultElement.innerHTML = "<p>Введено " + item + ". Это НЕ число! Исправьте ввод.</p>";
}

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] == item) {
      return i;
    }
  }
  return null;
};






// Сумма элементов массива
const sumArra = array.reduce((sum, el) => sum + el, 0);
console.log('сумма элементов массива array.reduce((sum, el) => sum + el, 0) = ', sumArra);

let array1 = array.slice();

console.log('array.slice() копирует исходный массив в array1', array1);
console.log('array.join() дает новый массив ', array.join());
console.log('Меняем порядок элементов в текущем массива методом array1.reverse()', array1.reverse());
console.log(array);
console.log('array1.splice(0,4) удаляет в массиве 4 элемента начиная с индекса 0, возвращает новый массив из удаленных', array1.splice(0, 4), 'а вот измененный массив', array1);

let array2 = array.slice(2, 5);
console.log('array.slice(2,5) копирует копирует с 2 до 3 в array2', array2);

const arr = ['asdf', 5, 6, 9, 5, 'asdf', 'wer', 23, 23, 45];
console.log(arr.map(elem => elem + 1));
console.log(arr.toString());

console.log(arr.findIndex(elem => elem == 9));

console.log(arr.filter(elem => isNumber(elem)));
console.log('elem >=3 && elem < 24', arr.filter(elem => elem >= 3 && elem < 24));

console.log(typeof (arr[0]));
console.log(arr[0].toLocaleUpperCase());

console.log(arr.filter(elem => typeof (elem) === 'string'));

// Фильтрация по диапазону "на месте"
let arr4 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr4, 2, 5);
console.log(arr4);


// Скопировать и отсортировать массив
let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5);

function copySorted(arr) {
  return arr.slice().sort((a, b) => a.localeCompare(b));
}
console.log(sorted);

// Трансформировать в массив имён
let vasya = {
  name: "Вася",
  age: 25,
  surname: "Пупкин",
  id: 1
};
let petya = {
  name: "Петя",
  age: 30,
  surname: "Иванов",
  id: 2
};
let masha = {
  name: "Маша",
  age: 28,
  surname: "Петрова",
  id: 3
};
let users = [vasya, petya, masha];
console.log('массив users', users);

let names = users.map(item => item.name);
console.log('массив имен', names);

// Трансформировать в объекты
let usersMapped = users.map(item => ({
  id: item.id,
  fullName: `${item.name} ${item.surname}`
}))
console.log('массив объектов', 
  usersMapped);

// Отсортировать пользователей по возрасту
function sortByAge(arr) {
  return arr.sort((a, b) => (a.age > b.age) ? 1 : -1)
}
sortByAge(users);
console.log('отсортировали по возрасту users', users);

// Получить средний возраст
function getAverageAge(array) {
  return array.reduce((sum, el) => sum + el.age, 0) / array.length;
}
console.log('средни возраст', getAverageAge(users));

// Оставить уникальные элементы массива
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
console.log(unique(strings));

// Создайте объект с ключами из массива
console.log(users);
function usersById() {
  return users.reduce((obj, el) => {
  obj[el.name] = el;
  return obj;
}, {})
};
  console.log(usersById());
