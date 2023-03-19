const container = document.querySelector('.container');
const pictureUrl = [
  'https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',

  'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',

  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',

  'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

  'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

  'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
];

pictureUrl.forEach((url, index) => {
  let slide = document.createElement('div');
  slide.className = 'slide';
  slide.style.backgroundImage = "url('" + url + "')";
  container.append(slide);
  let h3 = document.createElement('h3');
  h3.innerHTML = `Photo # ${index+1}`;
  h3.style.color = "#181f1f";
  slide.append(h3);
});

const slides = document.querySelectorAll('.slide');

for (const slide of slides) {

  // пробовал получить рандомные картинки, но они не так быстро меняются на сайте, видимо.
  // fetch("https://source.unsplash.com/random/1920x1080/?wallpaper,landscape").then(data => {
  //   console.log(data.url);
  //   console.log("url('" + data.url + "')");
  //   slide.style.backgroundImage = "url('" + data.url + "')";
  // });   

   slide.addEventListener('click', () => {
    clearActivClasses();
    slide.classList.add('active');
  })
};

function clearActivClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}