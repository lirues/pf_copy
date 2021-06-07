

$(function(){

		$(window).scroll(function(){

		var height = $(document).scrollTop();
		
		

		

			if (height > 1) {

				$(".allmenu").addClass("fix");				

			} else {

				$(".allmenu").removeClass("fix");

			}

		});

		$("#pop_exit").on("click", function(e){
			e.preventDefault();

			$(".popup").slideUp(300);


		});


		$("#popup_iink").on("click", function(e){
			e.preventDefault();

			$(".popup").slideToggle(300);


		});



		$("#sitemap_view").on("click", function(e){
			e.preventDefault();

			
			$(".sitemap").fadeIn(250);
			



		});


		$(".sitemap #exit").on("click", function(e){
			e.preventDefault();

			
			$(".sitemap").fadeOut(250);




		});

		$(".menuzone .menulist01, #menu01").hover(function(){

			
			$("#menu0001").stop().slideToggle(600);
			$("#menu01").stop().slideToggle(600);

			




		});

		


		$(".menuzone .menulist02, #menu02").hover(function(){

			$("#menu0002").stop().slideToggle(600);
			$("#menu02").stop().slideToggle(600);



		});


		$(".menuzone .menulist03, #menu03").hover(function(){

			$("#menu0003").stop().slideToggle(600);
			$("#menu03").stop().slideToggle(600);



		});

		

		


		$(".menuzone .menulist04, #menu04").hover(function(){

			$("#menu0004").stop().slideToggle(600);
			$("#menu04").stop().slideToggle(600);



		});

		

		$(".menuzone .menulist05, #menu05").hover(function(){

			$("#menu0005").stop().slideToggle(600);
			$("#menu05").stop().slideToggle(600);



		});


		

		$(".menuzone .menulist06, #menu06").hover(function(){

			$("#menu0006").stop().slideToggle(600);
			$("#menu06").stop().slideToggle(600);



		});



		
		

		




		$(".slide ul li").eq(n).addClass("nextslide");

			var n = 0;

			setInterval(function(){

				if(n < 3) {

					n = n + 1;

				
				}else {

					n = 0;

				}

				$(".slide li").fadeOut(700);
				$(".slide li").eq(n).fadeIn(700);


			}, 3000);

			

		// setInterval(function(){
		// 	$(".slide ul li")
		// 		.fadeOut(500, function(){
		// 				$(".slide ul")
		// 					.animate({"margin-left": "-=100vw"}, 500);
		// 		});

		// 	setTimeout(function(){
		// 		$(".slide ul li")
		// 			.fadeIn(500);
		// 	}, 500)

		// 	// $(".slide ul")
		// 	// 	.animate({"margin-left": "-=100vw"}, 500);
		// }, 5000);



		$(".slide_menu > ul > li").last().on("click", function(){

			$(".slide_menu > ul > li:nth-child(4)").slideToggle(110);
			$(".slide_menu > ul > li:nth-child(5)").slideToggle(110);
			// $(".slide_menu > ul > li").last().addClass("spreadmenu");

			if ($(this).text() == "더보기") {

				$(this).text("닫기");

			} else if  ($(this).text() == "닫기") {

				$(this).text("더보기");
			}

		});


		$("#headline01 ul li").first().hover(function(){

			
			$("#headline01 .headline_bg").first().toggleClass("active");
			$("#headline01 .head_plus").first().toggleClass("move");
			
			

		});

		$("#headline01 ul li").eq(1).hover(function(){

			
			$("#headline01 .headline_bg").eq(1).toggleClass("active");
			$("#headline01 .head_plus").eq(1).toggleClass("move");
			
			

		});

		$("#headline01 ul li").last().hover(function(){

			
			
			$("#headline01 .headline_bg").last().toggleClass("active");
			$("#headline01 .head_plus").last().toggleClass("move");
			

		});

		

		
		

		$("#headline02 ul li").first().hover(function(){

			
			$("#headline02 .headline_bg").first().toggleClass("active");
			$("#headline02 .head_plus").first().toggleClass("move");
			
			

		});

		

		$("#headline02 ul li").eq(1).hover(function(){

			
			$("#headline02 .headline_bg").eq(1).toggleClass("active");
			$("#headline02 .head_plus").eq(1).toggleClass("move");
			
			

		});

		

		$("#headline02 ul li").last().hover(function(){

			
			
			$("#headline02 .headline_bg").last().toggleClass("active");
			$("#headline02 .head_plus").last().toggleClass("move");
			

		});


		

		$("#news_page_01").addClass("pagetoggle");

		$("#news_page_02").on("click", function(e){
			e.preventDefault();

			$("#headline01").css({"display":"none"});
			$("#headline02").css({"display":"block"});
			$("#news_page_01").removeClass("pagetoggle");
			$("#news_page_02").addClass("pagetoggle");

		});

		$("#news_page_01").on("click", function(e){
			e.preventDefault();

			$("#headline02").css({"display":"none"});
			$("#headline01").css({"display":"block"});
			$("#news_page_02").removeClass("pagetoggle");
			$("#news_page_01").addClass("pagetoggle");

		});


		var j = 0;
		

		$("#news_slide > ul > li").eq(0).addClass("newsact");
		$("#news_slide_cap ul li").eq(0).find(".news_slide_page").addClass("pgactive");

		

			var count = setInterval(function(){

				if (j < 3) {

					j = j + 1;

				$("#news_slide > ul > li").fadeOut(800);
				$("#news_slide > ul > li").eq(j).fadeIn(800);
				$("#news_slide_cap ul li").find(".news_slide_page").removeClass("pgactive");
				$("#news_slide_cap ul li").eq(j).find(".news_slide_page").addClass("pgactive");


				} else {

					j = 0;

					$("#news_slide > ul > li").fadeOut(800);
					$("#news_slide > ul > li").eq(j).fadeIn(800);
					$("#news_slide_cap ul li").find(".news_slide_page").removeClass("pgactive");
					$("#news_slide_cap ul li").eq(j).find(".news_slide_page").addClass("pgactive");

				}

			}, 3000);


			

		


		


		$("#news_slide_cap ul li").on("click",function(e){
			e.preventDefault();

			j = $(this).index();



			$(".news_slide_page").removeClass("pgactive");
			$(".news_slide_page").eq(j).addClass("pgactive");
			$("#news_slide > ul > li").fadeOut(800);
			$("#news_slide > ul > li").eq(j).fadeIn(800);
                  

		});

		$(".news_slide_ctl").on("click", function(){


			if($(this).text() == "| |") {

				clearInterval(count);
				$(this).text("▶");

			}else if ($(this).text() == "▶") {

				setInterval(count);
				$(this).text("| |");

			}

			
		});

		$("#busi_slide li").eq(0).addClass("change");
		// $(".busi_text_hd").eq(0).css({"display":"block"});
		
		
		var p = 0;

		
		$("#busi_prev").on("click", function(e){
			e.preventDefault();

			if (p > 0) {

				p = p-1;

			} else {

				p=3;

			}

			$("#busi_slide li").fadeOut(300);
			$("#busi_slide li").eq(p).fadeIn(300);
			// $(".busi_text_hd").css({"display":"none"});
			// $(".busi_text_hd").eq(p).css({"display":"block"});







		});

		$("#busi_next").on("click", function(e){
			e.preventDefault();

			if (p < 3) {

				p = p+1;

			} else {

				p = 0;
			}


			
			$("#busi_slide li").fadeOut(300);
			$("#busi_slide li").eq(p).fadeIn(300);


		});


		t = $(this).index();

		

		


		$("#manage_list ul li").eq(0).hover(function(){

			
			$(".mana_more").eq(0).toggleClass("onmenu");


		});

		$("#manage_list ul li").eq(1).hover(function(){

			
			$(".mana_more").eq(1).toggleClass("onmenu");


		});

		$("#manage_list ul li").eq(2).hover(function(){

			
			$(".mana_more").eq(2).toggleClass("onmenu");


		});




		$(".aside_nav ul li").first().addClass("on");

		$(".aside_nav ul li").click(function(){
			 


			$(".aside_nav ul li").removeClass("on");
			$(this).addClass("on");

				if($(".aside_nav > ul > li").text() == "○") {

				
					$(this).text("◎");

				}else if ($(this).text() == "◎") {

				
					$(this).text("○");

			}


		});


	
		$(window).scroll(function(){

			var height = $(document).scrollTop();
			// console.log(height);
		

			if (height <= 300) {

				$(".aside_nav ul li").removeClass("on");	
				$(".aside_nav ul li").first().addClass("on");				

			} else if (height <= 1100) {

				$(".aside_nav ul li").removeClass("on");	
				$(".aside_nav ul li:nth-child(2)").addClass("on");	

			} else if (height <= 2000) {

				$(".aside_nav ul li").removeClass("on");	
				$(".aside_nav ul li:nth-child(3)").addClass("on");	

			} else if (height <= 2700) {

				$(".aside_nav ul li").removeClass("on");	
				$(".aside_nav ul li:nth-child(4)").addClass("on");	

			} else {

				$(".aside_nav ul li").removeClass("on");	
				$(".aside_nav ul li").last().addClass("on");	

			}




		});			


		var w = 150;
		var amount = 0;


		$(".site > #button > a > #button_prev").on("click", function(e){
			e.preventDefault();

			amount -= w;

			$(".site #banner ul").animate({left:amount}, 500, function(){

				$(this).append($(".site #banner ul li:first"));
				amount += w;
				$(this).css({left:amount});

			});



		});

		$(".site > #button > a > #button_next").on("click", function(e){
			e.preventDefault();

			amount += w;

			$(".site #banner ul").animate({left:amount}, 500, function(){

				$(this).prepend($(".site #banner ul li:last"));

				amount -= w;
				$(this).css({left:amount});

			});

			});

			

		








		// 	var t;
		// 	var timer;

		// $(window).scroll(function(){



		// 	timer = setTimeout(function(){

		// 		t = $(window).scrollTop();


		// 		$(".aside_nav ul li").css({"top":t+500});

		// 	}, 150);

		// });



		$("#family_list dt").click(function(e){
			e.preventDefault();


			$(this).toggleClass("open");
			$("#family_list dl dd").slideToggle(300);
			$(this).toggleClass("liston");


		});

	
		$("#family_list dl dd").on("mouseleave",function(){

			$(this).slideUp(300);
			$("#family_list dt").toggleClass("open");

		});

		$("#family_list").on("mouseleave",function(){

			$("#family_list dl dd").slideUp(300);

			// if ($("#family_list dt").addClass(open)) {

			// 	$(this).removeClass(open);

			// }

		});


	});