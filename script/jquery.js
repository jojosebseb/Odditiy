$('.home-banner-slick').slick({
infinite: true,
speed: 300,
slidesToShow: 1,
arrows: true,
prevArrow: $('.home-arrow-prev'),
nextArrow: $('.home-arrow-next'),
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
    }
  },
]
});
