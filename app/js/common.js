$(function() {

	$('.js-reviews-slider').slick({
        infiniti: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: 'reviews__dots flex flex__align-center',
    });

    $('.js-patrners-slider').slick({
        infiniti: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true,
        dotsClass: 'patrners__dots flex flex__align-center',
    });

});
