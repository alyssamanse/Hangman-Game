

var words = ["Stark", "Tyrion", "Lannister", "Drogon", "Westeros", "Varys", "Mountain", "Hound", "Daenerys", "Targaryen", "Khaleesi", "Melisandre", "Valyrian", "Gendry", "Volantis", "Hodor", "Missandei", "Dorne", "Oberyn", "Direwolf", "Podrick", "Raven", "Viserys", "Pentos", "Baratheon", "Dothraki", "Needle", "Wildling", "Brienne", "Ghost", "Shaggydog", "Nymeria"];

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
var lives = ["plank", "crossbeam", "noose", "head", "body", "right arm", "left arm", "right leg", "left leg"];

// Randomly chooses a choice from the words array. This is the Computer's word.
var computerWord = words[Math.floor(Math.random() * words.length)];

document.onkeyup = function(event) {

     // Splits selected word into individuals letters
     var wordLetters = computerWord.split("");

     // Calculates the length of the current word
     var wordLength = wordLetters.length;
     
     // Creates an array with dashes the same length as the current word
     var blankWord = Array(wordLength).fill("_");

     // Determines which key was pressed.
     var userGuess = event.key;

     /*/ Creates an array from the blank word with the commas removed
     var spaces = [blankWord.join(" ")];
     */

     remainingLives = lives.length;

     currentWord.innerHTML = "<h1> " + blankWord + " </h1";
     guessesRemaining.innerHTML = "<h3> " + remainingLives + " </h3>";
     lettersGuessed.innerHTML = "<h2> " + guessedLetters + " </h2>";	

     while (remainingLives > 0) {

	   	 if (wordLetters.indexOf(userGuess) > -1) {
	     	blankWord.shift();
	     	blankWord.unshift(userGuess)
	     	guessedLetters.push(userGuess);
	     } else if (guessedLetters.indexOf(userGuess) > -1) {
	     	return;
	     } else {
	     	guessedLetters.push(userGuess);
	     	remainingLives = (remainingLives - 1);
    	 };
    };
     
     
  
     currentWord.innerHTML = "<h1> " + blankWord + " </h1";	
     guessesRemaining.innerHTML = "<h3> " + remainingLives + " </h3>";
     lettersGuessed.innerHTML = "<h2> " + guessedLetters + " </h2>";




    };