var swiper = new Swiper(".home__slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".product__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
  });

  var swiper = new Swiper(".blogs__slide", {
    slidesPerView: 0,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });