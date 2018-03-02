var column = 0;
var row = 1;

function generateLoading() {
	
	var base = 2;
	var numOfSquares = base*base; //1,4,9,16,25,36...
	

	
	for(i = 1; i <= numOfSquares; i++) {
		createSquare(base, i);
		
	}
}


function createSquare(base, i) {
	var square = document.createElement("DIV");
	square.style.height = 100/base+"%";
	square.style.width = 100/base+"%";
	square.style.animationDelay = getAnimationTime(i, base);
	square.classList.add("square");
	

	document.getElementById("dynamicGrid").append(square);
}


function getAnimationTime(index, base) {
	
	
	if((index / base) % 1 == 0) {
		console.log(index);
		row++;
	}
	

	
	return "0."+ Math.trunc(index) +"s"
}

