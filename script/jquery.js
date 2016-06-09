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
$('.about-slick').slick({
infinite: true,
speed: 300,
slidesToShow: 1,
arrows: true,
prevArrow: $('.about-prev'),
nextArrow: $('.about-next'),
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
//navbar-controller
var win = $(window);
win.on('scroll', function(){
  if(win.scrollTop() > 100){
    $('.navbar').addClass('navbar-short');
  }
  else {
    $('.navbar').removeClass('navbar-short');
  }
});
//navbar-controller

//back-to-top
if ($('.work-footer').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.work-footer').addClass('show');
            } else {
                $('.work-footer').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.work-footer').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
//back-to-top

var workthumb = $('.work-thumbs');

workthumb.waypoint(function() {
   console.log("asd");
   $(this).addClass("jquery-blue");
});
