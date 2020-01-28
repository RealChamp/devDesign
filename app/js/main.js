$(function () {
    $('.header__localization-link').on('click', function () {
        $('.header__localization-link').toggleClass('active');
        $('.dropdown').slideToggle();
    });

    $('.slider-container').slick({
        arrows: false,
        dots: true,
        fade: true,

    });


});