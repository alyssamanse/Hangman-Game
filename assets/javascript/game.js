

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

// Randomly chooses a choice from the words array. This is the Computer's word.
var computerWord = words[Math.floor(Math.random() * words.length)];

// Starting lives in Hangman
var remainingLives = 9;

// Splits selected word into individuals letters
var wordLetters = computerWord.split("");

// Calculates the length of the current word
var wordLength = wordLetters.length;
 
// Creates an array with dashes the same length as the current word
var blankWord = Array(wordLength).fill("_");

document.onkeyup = function(event) {

	// Determines which key was pressed.
     var userGuess = event.key;

     /*/ Creates an array from the blank word with the commas removed
     var spaces = [blankWord.join(" ")];
     */

     // WRITE SOMETHING TO CAPTURE DOUBLE LETTERS LIKE SS IN MISSANDEI, CURRENTLY ONLY REPLACING FIRST ONEi
     // REMOVE DUPLICATE LETTERS FROM GUESSEDLETTERS

     console.log(computerWord);

     if (remainingLives >= 1) {

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
     
     
  
     currentWord.innerHTML = "<h1> " + blankWord + " </h1";	
     guessesRemaining.innerHTML = "<h3> " + remainingLives + " </h3>";
     lettersGuessed.innerHTML = "<h2> " + guessedLetters + " </h2>";




    };