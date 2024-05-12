var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});