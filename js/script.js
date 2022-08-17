  //アコーディオンメニュー
$(function() {
	$('.header-hover').hover(function() {
		$(this).find('.nav-menu1').stop().slideDown('fast');
	}, function() {
		$(this).find('.nav-menu1').stop().hide();
	});
})
