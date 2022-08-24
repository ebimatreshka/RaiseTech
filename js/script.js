  //アコーディオンメニュー
$(function() {
	$('.header-hover').hover(function() {
		$(this).find('.nav-menu1').stop().slideDown('fast');
	}, function() {
		$(this).find('.nav-menu1').stop().hide();
	});
})

//ハンバーガーボタン
$('.hamburger-btn-wrapper').on('click',function() {
    $(this).toggleClass('is-open');
    $('.nav').toggleClass('is-open');
    // $('body').toggleClass('is-open');
});

