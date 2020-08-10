var w = window.innerWidth;

document.addEventListener('scroll', function () {
	var loc = window.location.href;
	if (!loc.includes('services.html')) {
		if (w < 800) {
		} else {
			if (window.scrollY > 100) {
				document.getElementById('hhs-nav').classList.add('hhs-active');
			} else {
				document.getElementById('hhs-nav').classList.remove('hhs-active');
			}
		}
	}
});

if (w < 800) {
	document.getElementById('hhs-nav').classList.add('hhs-active');
}
