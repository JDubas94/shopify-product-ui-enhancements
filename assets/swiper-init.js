document.addEventListener("DOMContentLoaded", function () {
  const settings = window.swiperSettings || {};

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: settings.mobile.slidesPerView || 1,
    spaceBetween: settings.mobile.spaceBetween || 10,

    breakpoints: {
      768: {
        slidesPerView: settings.tablet.slidesPerView || 2,
        spaceBetween: settings.tablet.spaceBetween || 15
      },
      1024: {
        slidesPerView: settings.desktop.slidesPerView || 4,
        spaceBetween: settings.desktop.spaceBetween || 20
      }
    },

    pagination: settings.pagination
      ? {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          dynamicBullets: false
        }
      : false,

    navigation: settings.arrows
      ? {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      : false,

    loop: true
  });
window.swiperInstance = swiper;

  const btns = document.querySelectorAll('.color-btn');
  const clear = document.getElementById('clear-filter');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.dataset.color;
      swiper.slides.forEach(slide => {
        const el = slide.el || slide;
        el.style.display = (el.dataset.color === color) ? '' : 'none';
      });
      swiper.update();
    });
  });

  clear.addEventListener('click', () => {
    swiper.slides.forEach(slide => {
      const el = slide.el || slide;
      el.style.display = '';
    });
    swiper.update();
  });
});
