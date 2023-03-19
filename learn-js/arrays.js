const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

const headerElement = document.querySelector('h1');
const headerElementContent = headerElement.innerHTML;
headerElement.innerHTML = 'Урок-упражнение </br>' + headerElementContent;

const messageElement = document.querySelector('.message');
messageElement.innerHTML = `<p>Задан массив: ${array}</br> Введите число для поиска </p>`;

const newInput = document.createElement('input');
newInput.type = "text";
newInput.placeholder = "введите число";
const newButton = document.createElement('button');
newButton.textContent = 'Искать!';
const formElement = document.querySelector('.form');
formElement.append(newInput);
formElement.append(newButton);

const resultElement = document.querySelector('.result');
// const newResult = document.createElement('div');
// newResult.className = "divresult";
resultElement.innerHTML = '<p>Здесь будет результат поиска</p>';

newButton.addEventListener("click", function () {
    // const resultBlock = document.querySelector('.divresult');
    // // console.log(resultBlock);
    // if (!(resultBlock == null)) {
    //     resultBlock.remove();
    // }
    count = 0;
    let item = newInput.value;
    if (isNumber(Number(newInput.value))) {
        // console.log("Введено число ", item);
        let i = linearSearch(array, item);
        // console.log("Позиция ", i);
        // console.log(count);
        resultOutput(i, item);
    }
    else {
        errorOutput(item);
    }
});

function resultOutput(index, item) {

    // console.log("Число в функции ", index);
    // console.log(!index == null);
    if (!(index == null)) {
        resultElement.innerHTML = '<p>Нашли число ' + item + ' в масcиве на  ' + (index+1) + ' позиции за ' + count + ' итерации(й)</p>';
    }
    else {
        resultElement.innerHTML = '<p>Число ' + item + ' в данном масcиве не найдено.</p>';
    }
    // resultElement.prepend(newResult);
}

function errorOutput(item) {

    resultElement.innerHTML = "<p>Введено " + item + ". Это НЕ число! Исправьте ввод.</p>";
    // resultElement.prepend(newResult);
    // console.log("Введено НЕ число! Исправьте ввод.");
}

function linearSearch(array, item) {
    // console.log('задан массив ', array);
    // console.log('длина массива ', array.length);
    // console.log('ищем число ', item);

    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] == item) {
            return i;
        }
    }
    return null;
};

function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}