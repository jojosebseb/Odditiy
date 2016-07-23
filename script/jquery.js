$('.home-banner-slick').slick({
infinite: true,
speed: 300,
slidesToShow: 1,
arrows: true,
fade: true,
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


$("img.lazy").lazyload({
    effect : "fadeIn",
    threshold : 10,
    event : "sporty"
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 2000);
});

//mobile-lines
var mobilehandle = $('.mobile-handle');
var navmenu = $('.navbar-menu');
var navbar = $('.navbar');

mobilehandle.on('click', function(){
   navmenu.toggleClass('jquery-show');
   mobilehandle.toggleClass('jquery-mobile-handle');
   $('.line-1').toggleClass('jquery-line-1');
   $('.line-2').toggleClass('jquery-line-2');
   $('.line-3').toggleClass('jquery-line-3');
})

//square/list toggle

var listToggle = $('#list-toggle');
var squareToggle = $('#square-toggle');
var workProject = $('.work-project');
var workList = $('.work-list-container');
var workToggle = $('.work-toggle');
var reset = $('#reset');
var workThumbs = $('.work-thumbs');
var workLists = $('.work-lists');

listToggle.on('click', function(){
   workProject.hide(300);
   workList.show(300);
   listToggle.addClass('jquery-active');
   squareToggle.removeClass('jquery-active');
   workLists.removeClass('jquery-disappear');
   workToggle.removeClass('jquery-li-active');
   reset.addClass('jquery-li-active');
});
squareToggle.on('click', function(){
   workList.hide(300);
   workProject.show(300);
   squareToggle.addClass('jquery-active');
   listToggle.removeClass('jquery-active');
   workThumbs.removeClass('jquery-disappear');
   workToggle.removeClass('jquery-li-active');
   reset.addClass('jquery-li-active');
});


var heightMultiplier = 0;
var workArrays = workthumb.length;

var xspace = 0;
var yspace =0;

if ($(window).width() > 900 && $(window).width() < 2000){
   for (var i = 0; i < workArrays; i++) {
      workThumbs.eq(i).css({
         transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
      });
      xspace = xspace + 330;
      if (xspace > 980) {
         xspace = 0;
         yspace = yspace + 330;
         heightMultiplier = heightMultiplier + 1;
      }
   }
   workProject.css({
      height: heightMultiplier * 330,
   })
}

if ($(window).width() > 2100){
   for (var i = 0; i < workArrays; i++) {
      workThumbs.eq(i).css({
         transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
      });
      xspace = xspace + 530;
      if (xspace > 1400) {
         xspace = 0;
         yspace = yspace + 400;
         heightMultiplier = heightMultiplier + 1;
      }
   }
   workProject.css({
      height: heightMultiplier * 400,
   })
}


workToggle.on('click', function(){
   heightMultiplier = 0;
   workToggle.removeClass('jquery-li-active');
   $(this).addClass('jquery-li-active');
   var currentId = $(this).attr('id');
   var testArray = $('.work-project .'+currentId);
   workLists.addClass('jquery-disappear');
   workThumbs.addClass('jquery-disappear');
   $('.'+currentId).removeClass('jquery-disappear');

   var xspace = 0;
   var yspace =0;
   if ($(window).width() > 900 && $(window).width() < 2000){
      for (var i = 0; i < $('.work-thumbs.'+currentId).length; i++) {
         $('.work-thumbs.'+currentId).eq(i).css({
            transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
         });
         xspace = xspace + 330;
         if (xspace > 900) {
            xspace = 0;
            yspace = yspace + 330;
            heightMultiplier = heightMultiplier + 1;
         }
      }
      workProject.css({
         height: heightMultiplier * 330,
      })
   }
   else if ($(window).width() > 2100){
      for (var i = 0; i < $('.work-thumbs.'+currentId).length; i++) {
         $('.work-thumbs.'+currentId).eq(i).css({
            transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
         });
         xspace = xspace + 530;
         if (xspace > 1400) {
            xspace = 0;
            yspace = yspace + 400;
            heightMultiplier = heightMultiplier + 1;
         }
      }
      workProject.css({
         height: heightMultiplier * 400,
      })
   }
})


reset.on('click', function(){
   workThumbs.removeClass('jquery-disappear');
   workLists.removeClass('jquery-disappear');
   heightMultiplier = 0;
   xspace = 0;
   yspace = 0;
   if ($(window).width() > 900 && $(window).width() < 2000){
      for (var i = 0; i < workArrays; i++) {
         workThumbs.eq(i).css({
            transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
         });
         xspace = xspace + 330;
         if (xspace > 980) {
            xspace = 0;
            yspace = yspace + 330;
            heightMultiplier = heightMultiplier + 1;
         }
      }
      workProject.css({
         height: heightMultiplier * 330,
      })
   }
   else if ($(window).width() > 2100){
      for (var i = 0; i < workArrays; i++) {
         workThumbs.eq(i).css({
            transform: 'translateX('+xspace+'px) translateY('+yspace+'px)',
         });
         xspace = xspace + 530;
         if (xspace > 1400) {
            xspace = 0;
            yspace = yspace + 400;
            heightMultiplier = heightMultiplier + 1;
         }
      }
      workProject.css({
         height: heightMultiplier * 400,
      })
   }

})
