const api =
  `https://gist.githubusercontent.com/VasilyMur/43ef6df83bba694f871f11a16ed7556d/raw/b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;

const stations = [];

fetch(api)
  .then(res => res.json())
  .then(data => {
    // console.log('data >>>>> ', data);
    data.forEach(line => {
      stations.push(...line.stations);
    })
  });

const searchInput = document.querySelector('.search');
const searchOptions = document.querySelector('.options');

function getOptions(word, stations) {
  return stations.filter(s => {
    const regex = new RegExp(word, 'gi');
    return s.name.match(regex);
  })
}

function displayOptions() {

  // console.log('tрis value >>> ', this.value);
  const options = getOptions(this.value, stations);
  // console.log('options >>> ', options);

  const html = options
    .slice(0, 9)
    .map(station => {
      const regex = new RegExp(this.value, 'gi');
      const stationName = station.name.replace(regex,
        `<span class="hl">${this.value}</span>`);
      return `<li> ${stationName}</li>`;
    })
    .join('');

  searchOptions.innerHTML = this.value ? html : null;

}

searchInput.addEventListener('change', displayOptions);
searchInput.addEventListener('keyup', displayOptions);