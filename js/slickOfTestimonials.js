$(".testimonials__content").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});