$(function() {

	// open menu
	$('body').on('click', '.header__sidebar-more', function() {
		
		if ( $('.header__sidebar-item').hasClass('header__sidebar-item--hidden') ) {
			$('.header__sidebar-item').removeClass('header__sidebar-item--hidden')
		} else {
			$('.header__sidebar-item:gt(2)').addClass('header__sidebar-item--hidden');
		}

	});

	//obile menu
	$('body').on('click', '.header__union', function() {
		$('.header__modal').addClass('header__modal--active');
	});

	$('body').on('click', '.header__modal-close', function() {
		$('.header__modal').removeClass('header__modal--active');
	});



	// search btn
	$('body').on('click', '.header__search-btn', function() {
		
		$('.header__operators').toggle();
		$('.header__search').toggleClass('header__search--open flex flex__align-justify');

		let searchInput = $('.header__search-input');

		if ( searchInput.val() === '' ) {
			return false;
		}

	})

	var counter = 0;
	// add address field
	$('body').on('click', '#js-add-address', function() {
		counter++;
		console.log(counter);
		$('.calc__form-input--add').append('<input type="text" name="from-'+ counter +'" class="calc__form-input calc__form-input--more" placeholder="(начните вводить адрес)">');
	});

	// add comment field
	$('body').on('click', '#js-add-comment', function() {
		$('.calc__form-add-textarea').toggle('calc__form-add-textarea--active');
		$(this).parent('.calc__form-add-comment').toggleClass('calc__form-add-comment--open');

		setTimeout(function() {
			let blockVisibility = $('.calc__form-add-textarea').css('display');

			if ( blockVisibility === 'block' ) {
				$('#js-add-comment').text('Свернуть комментарий');
			} else {
				$('#js-add-comment').text('Добавить комментарий');
			}

		}, 500);
	})

	// animation block
	function animateInit() {
		setTimeout(function() {
			$('.animation-block__pin-1').addClass('active');
		}, 0)

		setTimeout(function() {
			$('.animation-block__pin-2').addClass('active');
		}, 1000)

		setTimeout(function() {
			$('.animation-block__car-1').addClass('active');
		}, 2800)

		setTimeout(function() {
			$('.animation-block__car-2').addClass('active');
		}, 2800)
	}


	$(window).on('scroll', function() {
		let scrollHeight = window.scrollY;
		let blockOffsetTop = $('.animation-block').offset().top;

		if (scrollHeight >= blockOffsetTop - 600) {
			animateInit();
		}

	});


	// init slider reviews
	$('.js-reviews-slider').slick({
        infiniti: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
				dotsClass: 'reviews__dots flex flex__align-center',
				responsive: [
					{
						breakpoint: 1139,
						settings: {
							slidesToShow: 2
						}
					}
				]
    });


		//init slider partners
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
		
		//mobile actions slider

		$(window).on('resize load', function() {
			let actionBlock = $('.js-actions-slider');
			actionBlock.removeClass('actions__container flex flex__align-justify');

			if ( $(window).width() < 1140 ) {
				actionBlock.slick({
					speed: 700,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					dotsClass: 'patrners__dots flex flex__align-center',
				});
			} else {
				actionBlock.slick('unslick');
			}

		});

    // adding addres in calc input
    $('body').on('click', '.calc__form-example', function(){
        let address = $(this).text();

				$('.calc__form-input--from').val(address);
				$('.calc__form-input--from').focus();
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
					.addClass('d-tabs__item--active')
					.siblings()
					.removeClass('d-tabs__item--active')
					.closest('.d-tabs')
					.find('.d-tabs__content')
					.removeClass('d-tabs__content--active')
					.eq($(this).index()).addClass('d-tabs__content--active');
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

    // sign-in validation
    $('body').on('submit', '.sign-in__form', function(e) {
        

        let login = $('input[name="login"]');
        let pass = $('input[name="pass"]');

        $(login).parent().removeClass('error');
        $(login).parent().removeClass('valid');
        $(pass).parent().removeClass('error');
        $(pass).parent().removeClass('valid');


        if ( login.val() === '') {
            $(login).parent().addClass('error');
            e.preventDefault();
        } else {
            $(login).parent().addClass('valid');
        }

        if ( pass.val() === '' ) {
            $(pass).parent().addClass('error');
            e.preventDefault();
        } else {
            $(pass).parent().addClass('valid');
        }
    })

});
