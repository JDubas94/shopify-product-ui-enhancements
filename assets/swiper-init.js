// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".swiper", {
//     slidesPerView: 3,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     spaceBetween: 10,
//   });
// });

function initSwiper() {
  const swiperContainer = document.querySelector('.swiper');
  if (typeof Swiper === 'function' && swiperContainer && !swiperContainer.classList.contains('swiper-initialized')) {
    new Swiper('.swiper', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 10
    });
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
document.addEventListener('shopify:section:load', initSwiper);
document.addEventListener('shopify:section:select', initSwiper);