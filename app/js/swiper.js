
var swiper = new Swiper('#swiper .swiper-container', {
    autoplay: {
      delay: 3000,
    },
    speed: 3000,
    effect: 'fade',
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });