let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 8,
    },
  },
});
let galleryTop = new Swiper(".gallery-top", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
