  //アコーディオンメニュー
$(function() {
	$('.header-hover').hover(function() {
		$(this).find('.nav-menu1').stop().slideDown('fast');
	}, function() {
		$(this).find('.nav-menu1').stop().hide();
	});
})

//ハンバーガーボタン
$('.hamburger-btn').on('click',function() {
    $(this).toggleClass('is-open');
    $('nav').toggleClass('is-open');
    $('body').toggleClass('is-open');
});

// $(function() {
//     $('.hamburger-btn').on('click',function() {
//         if($(this).hasClass('active')) {
//             $(this).removeClass('active');
//             $('nav').removeClass('open')
//         } else {
//             $(this).addClass('active');
//             $('nav').addClass('open');
//         }
//     });
// });