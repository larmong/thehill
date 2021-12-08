// fullPage
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['No.1 THEHILL', 'THEHILL YOUTUBE', 'THEHILL STRATEGY', 'THEHILL INVESTMENT', 'THEHILL SERVICE', 'THEHILL RECRUITMENT'],
        showActiveTooltip: false,
        sectionsColor: ['#000000', '#F5F5F6', '#3D509F', '#F5F5F6', '#F0F0F4', '#3D509F'],

		afterLoad: function(anchorLink, index){
			// section2
			if(index == 2){
				$('.section2 .fadeeff1')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.section2 .fadeeff1')
					.css('opacity','0')
					.css('margin-bottom','-10%')
			};

			if(index == 2){
				$('.section2 .fadeeff2')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.section2 .fadeeff2')
					.css('opacity','0')
					.css('margin-bottom','-20%')
			};

			// section3
			if(index == 3){
				$('.section3 .fadeeff1')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.section3 .fadeeff1')
					.css('opacity','0')
					.css('margin-bottom','-10%')
			};

			if(index == 3){
				$('.section3 .fadeeff4')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.section3 .fadeeff4')
					.css('opacity','0')
					.css('margin-bottom','-20%')
			};

			// section4
			if(index == 4){
				$('.sec4_text')
					.css('opacity','1')
					.css('margin-top','0px')
			} else {
				$('.sec4_text')
					.css('opacity','0')
					.css('margin-top','-30%')
			};

			if(index == 4){
				$('.sec4_card_box')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.sec4_card_box')
					.css('opacity','0')
					.css('margin-bottom','-30%')
			};


			// section5
			if(index == 5){
				$('.sec5_text')
					.css('opacity','1')
					.css('margin-top','0px')
			} else {
				$('.sec5_text')
					.css('opacity','0')
					.css('margin-top','-30%')
			};

			if(index == 5){
				$('.sec5_card_box')
					.css('opacity','1')
					.css('margin-bottom','0px')
			} else {
				$('.sec5_card_box')
					.css('opacity','0')
					.css('margin-bottom','-30%')
			};
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

