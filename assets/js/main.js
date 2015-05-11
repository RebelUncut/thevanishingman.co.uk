$("#fold").backgroundCycle({
	imageUrls: [
		"assets/img/fold/1.jpg",
		"assets/img/fold/2.jpg",
		"assets/img/fold/3.jpg",
		"assets/img/fold/4.jpg",
		"assets/img/fold/5.jpg",
		"assets/img/fold/6.jpg",
		"assets/img/fold/7.jpg",
		"assets/img/fold/8.jpg",
		"assets/img/fold/9.jpg",
		"assets/img/fold/10.jpg",
		"assets/img/fold/11.jpg",
	],
	duration: 10000,
	fadeSpeed: 1000
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});