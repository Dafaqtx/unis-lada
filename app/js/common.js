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

    // adding addres in calc input
    $('body').on('click', '.calc__form-example', function(){
        let address = $(this).text();

        $('.calc__form-input--from').val(address);
    })


    // change active btn in calc form
    $('body').on('click', '.calc__form-time-btn', function(e){
        $('.calc__form-time-btn').removeClass('calc__form-time-btn--active');
        $(this).addClass('calc__form-time-btn--active');
        return false;
    })

    // tabs
    $('.d-tabs__list').on('click', 'li:not(.d-tabs__content--active)', function() {
        $(this)
          .addClass('d-tabs__item--active').siblings().removeClass('d-tabs__item--active')
          .closest('.d-tabs').find('.d-tabs__content').removeClass('d-tabs__content--active').eq($(this).index()).addClass('d-tabs__content--active');
    });

    // accordion
    $('.d-accordion__sub-list--active').slideDown();

    $('body').on('click', '.d-accordion__item', function() {

        $('.d-accordion__item').removeClass('d-accordion__item--active');
        $(this).addClass('d-accordion__item--active');

        $(".d-accordion__sub-list").removeClass('d-accordion__sub-list--active');
        $(".d-accordion__sub-list").slideUp();
        
        if( !$(this).find('.d-accordion__sub-list').is(":visible") ) {

			$(this).find('.d-accordion__sub-list').addClass('d-accordion__sub-list--active');
			$(this).find('.d-accordion__sub-list').slideDown();
		}

      
    });

});
