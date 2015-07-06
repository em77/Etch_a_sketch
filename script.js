$(document).ready(function() {
	
	$('body').append('<button type="button">Make New Pad</button>');

	gridMaker(16);
	
	$('button').on('click', function() {
		$('#pad, .square, #row').remove();
		var number_of_squares = 0;
		while((number_of_squares < 16) || (number_of_squares > 120)) {
			number_of_squares = prompt("Enter the number of squares each side of the pad should have (16 - 120):", "16");
		}
		gridMaker(number_of_squares);
	});

});

var hoverFunction = function() {
		$('.square').hover(function() {
		$(this).removeClass('colored');
		$(this).addClass('coloring');
	}, function() {
		$(this).removeClass('coloring');
		$(this).addClass('colored');
	});
}

var gridMaker = function(number_of_squares) {
	$('body').append('<div id="pad">');

	for(var i = 0; i < number_of_squares; i++) {
		$('#pad').append('<div id="row-' + i + '" class="row">');
		for(var j = 0; j < number_of_squares; j++) {
			$('#row-' + i).append('<div class="square">');
		}
	}

	hoverFunction();
}