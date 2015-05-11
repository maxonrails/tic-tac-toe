var squareArray = document.getElementsByClassName("square");
var turn = 1;

function setMessage(msg) {
	document.getElementById("message").innerHTML = msg;
}

function nextMove(){
	for (var i=0; i<squareArray.length; i++){
		squareArray[i].addEventListener('click', function(){
			if (checkForWinner("X")) {
				setMessage("Congratulation X! You win!")

			}else if (checkForWinner("O")){
				setMessage("Congratulation O! You win!")

			} else if (this.innerHTML == ""){
				this.innerHTML = switchTurn();
			}else {
				setMessage("That square is already used");
			}

		});
	}

}

function switchTurn(){
	// if (checkForWinner("X")) {
	// 	setMessage("Congratulation X! You win!")

	// }else if (checkForWinner("O")){
	// 	setMessage("Congratulation O! You win!")

	// } else {
		turn ++;
		if (turn%2 == 0){
			document.getElementById("message").innerHTML = "It's O's turn!"
			return "X";
		}else {
			document.getElementById("message").innerHTML = "It's X's turn!"
			return "O";
		}
	// }
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
	    checkRow(4, 5, 6, move) ||
	    checkRow(7, 8, 9, move) ||
	    checkRow(1, 4, 7, move) ||
	    checkRow(2, 5, 8, move) ||
	    checkRow(3, 6, 9, move) ||
	    checkRow(1, 5, 9, move) ||
	    checkRow(3, 5, 7, move) ){

		result= true;
	    }
	    return result;
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("b" + number).innerHTML;

}