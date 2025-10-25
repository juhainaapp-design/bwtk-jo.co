window.addEventListener('DOMContentLoaded', function() {
	var logo = document.querySelector('.logo');
	if (logo) {
		logo.addEventListener('click', function() {
			window.location.reload();
		});
	}

	// تهيئة تحميل الصور مع تأثير Shimmer
	var images = document.querySelectorAll('.service-icon');
	images.forEach(function(img) {
		if (img.complete) {
			img.classList.add('loaded');
		} else {
			img.addEventListener('load', function() {
				img.classList.add('loaded');
			});
		}
	});
});
window.addEventListener('DOMContentLoaded', function() {
	var links = document.querySelectorAll('.nav-link');
	if (links.length > 0) {
		links[0].classList.add('active');
	}
	links.forEach(function(link) {
		link.addEventListener('click', function(e) {
			var href = this.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				var target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
			links.forEach(function(l) {
				l.classList.remove('active');
			});
			this.classList.add('active');
		});
	});


window.addEventListener('scroll', function() {
	var sections = [
		{ id: '#top', link: links[0] },
		{ id: '#works', link: links[1] },
		{ id: '#about', link: links[2] }
	];
	var scrollPosition = window.scrollY || window.pageYOffset;
	var windowHeight = window.innerHeight;
	var documentHeight = document.documentElement.scrollHeight;
	
	// التحقق مما إذا كنا في أسفل الصفحة
	if (scrollPosition + windowHeight >= documentHeight - 50) {
		links.forEach(function(l) { l.classList.remove('active'); });
		sections[2].link.classList.add('active'); // تفعيل "من نحن"
		return;
	}

	var found = false;
	for (var i = sections.length - 1; i >= 0; i--) {
		var section = document.querySelector(sections[i].id);
		if (section) {
			var offset = section.getBoundingClientRect().top + window.scrollY;
			if (scrollPosition + 80 >= offset) { 
				links.forEach(function(l) { l.classList.remove('active'); });
				sections[i].link.classList.add('active');
				found = true;
				break;
			}
		}
	}
	if (!found) {
		links.forEach(function(l) { l.classList.remove('active'); });
		links[0].classList.add('active');
	}
});
});
