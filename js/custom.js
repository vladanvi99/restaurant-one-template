$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop':  parseInt($target.offset().top,10)
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot">0'+(i+1)+'</a>';
    },
});
jQuery('.testimonialslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: false,
  arrows: true,
  infinite: true
});

jQuery('.eventslider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    responsive: [
        
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
jQuery('.ourstaffslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: true,
  arrows: false,
  infinite: true,
  customPaging: function(slider, i) { 
    return '<button class="tab">' + 
    '<div class="imi"><img src="' +  $(slider.$slides[i]).data('url') + '" /></div>' + 
    '<h3>' +  $(slider.$slides[i]).data('title') + '</h3>' +
    '<p>' +  $(slider.$slides[i]).data('designation') + '</p>' +
    '</button>';
  },
});
