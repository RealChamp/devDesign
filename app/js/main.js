$(function () {

    $('.burger-menu').on('click', function () {
        $('.header__navigation').slideToggle();
    });

    $(window).resize(function () {
        if ($(window).width() >= 1080) {
            $('.header__navigation').removeAttr('style')
        }
    });

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

    $('.testimonials-container').slick({
        arrows: false,
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5500,
        responsive: [{
                breakpoint: 1630,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    var mixer = mixitup('.works-container', {
        selectors: {
            target: '.works__item'
        }
    });




});