const api =
  `https://gist.githubusercontent.com/VasilyMur
/43ef6df83bba694f871f11a16ed7556d/raw/
b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;

const lines = [];
const newlines = [];
const stations = [];

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
  );

getData(api)
  .then(data => {
    data.forEach(line => {
      stations.push(...line.stations);
      lines.push(line.name);
    })
  })
  .then(dim => {
    lines.forEach(el => console.log(el + " линия"));
    newlines = lines.map(el => el + " линия");
    console.log('newlines >>>> ', newlines);
  })
  .catch(error => console.log('error >>> ', error))



setTimeout(() => {
  console.log('5 sec later');
}, 1000);


//console.log('after Timout');



// const asyncFn = async () => {
//   return lines.map(el => "станция" + el)
// };
// asyncFn();
// console.log(newLines);
// const newLines = promiseLines.PromiseResult