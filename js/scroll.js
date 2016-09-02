var scrollAnimation = (function ($w) {
	var $el = $('[data-aos]');
	var defaults = {
		canExecute: true,
		throttleTimer: 100
	};

	var _inView = function () {
		var st = $w.scrollTop();
		var wh = $w.innerHeight();
		var t, b;

		$.each($el, function (i, v) {
			var $el = $(v);
			t = $el.offset().top;
			b = t + $el.outerHeight();
			if(b>=st && t<=st+wh) $el.addClass('animate');
		});
	};

	var _throttle = function () {
		if(defaults.canExecute) {
			setTimeout(function () {
				_inView();
				_throttle();
				defaults.canExecute = true;
			}, defaults.throttleTimer);
		}
		defaults.canExecute = false;
	};

	var init = function () {
		$w.scroll(_throttle).scroll();
	}

	return {
		init: init
	};
})($(window));

$(function () {
	scrollAnimation.init();
});