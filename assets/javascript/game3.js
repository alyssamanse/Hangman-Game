window.onload = function() {

var words = ["stark", "tyrion", "lannister", "drogon", "westeros", "varys", "mountain", "hound", "daenerys", "targaryen", "khaleesi", "melisandre", "valyrian", "gendry", "volantis", "hodor", "missandei", "dorne", "oberyn", "direwolf", "podrick", "raven", "viserys", "pentos", "baratheon", "dothraki", "needle", "Wildling", "brienne", "ghost", "shaggydog", "nymeria"];

var wins = document.getElementById("wins");
var currentWord = document.getElementById("currentWord");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed");
var answerText = document.getElementById("answerText");
var answerImage = document.getElementById("answerImage");
var loserText = document.getElementById("loserText");
var loserImage = document.getElementById("loserImage");

var wins = 0;
var guessedLetters = [];

     // USER GUESS POPULATE BLANK SPACES
     // SOMETHING TO CAPTURE DOUBLE LETTERS
     // SOMETHING TO ALERT WINNING AND SHOW IMAGES
     // REMOVE COMMAS FROM BLANK SPACES
     // SHOW IMAGE FOR LOSING
     // DETERMINE IF USER GUESS IS A VALID LETTER

// Randomly chooses a choice from the words array. This is the Computer's word.
var computerWord = words[Math.floor(Math.random() * words.length)];

computerWord = computerWord.toUpperCase();

// Starting lives in Hangman
var remainingLives = 9;

var blankWord = [];

/* // Splits selected word into individuals letters
var wordLetters = computerWord.split(" ");

// Calculates the length of the current word
var wordLength = wordLetters.length;
 
// Creates an array with dashes the same length as the current word
var blankWord = Array(wordLength).join("_");



*/







console.log(computerWord);

for (var i = 0; i < computerWord.length; i++) {
    blankWord.push("_");
 };

console.log(blankWord);

currentWord.innerHTML = "<h1> " + blankWord + " </h1";  

document.onkeyup = function(event) {

	// Determines which key was pressed.
     var userGuess = event.key;

     userGuess = userGuess.toUpperCase();

     // WRITE SOMETHING TO CAPTURE DOUBLE LETTERS LIKE SS IN MISSANDEI, CURRENTLY ONLY REPLACING FIRST ONEi
     // REMOVE DUPLICATE LETTERS FROM GUESSEDLETTERS
     // USE TOOL TO REMOVE COMMA



     if (remainingLives >= 1) {
 worl 
	   	 if (wordLetters.indexOf(userGuess) > -1) {
	     	var choiceIndex = wordLetters.indexOf(userGuess);
	     	blankWord[choiceIndex] = userGuess;
	     	guessedLetters.push(userGuess);
	     } else if (guessedLetters.indexOf(userGuess) > -1) {
	     	return;
	     } else {
	     	guessedLetters.push(userGuess);
	     	remainingLives = (remainingLives - 1);
    	 };
    } else {
    	alert("You lose!")
    	};
     
    

     guessesRemaining.innerHTML = "<h3> " + remainingLives + " </h3>";
     lettersGuessed.innerHTML = "<h2> " + guessedLetters + " </h2>";




    };

};