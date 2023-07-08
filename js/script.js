document.addEventListener('DOMContentLoaded', () => {
	
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
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

	$('.services-btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		callbacks: {
			beforeOpen: function() {
			   this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	$('.modal-form-close').on('click', function() {
		$.magnificPopup.close();
	});

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
			$(this).text('Показать еще');
			galleryItem.each(function() {
				if($(this).hasClass('is-active')) {
					$(this).removeClass('is-active');
					$(this).slideUp();
				}
			});
		}
		else {
			$(this).addClass('is-active');
			$(this).text('Скрыть');
			galleryItem.each(function() {
				if(!$(this).is(':visible')) {
					$(this).addClass('is-active');
					$(this).slideDown();
				}
			});
		}

	});

})