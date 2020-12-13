// Select all links with hashes
$(document).ready(function(){
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  });

/* Slick */
$(document).ready(function(){
  $('#carouselExample').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false
  });
});

$('#carouselExample').not('.slick-initialized').slick({
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></button>',
});

$('.campus').slick({
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  speed: 1000,
  index: 2,

  focusOnSelect:true,
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.campus').slick({
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right"></i></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left"></i></button>',
// add the rest of your options here
});
