
let swiper = new Swiper("#top_slider", {
    pagination: {
        el: "#top_slider_pagination",
        clickable: true,

    },
    direction: 'horizontal',
    loop: true,
    autoplay: true
});


let swiper2 = new Swiper("#our_colleagues_slider", {
    direction: 'horizontal',
    slidesPerView: 7,
    loop: true,
    navigation: {
        nextEl: ".our_colleagues_slider_next_btn",
        prevEl: ".our_colleagues_slider_prev_btn",
    },
});
