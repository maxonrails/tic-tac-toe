var squareArray = document.getElementsByClassName("square");
var turn = 1;

function startGame(){

	nextMove();
}

function setMessage(msg) {
	document.getElementById("message").innerHTML = msg;
}

function nextMove(){
	for (var i=0; i<squareArray.length; i++){
		squareArray[i].addEventListener('click', function(){
			this.innerHTML = switchTurn();
		});
	}

}

function switchTurn(){
	turn ++;

	if (turn%2 == 0){
		document.getElementById("message").innerHTML = "It's O's turn!"
		return "X";
	}else {
		document.getElementById("message").innerHTML = "It's X's turn!"
		return "O";
	}
}