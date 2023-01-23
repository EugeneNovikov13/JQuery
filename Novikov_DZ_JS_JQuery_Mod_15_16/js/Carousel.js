//АДАПТАЦИЯ К РАЗМЕРАМ ЭКРАНА
$(window).on('resize load', () => {
	if ($(window).innerWidth() <= 800) {
		$('.owl-item img').css({width: '480px', height: '300px'});
		$('.gallery').css({width: '480px'});
	}
	if ($(window).innerWidth() > 800) {
		$('.owl-item img').css({width: '800px', height: '500px'});
		$('.gallery').css({width: '800px'})
	}
})
//ПОЛНЫЙ ЭКРАН
$('img').dblclick(function () {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen().then(() => {});
	}
	else document.exitFullscreen().then(() => {});
	document.addEventListener('fullscreenchange', function () {
		if (document.fullscreenElement) {
			$('.owl-item img').css({width: '1000px', height: '625px'})
			$('.owl-item, .gallery').css({width: '1000px'});
		}
	})
})
//НАСТРОЙКА КАРУСЕЛИ
let owl = $('.owl-carousel');
owl.owlCarousel({
	loop: false,
	center: true,
	items: 1,
	margin: 10,
	// dots: true,
	smartSpeed: 450,
	// responsive: {
	// 	0: {
	// 		items: 1
	// 	},
	// 	800: {
	// 		items: 3
	// 	}
	// },
	animateOut: 'fadeOut',
	checkVisibility: false
});
//ПРОКРУТКА КАРТИНОК КОЛЕСОМ МЫШИ
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.originalEvent.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

owl.navigation.js ПОСМОТРЕТЬ!