
var gameProperties = {
    // List of words for computer to choose from
    words: ["Tyrion", "Lannister", "Westeros", "Daenerys", "Khaleesi", "Valyrian", "Volantis", "Hodor", "Direwolf", "Baratheon", "Dothraki", "Wildling", "Brienne", "Nymeria"],
    
    // Splits selected word into individuals letters
    wordLetters: function() {
        this.computerWord.split("");
    },

    // Calculates the length of the current word
    length: function() {
        var wordLength = this.wordLetters.length;
    },

    // Creates an array with dashes the same length as the current word
    blankWord: function() {
        var blankWord = Array(this.length).fill("_");
        blankWord.join(" ");
    }, 
};

// Randomly chooses a choice from the words array. This is the Computer's word.
var computerWord = gameProperties.words[Math.floor(Math.random() * gameProperties.words.length)];

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

// Starting lives in Hangman
var remainingLives = 9;

document.onload = function computerChoice() {
    computerWord;
    computerWord.toUpperCase();
};

document.onkeyup = function(event) {

	// Determines which key was pressed.
     var userGuess = event.key;

     userGuess = userGuess.toUpperCase();

     // WRITE SOMETHING TO CAPTURE DOUBLE LETTERS LIKE SS IN MISSANDEI, CURRENTLY ONLY REPLACING FIRST ONEi
     // REMOVE DUPLICATE LETTERS FROM GUESSEDLETTERS
     // USE TOOL TO REMOVE COMMAS


     if (remainingLives >= 1) {

	   	 if (gameProperties.wordLetters.indexOf(userGuess) > -1) {
	     	var choiceIndex = gameProperties.wordLetters.indexOf(userGuess);
	     	gameProperties.blankWord[choiceIndex] = userGuess;
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