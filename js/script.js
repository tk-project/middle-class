$(function () {

	// ハンバーガーメニュー
	$(function () {
		$('#nav-toggle').on('click', function() {
			$('body').toggleClass('open');
		});
		$('.global-nav__menu_link').on('click', function(event) {
			$('body').toggleClass('open');
	});
	});



	// slider
	var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		slidesPerView: 1.5,
		spaceBetween: 20,
		initialSlide: 0,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			// 768px以上の場合
			768: {
				slidesPerView: 2.5,
		spaceBetween: 20,
			},
			// 980px以上の場合
			980: {
		spaceBetween: 40,
				slidesPerView: 3.5,
			},
			// 1200px以上の場合
			1200: {
		spaceBetween: 56,
				slidesPerView: 3.5,
			}
		}
	});

	// フェードイン
	$(function () {
		$(window).scroll(function () {
			$(".effect-fade").each(function () {
				var elemPos = $(this).offset().top; /* 要素の位置を取得 */
				var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
				var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
				if (scroll > elemPos - windowHeight) {
					/* 要素位置までスクロール出来たときに動作する */
					$(this).addClass("effect-scroll");
				}
			});
		});
		jQuery(window).scroll();
	});

	// チェックしないと送信できない
	$("#submit-link").prop("disabled", true);
	$("#check-id").click(function(){
	if ($(this).prop("checked") == false) {
	$("#submit-link").prop("disabled", true);
	} else {
	$("#submit-link").prop("disabled", false);
	}
	});
	
/* 「同意する」チェックイベント */
$('[type="checkbox"]').on('click', function(){
	if($('[type="checkbox"]').prop("checked")){
		$('[type="submit"]').css('background', 'linear-gradient(90deg,#FA41CC, #6020B0)').css('opacity',1);
	} else {
		$('[type="submit"]').css('background', 'linear-gradient(90deg,#FA41CC, #6020B0)').css('opacity',0.5);
	}
});

/* 「同意する」がチェックされていない場合submit=false */
$('[type="submit"]').on('click', function(){
	if ($('[type="submit"]').css('background') == 'linear-gradient(90deg,#FA41CC, #6020B0)') {
		return false;
	}
});

	// お問合せ完了メッセージ
	$('#form').submit(function (event) {
		var formData = $('#form').serialize();
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSda1gT_iIMkrZPBQFI5I0TyIewU-H4eXUbNb8wZXiMZDcGrMQ/formResponse",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$(".end-message").slideDown();
					$(".submit-btn").fadeOut();
					//window.location.href = "thanks.html";
				},
				200: function () {
					$(".false-message").slideDown();
				}
			}
		});
		event.preventDefault();
	});
	
	// スムーススクロール
	$(function(){
		$('a[href^="#"]').click(function () {
			// 移動先を100px上にずらす
			var adjust = 100;
			// スクロールの速度
			var speed = 500;
			// アンカーの取得
			var href = $(this).attr("href");
			// 移動先を取得
			var target = $(href == "#" || href == "" ? 'html' : href);
			// 移動先を調整
			var position = target.offset().top - adjust;
			// スムーススクロール
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});

		$('a[href^=#]:not([href=#])').click(function () {
			var target = $($(this).attr('href')).offset().top;
			target -= -70;
			$('html, body').animate({ scrollTop: target }, 500);
			return fa
		});
	});

	
});
