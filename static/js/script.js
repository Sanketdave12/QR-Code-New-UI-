
$(document).ready(function(){


  $('.carousel').owlCarousel({
      stagePadding: 0,
      margin: -150,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },

  });
  $('.carousel1').owlCarousel({
      stagePadding: 0,
      margin:10,
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
  });
  
});


