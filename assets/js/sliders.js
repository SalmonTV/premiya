var swiper = new Swiper(".banner-slider", {
    autoplay: {
        delay: 100000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

if (window.innerWidth > 767) {
    var swiper = new Swiper(".product-slider", {
        cssMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true, 
        },
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
  } else if (window.innerWidth < 767) {
    var swiper = new Swiper(".product-slider", {
        cssMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
  }