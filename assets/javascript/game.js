

	// Get Elements
	var wins = document.getElementById("wins");
	var currentWord = document.getElementById("currentWord");
	var guessesRemaining = document.getElementById("guessesRemaining");
	var lettersGuessed = document.getElementById("lettersGuessed");
	var answerText = document.getElementById("answerText");
	var answerImage = document.getElementById("answerImage");
	var loserText = document.getElementById("loserText");
	var loserImage = document.getElementById("loserImage");

	// Global Variables
	var words = ["Tyrion", "Lannister", "Westeros", "Daenerys", "Khaleesi", "Valyrian", "Volantis", "Hodor", "Direwolf", "Baratheon", "Dothraki", "Wildling", "Brienne", "Nymeria"];
	var wins = 0;
	var guessedLetters = [];
	var remainingGuesses = 9;
	var blankWord = [];
	var hangmanWord;
	var hangmanWordLetters = [];
	var wordLength;

	document.getElementById("guessesRemaining").innerHTML = remainingGuesses;

	function start() {

		// Randomly chooses a word from the words array. This is the hangmanWord.
		hangmanWord = words[Math.floor(Math.random() * words.length)];
		hangmanWord = hangmanWord.toLowerCase();

		// Splits hangmanWord into an array of individual characters
		hangmanWordLetters = hangmanWord.split("");

		// Stores the length of the hangmanWord
		wordLength = hangmanWordLetters.length;

		console.log(hangmanWord);

		for (var i = 0; i < wordLength; i++) {
			blankWord.push("_");
		}

		document.getElementById("currentWord").innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
		document.getElementById("guessesRemaining").innerHTML = "<h2> " + remainingGuesses + "</h2>";
		document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";

	}

	start();

	document.onkeyup = function (event) {

		// Determines which letter the user hit and changes it to lowercase
		var userGuess = event.key;
		userGuess = userGuess.toLowerCase();

		// Set to false initially before checking the userGuess letter against the word and alphabet
		var checker = false;
		var valid = false;
		var unique;

		// checks if the userGuess is a valid letter
		function validate() {
			if (userGuess.charCodeAt(0) <= 122 && userGuess.charCodeAt(0) >= 97) {
				valid = true;
			} else {
				alert("Choose a letter or I'll ring your head like a bell");
				return;
			}
		}

		validate();

		// Checks if the userGuess letter is in the hangmanWord
		for (var i = 0; i < wordLength; i++) {

			if (userGuess === hangmanWordLetters[i]) {
				checker = true;
			} 
		}

		// If the letter is in the hangmanWord, then that letter is inserted into the correct index(es)
		if (checker && valid) {

			for (var i = 0; i < wordLength; i++) {

				if (userGuess === hangmanWordLetters[i]) {
					blankWord[i] = userGuess;
					// Refactor outside of the if or for
					document.getElementById("currentWord").innerHTML = "<h1> " + blankWord + " </h1>";
					document.getElementById("currentWord").innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
				} 
			}
		} else if (valid) {
			guessedLetters.push(userGuess);
			remainingGuesses = remainingGuesses -1;
		} 

		document.getElementById("guessesRemaining").innerHTML = "<h2> " + remainingGuesses + "</h2>";
		document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";

	}

	// HOW TO TELL IF THE WORD HAS BEEN SOLVED
	// HOW TO IGNORE DUPLICATE LETTERS IN LETTERS GUESSED