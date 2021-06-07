

$(function(){

		$(window).scroll(function(){

		var height = $(document).scrollTop();
		
		

		

			if (height > 1) {

				$(".allmenu").addClass("fix");				

			} else {

				$(".allmenu").removeClass("fix");

			}

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


		
		
		$("#acmenu > ul > li").first().addClass("subactive");

		$("#acmenu > ul > li").click(function(){
			
			if($(this).addClass("subactive")){
   			 $("#acmenu > ul > li").removeClass("subactive");
   			 $(this).addClass("subactive");
 		 }
  
			

  			$("[id^='acmenu_sub']").slideUp();
    		if ($(this).next().is(":hidden")){
    			$(this).next().slideDown(300);
    }

			
			
		});







	
	


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