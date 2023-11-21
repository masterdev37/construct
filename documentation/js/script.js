document.addEventListener('DOMContentLoaded', () => {

	$('.sidebar li a').on('click', function () {
	    let href = $(this).attr('href');
		$('.sidebar li a').removeClass('active');
		$(this).addClass('active');
	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 700,
	    });
		$('.header-mobile-wrap').slideUp(500);
		$('.hamburger').removeClass('is-active');
	    return false;
	});

	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();

		// Iterate through each section div
		$('.body-block').each(function() {
		var currentId = $(this).attr('id');
		var offsetTop = $(this).offset().top - 100; // Adjust offset as needed

		if (scrollPosition >= offsetTop) {
			// Remove 'active' class from all sidebar items
			$('.sidebar li a').removeClass('active');

			// Add 'active' class to the corresponding sidebar item
			$('.sidebar a[href="#' + currentId + '"]').addClass('active');
		}
		});
	});

})