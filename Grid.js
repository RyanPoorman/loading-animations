var row = 0.0;
var gridSize = 200;
var base = 5;
var denominator = 20; //2-25 to adjust the speed of the overall animation

function generateLoading() {
	var numOfSquares = base * base; // 1,4,9,16,25,36...
	changeContainerSize();
	for (i = 0; i < numOfSquares; i++) {
		createSquare(base, i);
	}
}

function changeContainerSize() {
	var containers = document.getElementsByClassName("square-grid");
	containers[0].style.width = gridSize + "px";
	containers[0].style.height = gridSize + "px";
}

function createSquare(base, i) {
	var square = document.createElement("DIV");
	square.style.height = 100 / base + "%";
	square.style.width = 100 / base + "%";
	square.style.animationDelay = getAnimationTime(i, base);
	square.classList.add("square");
	document.getElementById("dynamicGrid").append(square);
}

function getAnimationTime(index, base) {
	var currentRow = Math.floor(index / base);
	index = (index - (currentRow * base)) + currentRow;
	return (index / denominator) + "s";
}

