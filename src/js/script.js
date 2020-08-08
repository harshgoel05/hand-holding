document.addEventListener('scroll', function () {
	console.log(window.scrollY);
	if (window.scrollY > 100) {
		document.getElementById('hhs-nav').addClass('hhs-active');
	} else {
		document.getElementById('hhs-nav').removeClass('hhs-active');
		document.getElementById('hhs-nav');
	}
});
