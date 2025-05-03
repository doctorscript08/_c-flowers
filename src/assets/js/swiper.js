const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2000
    },

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        },

        1114: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});