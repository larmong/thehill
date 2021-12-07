// fullPage
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['No.1 THEHILL', 'THEHILL YOUTUBE', 'THEHILL STRATEGY', 'THEHILL INVESTMENT', 'THEHILL SERVICE', 'THEHILL RECRUITMENT'],
        showActiveTooltip: true,
        sectionsColor: ['#000000', '#F5F5F6', '#3D509F', '#F5F5F6', '#F0F0F4', '#3D509F']
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});