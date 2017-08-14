

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
	var hangmanWordLetters = [];
	var wordLength;

	function start() {

		// Randomly chooses a word from the words array. This is the hangmanWord.
		var hangmanWord = words[Math.floor(Math.random() * words.length)];
		hangmanWord = hangmanWord.toLowerCase();

		// Splits hangmanWord into an array of individual characters
		hangmanWordLetters = hangmanWord.split("");

		wordLength = hangmanWordLetters.length;

		console.log(hangmanWord);
		console.log(wordLength)

		for (var i = 0; i < wordLength; i++) {
			blankWord.push("_");
		}

		console.log(blankWord);

		document.getElementById("currentWord").innerHTML = blankWord.join(" ");
		document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
		document.getElementById("guessesRemaining").innerHTML = guessedLetters;

		/* selector 
		event listener 
		event handler
		*/
	}

	start();

	document.onkeyup = function (event) {

		var userGuess = event.key;
		userGuess = userGuess.toLowerCase();

		var checker = false;

		for (var i = 0; i < wordLength; i++) {

			if (userGuess === hangmanWordLetters[i]) {
				checker = true;
			} 
		}

		if (checker) {

			for (var i = 0; i < wordLength; i++) {

				if (userGuess === hangmanWordLetters[i]) {
					blankWord[i] = userGuess;
					// Refactor outside of the if or for
					document.getElementById("currentWord").innerHTML = blankWord;
					document.getElementById("currentWord").innerHTML = blankWord.join(" ");
				} 
			}
		} else {
			guessedLetters.push(userGuess);
			console.log("wrong");
			console.log(guessedLetters);
		}

		
		//console.log(guessedLetters);

	}


/*
	for (var i = 0; i < hangmanWord.length; i++) {
		blankWord[i] = ("_ ");
	};

	// Displaying current word as blank spaces
	currentWord.innerHTML = "<h1> " + blankWord + " </h1>";

	// Displays remaining guesses
	guessesRemaining.innerHTML = "<h3> " + remainingGuesses + " </h3>";

	// Displays letters already guessed
	lettersGuessed.innerHTML = "<h2> " + guessedLetters + " </h2>";

	console.log(hangmanWord);
	console.log(hangmanWordLetters);
	console.log(blankWord);

	*/
