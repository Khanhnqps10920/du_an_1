$(document).ready(function () {
  $('.slideShow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true
  });


  $('.movie__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: '50px',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          autoplay: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: 0,
          autoplay: false

        }
      }
    ]
  })

  $('.coming-soon__slider').slick({
    centerPadding: '60px',
    slidesToShow: 4,
    autoplay: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  })

  $('.promotion__slider').slick({
    slidesToShow: 1,
    centerPadding: '60px',
    arrows: false,
    dots: true,

  })
});