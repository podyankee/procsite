$(function () {
  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next">&gt;</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">&lt;</button>',
    infinite: false
  })
  $('select').styler()
})
