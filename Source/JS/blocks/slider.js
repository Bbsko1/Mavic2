// about-slider

$('.about__slider').slick({
  touchThreshold: 10,
  speed: 500,
  responsive: [{
    breakpoint: 768,
    settings: {
      dots: true,
      arrows: false,
    }
  }]
});


// advantages-slider

/* $('.advantages__slider').slick({
  mobileFirst: true,
  arrows: false,
  dots: true,
  speed: 500,
  slidesToScroll: 1,
  touchThreshold: 10,
  responsive: [{
    breakpoint: 0,
    settings: {
      slidesToShow: 2,
    },
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
    },
    breakpoint: 991,
    settings: "unslick",
  }]
}); */


$(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.advantages__slider:not(.slick-initialized)').slick({
      arrows: false,
      autoplay: true,
      dots: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      touchThreshold: 10,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  } else {
    $(".advantages__slider").filter('.slick-initialized').slick("unslick");
  }
});

// description-slider


/* $('.description__slider').slick({
  mobileFirst: true,
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 2
    },
    breakpoint: 991,
    settings: "unslick",
  }]
}); */

$(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.description__slider:not(.slick-initialized)').slick({
      arrows: false,
      autoplay: true, 
      dots: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      touchThreshold: 10,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  } else {
    $(".description__slider").filter('.slick-initialized').slick("unslick");
  }
});

