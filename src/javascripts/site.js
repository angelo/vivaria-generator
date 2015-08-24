$(function() {
	var count = 100
	for (var i=0; i<count; i++){
		$('.block.grass').append('<div class="bit"></div>');
	}

	var classes = ['one', 'two', 'three'];
	$('.block .bit').each(function(){
		$(this).addClass(classes[~~(Math.random()*classes.length)]);
	});
	
});
