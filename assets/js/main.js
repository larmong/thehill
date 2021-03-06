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
        sectionsColor: ['#000000', '#F5F5F6', '#3D509F', '#F5F5F6', '#F0F0F4', '#3D509F', '#3D509F'],

		afterLoad: function(anchorLink, index){
			// section2
			if(index == 2){
				$('.secCard1')
					.css('opacity','1')
					.css('transform','translateY(' + '0px' + ')')
			} else {
				$('.secCard1')
					.css('opacity','0')
					.css('transform','translateY(' + '100px' + ')')
			};
			if(index == 2){
				$('.secCard2')
					.css('opacity','1')
					.css('transform','translateY(' + '0px' + ')')
			} else {
				$('.secCard2')
					.css('opacity','0')
					.css('transform','translateY(' + '100px' + ')')
			};

			// section3
			if(index == 3){
				$('.sec3_card1')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec3_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 3){
				$('.sec3_card2')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec3_card2')
					.css('opacity','0')
					.css('top','300px')
			};
			if(index == 3){
				$('.sec3_card3')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec3_card3')
					.css('opacity','0')
					.css('top','400px')
			};
			if(index == 3){
				$('.sec3_card4')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec3_card4')
					.css('opacity','0')
					.css('top','500px')
			};

			// M_section3
			if(index == 3){
				$('.Msec3_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec3_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 3){
				$('.Msec3_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec3_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 3){
				$('.Msec3_card3')
					.css('opacity','1')
					.css('top','210px')
			} else {
				$('.Msec3_card3')
					.css('opacity','0')
					.css('top','410px')
			};
			if(index == 3){
				$('.Msec3_card4')
					.css('opacity','1')
					.css('top','210px')
			} else {
				$('.Msec3_card4')
					.css('opacity','0')
					.css('top','410px')
			};

			// M2_section3
			if(index == 3){
				$('.M2sec3_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec3_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 3){
				$('.M2sec3_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec3_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 3){
				$('.M2sec3_card3')
					.css('opacity','1')
					.css('top','165px')
			} else {
				$('.M2sec3_card3')
					.css('opacity','0')
					.css('top','365px')
			};
			if(index == 3){
				$('.M2sec3_card4')
					.css('opacity','1')
					.css('top','165px')
			} else {
				$('.M2sec3_card4')
					.css('opacity','0')
					.css('top','365px')
			};

			// section4
			if(index == 4){
				$('.sec4_card1')
					.css('opacity','1')
					.css('top','50px')
			} else {
				$('.sec4_card1')
					.css('opacity','0')
					.css('top','300px')
			};
			if(index == 4){
				$('.sec4_card2')
					.css('opacity','1')
					.css('top','50px')
			} else {
				$('.sec4_card2')
					.css('opacity','0')
					.css('top','500px')
			};
			if(index == 4){
				$('.sec4_card3')
					.css('opacity','1')
					.css('top','420px')
			} else {
				$('.sec4_card3')
					.css('opacity','0')
					.css('top','700px')
			};
			if(index == 4){
				$('.sec4_card4')
					.css('opacity','1')
					.css('top','420px')
			} else {
				$('.sec4_card4')
					.css('opacity','0')
					.css('top','800px')
			};

			// M_section4
			if(index == 4){
				$('.Msec4_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec4_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 4){
				$('.Msec4_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec4_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 4){
				$('.Msec4_card3')
					.css('opacity','1')
					.css('top','180px')
			} else {
				$('.Msec4_card3')
					.css('opacity','0')
					.css('top','400px')
			};
			if(index == 4){
				$('.Msec4_card4')
					.css('opacity','1')
					.css('top','180px')
			} else {
				$('.Msec4_card4')
					.css('opacity','0')
					.css('top','400px')
			};

			// M2_section4
			if(index == 4){
				$('.M2sec4_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec4_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 4){
				$('.M2sec4_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec4_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 4){
				$('.M2sec4_card3')
					.css('opacity','1')
					.css('top','130px')
			} else {
				$('.M2sec4_card3')
					.css('opacity','0')
					.css('top','330px')
			};
			if(index == 4){
				$('.M2sec4_card4')
					.css('opacity','1')
					.css('top','130px')
			} else {
				$('.M2sec4_card4')
					.css('opacity','0')
					.css('top','330px')
			};

			// M_section5
			if(index == 5){
				$('.Msec5_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec5_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 5){
				$('.Msec5_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.Msec5_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 5){
				$('.Msec5_card3')
					.css('opacity','1')
					.css('top','210px')
			} else {
				$('.Msec5_card3')
					.css('opacity','0')
					.css('top','410px')
			};
			if(index == 5){
				$('.Msec5_card4')
					.css('opacity','1')
					.css('top','210px')
			} else {
				$('.Msec5_card4')
					.css('opacity','0')
					.css('top','410px')
			};

			// M2_section5
			if(index == 5){
				$('.M2sec5_card1')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec5_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 5){
				$('.M2sec5_card2')
					.css('opacity','1')
					.css('top','0px')
			} else {
				$('.M2sec5_card2')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 5){
				$('.M2sec5_card3')
					.css('opacity','1')
					.css('top','165px')
			} else {
				$('.M2sec5_card3')
					.css('opacity','0')
					.css('top','365px')
			};
			if(index == 5){
				$('.M2sec5_card4')
					.css('opacity','1')
					.css('top','165px')
			} else {
				$('.M2sec5_card4')
					.css('opacity','0')
					.css('top','365px')
			};

			// section5
			if(index == 5){
				$('.sec5_card1')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec5_card1')
					.css('opacity','0')
					.css('top','200px')
			};
			if(index == 5){
				$('.sec5_card2')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec5_card2')
					.css('opacity','0')
					.css('top','300px')
			};
			if(index == 5){
				$('.sec5_card3')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec5_card3')
					.css('opacity','0')
					.css('top','400px')
			};
			if(index == 5){
				$('.sec5_card4')
					.css('opacity','1')
					.css('top','100px')
			} else {
				$('.sec5_card4')
					.css('opacity','0')
					.css('top','500px')
			};

			// section6
			if(index == 6 || index == 7){
				$('.sec6_card1')
					.css('opacity','1')
					.css('top','50px')
			} else {
				$('.sec6_card1')
					.css('opacity','0')
					.css('top','300px')
			};
			if(index == 6 || index == 7){
				$('.sec6_card2')
					.css('opacity','1')
					.css('top','50px')
			} else {
				$('.sec6_card2')
					.css('opacity','0')
					.css('top','500px')
			};
			if(index == 6 || index == 7){
				$('.sec6_card3')
					.css('opacity','1')
					.css('top','310px')
			} else {
				$('.sec6_card3')
					.css('opacity','0')
					.css('top','700px')
			};
			if(index == 6 || index == 7){
				$('.sec6_card4')
					.css('opacity','1')
					.css('top','310px')
			} else {
				$('.sec6_card4')
					.css('opacity','0')
					.css('top','800px')
			};
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

