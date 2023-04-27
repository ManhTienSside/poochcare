$(".testimonials__content").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
      }
    }

  ]
});