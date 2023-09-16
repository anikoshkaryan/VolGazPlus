
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

$(document).on('click', '.hamburger_menu', function(){
    $('.mobile_menu').toggleClass('open');
    $('body').toggleClass('overflow_hidden');
})
$(document).on('click', '.mobile_menu_close_btn', function(){
    $('.mobile_menu').removeClass('open');
    $('body').removeClass('overflow_hidden');

})
