$(document).ready(function() { 
	
	createGrid(16);
	$('button').on("click", function() {
		var grid_input = getSize();
		createGrid(grid_input);
	});

	function createGrid(size) {
		$('#boxes').html("");
		var h_w = calculateSize(size);
		for(var x=0; x<size; x++) {
			for(var y=0; y<size; y++) {
				$('#boxes').append("<div class='box' style='height:" + h_w + "px; width:" + h_w + "px;'></div>");
			}
			$('#boxes').append("<br>");
		}
		$('.box').on("mouseenter", function() { 
			$(this).css("background-color", "black");
		});
	}

	function calculateSize(size) {
		return(480/size);
	}
	function getSize() {
		var size = prompt("Enter a size between 1-50");
		while(size < 1 || size > 50) {
			size = prompt("That was not between 1-50. Try again");
		}
		return(size);
	}
});