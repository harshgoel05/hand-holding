var w = window.innerWidth;

document.addEventListener('scroll', function () {
	console.log(window.scrollY);
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

console.log(w);
if (w < 800) {
	document.getElementById('hhs-nav').classList.add('hhs-active');
}
