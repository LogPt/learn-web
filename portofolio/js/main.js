$(function scroll() {
  $(".menu a, .header__content a, .footer a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    if (top == 0) {
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    } else {
      console.log("top # 0");
      $('body,html').animate({
        scrollTop: top
      }, top / 3.15);
    }
  });
});

$('.header__btn, .menu a').on('click', function addClass() {
  $('.header__btn').toggleClass('header__btn--active');
  $('.menu').toggleClass('menu--active');
});



$(function () {
  var mixer = mixitup('.portfolio__list');
});