$(function () {

    $('.works__inner-btns button').on('click', function () {
        $('.works__inner-btns button').removeClass('active');
        $(this).toggleClass('active');
        console.log(this);
    });


    $('.header__localization-link').on('click', function () {
        $(this).toggleClass('active');
        $('.dropdown').slideToggle();
    });

    $('.slider-container').slick({
        arrows: false,
        dots: true,
        fade: true,

    });


    var mixer = mixitup('.works-container', {
        selectors: {
            target: '.works__item'
        }
    });
});