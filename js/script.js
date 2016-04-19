$(document).ready(function(){


//ページ内リンクのスクロールアニメーション
	var baseSpeed = 500;
	var pageTopDiff = $("header").height();

    $('a[href^=#]').click(function(){
        var scrollStart = $(window).scrollTop();
        var spMenu = $("#spMenuBtn").css('display');
        var href = $(this).attr('href');
		var target = $(href == '#' || href === '' ? 'html':href);
		var position = target.offset().top + pageTopDiff;
		var scrollSpeed = Math.abs(scrollStart - position) * 100 / baseSpeed;
		$('html,body').animate({scrollTop:position}, scrollSpeed, 'swing');
        if(spMenu == "block" && ($(this).parent().parent().hasClass("submenu") ||$(this).parent().parent().hasClass("mainmenu")|| $(this).hasClass("mapBtn"))){
            $("#spMenuBtn").removeClass("active");
            $("nav").slideToggle();
        }
		$('.submenu').slideUp(0);
		return false;
	});

//ページ内リンクのスクロールアニメーション

//easing

	scrLength = 150;
	scrSpeed = 500;
	scrEasing = 'easeOutCirc';

	var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	$(document).on(mousewheelevent,function(e){
		e.preventDefault();
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		if (delta < 0){
			scrSet =  $(document).scrollTop()+scrLength;
		} else {
			scrSet =  $(document).scrollTop()-scrLength;
		}
		$('html,body').stop().animate({scrollTop:scrSet},scrSpeed,scrEasing);
		return false;
	});

//easing

//header navigation部分

	$(".hideList").click(function(){
		$(this).addClass('current');
		$(".hideList").not(this).removeClass('current');
		$(".current").children('.submenu').slideToggle();
		$(".hideList").not('.current').children('.submenu').slideUp();
		//return false;
	});

	$("#spMenuBtn").on("click",function(){
		$(this).toggleClass("active");
		$("nav").slideToggle();
		$('.submenu').slideUp();
	});

//header navigation部分

//works部分のサムネイルカバー

	$('.contents>li').hover(
	    function(){
		$(this).children('.worksCover').fadeIn();
		},
		function(){
		$(this).children('.worksCover').fadeOut(100);
		});

//works部分のサムネイルカバー

//works部分のモーダル設定

	$('.system').click(function(){
        $('body').addClass('modal-open');
		var index = $(this).parent().index();
		var cover = $('#modalCover');
		var modal = $('.systemmodal');
        $("#modalWindow").show();
		modal.eq(index).fadeIn();
		cover.fadeIn();
		});

	$('.design').click(function(){
        $('body').addClass('modal-open');
		var index = $(this).parent().index();
		var cover = $('#modalCover');
		var modal = $('.designmodal');
        $("#modalWindow").show();
		modal.eq(index).fadeIn();
		cover.fadeIn();
		});

	$('.service').click(function(){
        $('body').addClass('modal-open');
		var index = $(this).parent().index();
		console.log(index);
		var cover = $('#modalCover');
		var modal = $('.servicemodal');
        $("#modalWindow").show();
		modal.eq(index).fadeIn();
		cover.fadeIn();
		});

	$('#modalCover,#modalWindow,.closeBtn').click(function(){
        $('body').removeClass('modal-open');
		var cover = $('#modalCover');
		var modal = $('.modalContents');
        $("#modalWindow").hide();
		cover.fadeOut();
		modal.fadeOut();
		});

//works部分のモーダル設定

//RollOver
     $('a img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
          }, function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
   });
   // PCとスマホ　別途動作設定　アドレスバー隠す　トップページにクラス追加　NEWSのID
   if($("#news")){
       var agent = navigator.userAgent;
        if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
            window.addEventListener("load", function() {
    setTimeout(scrollBy, 100, 0, 1);
}, false);
        }else{
            $("#news,#backgroundimageConcept,#backgroundimageAccess,#contact .backgroundimage").css("background-attachment","fixed");
        }
    }
});
