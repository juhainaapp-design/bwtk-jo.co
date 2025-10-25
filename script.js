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

// التعامل مع عرض تفاصيل المشترك
function showSubscriberDetails(subscriberId, element) {
    // الحصول على معلومات البطاقة المحددة
    const card = element || event.currentTarget;
    const image = card.querySelector('img');
    const title = card.querySelector('h3');

    // في الواقع، ستقوم باسترجاع البيانات من قاعدة البيانات
    // هذا مثال توضيحي فقط
    const subscriberData = {
        id: subscriberId,
        name: title ? title.textContent : '',
        image: image ? image.src : '',
        imageAlt: image ? image.alt : '',
        phone: "0777123456",
        email: "ahmed@example.com",
        address: "عمان - الأردن",
        subscriptionDate: "2023-10-26",
        subscriptionStatus: "نشط",
        subscriptionType: "سنوي",
        subscriptionValue: "100 دينار",
        renewalDate: "2024-10-26"
    };

    // تخزين بيانات المشترك في localStorage للوصول إليها في صفحة التفاصيل
    localStorage.setItem('selectedSubscriber', JSON.stringify(subscriberData));
    
    // تحويل اسم المشترك إلى URL صديق لمحركات البحث
    const slugName = subscriberData.name
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, '-') // تحويل المسافات إلى شرطات
        .replace(/[^\u0621-\u064A0-9\-]/g, '') // الاحتفاظ بالحروف العربية والأرقام والشرطات فقط
        .replace(/\-+/g, '-') // تجنب تكرار الشرطات
        .replace(/^-+|-+$/g, ''); // إزالة الشرطات من البداية والنهاية
    
    // الانتقال إلى صفحة التفاصيل مع اسم المشترك في الرابط
    window.location.href = `subscriber/${slugName}`;
}

// التحقق مما إذا كنا في صفحة تفاصيل المشترك
if (window.location.pathname.includes('/subscriber/')) {
    // استرجاع بيانات المشترك من localStorage
    const subscriberData = JSON.parse(localStorage.getItem('selectedSubscriber') || '{}');
    
    // ملء البيانات في الصفحة
    const subscriberImage = document.getElementById('subscriberImage');
    if (subscriberImage && subscriberData.image) {
        subscriberImage.src = subscriberData.image;
        subscriberImage.alt = subscriberData.imageAlt || subscriberData.name;
    }

    document.getElementById('subscriberName').textContent = subscriberData.name || '';
    document.getElementById('phoneNumber').textContent = subscriberData.phone || '';
    document.getElementById('email').textContent = subscriberData.email || '';
    document.getElementById('address').textContent = subscriberData.address || '';
    document.getElementById('subscriptionDate').textContent = subscriberData.subscriptionDate || '';
    document.getElementById('subscriptionStatus').textContent = subscriberData.subscriptionStatus || '';
    document.getElementById('subscriptionType').textContent = subscriberData.subscriptionType || '';
    document.getElementById('subscriptionValue').textContent = subscriberData.subscriptionValue || '';
    document.getElementById('renewalDate').textContent = subscriberData.renewalDate || '';
}
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
