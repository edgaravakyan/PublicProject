debugger

let board = [
	["_","_","_"],  
	["_","_","_"],
	["_","_","_"]
];

let player = "x";
let player1 = "x"
let player2 = "o"



while(true){
	let boardStr = board[0].join("   ") +
	"\n" + 
	board[1].join("   ") + 
	"\n" + 
	board[2].join("   "); 

	let row = +prompt("Write the row, player " + player + "\n \n" +boardStr);
	let column = +prompt("Write the column, player " + player + "\n \n" +boardStr);

	if(board[row][column] !== "_"){
		alert("Not a legal move");
		continue
	}

	board[row][column] = player;

	if(player === "x"){
		player = "o";
	} else{
		player = "x"
	}

	//x

	if(board[0][0] === player1 && board[0][1] === player1 && board[0][2] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[1][0] === player1 && board[1][1] === player1 && board[1][2] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[2][0] === player1 && board[2][1] === player1 && board[2][2] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[0][0] === player1 && board[1][0] === player1 && board[2][0] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[0][1] === player1 && board[1][1] === player1 && board[2][1] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[0][2] === player1 && board[1][2] === player1 && board[2][2] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[0][0] === player1 && board[1][1] === player1 && board[2][2] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	if(board[0][2] === player1 && board[1][1] === player1 && board[2][0] === player1){
		alert("Player " + player1 + ", you won");
		break
	}

	//o

	if(board[0][0] === player2 && board[0][1] === player2 && board[0][2] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[1][0] === player2 && board[1][1] === player2 && board[1][2] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[2][0] === player2 && board[2][1] === player2 && board[2][2] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][0] === player2 && board[1][0] === player2 && board[2][0] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][1] === player2 && board[1][1] === player2 && board[2][1] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][2] === player2 && board[1][2] === player2 && board[2][2] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][0] === player2 && board[1][1] === player2 && board[2][2] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][2] === player2 && board[1][1] === player2 && board[2][0] === player2){
		alert("Player " + player2 + ", you won");
		break
	}

	if(board[0][0] !== "_" && board[0][1] !== "_" && board[0][2] !== "_" && board[1][0] !== "_" && 
	board[1][1] !== "_" && board[1][2] !== "_" && board[2][0] !== "_" && board[2][1] !== "_" && board[2][2] !== "_") {
			alert("Draw");
			break
	}
}