document.addEventListener('DOMContentLoaded', () => {

	// Header START
	$('.hamburger').on('click', function() {

		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.header-mobile-wrap').slideUp(500);
		}
		else {
			$(this).addClass('is-active');
			$('.header-mobile-wrap').slideDown(500);
		}

	});

	function scrollHeader() {
		let headerTopHeight = $('.header-top').height();
		if($(this).scrollTop() > headerTopHeight) {
			$('.header-bottom').addClass('is-fixed');
		}
		else {
			$('.header-bottom').removeClass('is-fixed');
		}
	}

	$(window).on('scroll', function() {
		scrollHeader();
	});
	scrollHeader();

	$('.anchor-link').on('click', function () {
	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 700,
	    });
		$('.header-mobile-wrap').slideUp(500);
		$('.hamburger').removeClass('is-active');
	    return false;
	});
	// Header END
	
	// Banner START
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	// Banner END


	// Services START
	$('.services-btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		removalDelay: 500,
		callbacks: {
			beforeOpen: function() {
			   this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	$('.modal-form-close').on('click', function() {
		$.magnificPopup.close();
	});
	// Services END

	// Gallery START
	$('.gallery-wrap a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		callbacks: {
			beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});

	$('.gallery-btn a').on('click', function(e) {
		e.preventDefault();
		var galleryItem = $('.gallery-item');

		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).text('Show more');
			galleryItem.each(function() {
				if($(this).hasClass('is-active')) {
					$(this).removeClass('is-active');
					$(this).slideUp();
				}
			});
		}
		else {
			$(this).addClass('is-active');
			$(this).text('Hide');
			galleryItem.each(function() {
				if(!$(this).is(':visible')) {
					$(this).addClass('is-active');
					$(this).slideDown();
				}
			});
		}
	});
	// Gallery END


	// Reviews START
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		  }
	});
	// Reviews END

})