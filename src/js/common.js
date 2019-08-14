$(function () {
  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next">&gt;</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">&lt;</button>',
    infinite: false
  })
  $('select').styler()
  $('.header__btn-menu').on('click', function methodName () {
    $('.menu ul').slideToggle()
  })
})
