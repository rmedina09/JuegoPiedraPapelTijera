//Global Variable
var playerScore = 0;
var pcScore = 0;

//Initialization
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('pcScore').innerHTML = pcScore;

/** 
	Function that gets a random number between 0 and 2
**/
function getInt0To2(){
	return Math.floor(Math.random()*3);
}

/** 
	Function that updates the score
**/
function updateScore(){
	document.getElementById('playerScore').innerHTML = playerScore;
	document.getElementById('pcScore').innerHTML = pcScore;
}

/** 
	Function that displays the result of the move as a text
**/
function paintPlay(resultText){
	document.getElementById('resultText').innerHTML = resultText;
}

/** 
	Function that clears player options
**/
function cleanPaintPlay() {
	document.getElementById('optionPC0').classList.remove('btn-danger');
	document.getElementById('optionPC1').classList.remove('btn-danger');
	document.getElementById('optionPC2').classList.remove('btn-danger');
	document.getElementById('optionPlayer0').classList.remove('btn-warning');
	document.getElementById('optionPlayer1').classList.remove('btn-warning');
	document.getElementById('optionPlayer2').classList.remove('btn-warning');
}

/** 
	Function that paints the players option
**/
function paintChoosePlayers(valuePlayer, valuePlayPC) {
	cleanPaintPlay();
	document.getElementById('optionPC' + valuePlayPC).classList.add('btn-danger');
	document.getElementById('optionPlayer' + valuePlayer).classList.add('btn-warning');
}

/** 
	Function that determines which player wins
**/
function getWinPlayer(valuePlayer){
	resultText = '';
	valuePC = getInt0To2();
	paintChoosePlayers(valuePlayer, valuePC);

	if (valuePlayer == 0) {

		if (valuePC == 1) {
			playerScore++;
			resultText = 'Ganaste !!! :D';

		} else if (valuePC == 2) {
			pcScore++;
			resultText = 'Perdiste !!! :(';
		} else {
			resultText = 'Empataron !!! :O';
		}

	} else if (valuePlayer == 1) {

		if (valuePC == 2) {
			playerScore++;
			resultText = 'Ganaste !!! :D';
		} else if (valuePC == 0) {
			pcScore++;
			resultText = 'Perdiste !!! :(';
		} else {
			resultText = 'Empataron !!! :O';
		}

	} else if (valuePlayer == 2) {

		if (valuePC == 0) {
			playerScore++;
			resultText = 'Ganaste !!! :D';
		} else if (valuePC == 1) {
			pcScore++;
			resultText = 'Perdiste !!! :(';
		} else {
			resultText = 'Empataron !!! :O';
		}
	} 

	paintPlay(resultText);
	updateScore();
}

/** 
	Function that resets all values
**/
function start(){
	pcScore = 0;
	playerScore = 0;
	document.getElementById('playerScore').innerHTML = playerScore;
	document.getElementById('pcScore').innerHTML = pcScore;
	cleanPaintPlay();
	paintPlay('');
}