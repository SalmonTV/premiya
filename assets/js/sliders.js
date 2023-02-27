const delay = 5000;

const bannerSlider = new Swiper('.banner-slider', {
  cssMode: true,
  autoplay: {
    delay,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

bannerSlider.on('slideChange', function () {
  window._interval = 0;
});

if (window.innerWidth > 767) {
  new Swiper('.product-slider', {
    cssMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
} else if (window.innerWidth < 767) {
  new Swiper('.product-slider', {
    cssMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const setProgress = (value) => {
  document.documentElement.style.setProperty('--slider-progress', `${value}deg`);
}

document.addEventListener('DOMContentLoaded', function () {
  setProgress(0);
  const intervalSpeed = 10;
  window._interval = 0;
  setInterval(() => {
    window._interval += intervalSpeed;
    const percent = window._interval / delay * 100;
    setProgress(percent / 100 * 180);
  }, intervalSpeed);
});
