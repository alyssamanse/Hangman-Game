

	// Get Elements
	var score = document.getElementById("wins");
	var currentWord = document.getElementById("currentWord");
	var guessesRemaining = document.getElementById("guessesRemaining");
	var lettersGuessed = document.getElementById("lettersGuessed");
	var answerText = document.getElementById("answerText");
	var answerImage = document.getElementById("answerImage");
	
	// Global Variables
	var words = ["Tyrion", "Lannister", "Westeros", "Daenerys", "Khaleesi", "Valyrian", "Volantis", "Hodor", "Direwolf", "Baratheon", "Dothraki", "Wildling", "Brienne", "Nymeria", "Stark", "Catspaw", "Missandei", "Brotherhood", "Baelor", "Rhaegar", "Ghost", "Winterfell", "Oberyn", "Harrenhal"];
	var wins = 0;
	var guessedLetters = [];
	var lives;
	var blankWord = [];
	var hangmanWord;
	var hangmanWordLetters = [];
	var wordLength;

	// When page loads or is refreshed
	function start() {

		// Shows generic image
		answerImage.innerHTML = '<img src="assets/images/ironthrone.jpg" width="400px" height="400px">';

		// Sets lives to 9
		lives = 9;

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

		score.innerHTML = "<h2> " + wins + "</h2>";
		currentWord.innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
		guessesRemaining.innerHTML = "<h2> " + lives + "</h2>";
		lettersGuessed.innerHTML = "<h2> " + guessedLetters + "</h2>";

	}

	start();

	// When the user guesses the word correctly or loses all their lives
	function restart() {

		// Shows generic image
		answerImage.innerHTML = '<img src="assets/images/ironthrone.jpg" width="400px" height="400px">';

		// Resets blanks for word and letters already guessed
		blankWord = [];
		guessedLetters = [];

		// Resets remaining guesses counter
		lives = 9;

		// Randomly chooses a word from the words array. This is the hangmanWord.
		hangmanWord = words[Math.floor(Math.random() * words.length)];
		hangmanWord = hangmanWord.toLowerCase();

		// Splits hangmanWord into an array of individual characters
		hangmanWordLetters = hangmanWord.split("");

		// Stores the length of the hangmanWord
		wordLength = hangmanWordLetters.length;

		for (var i = 0; i < wordLength; i++) {
			blankWord.push("_");
		}

		score.innerHTML = "<h2> " + wins + "</h2>";
		currentWord.innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
		guessesRemaining.innerHTML = "<h2> " + lives + "</h2>";
		lettersGuessed.innerHTML = "<h2> " + guessedLetters + "</h2>";

	}

	document.onkeyup = function (event) {

		// Determines which letter the user hit and changes it to lowercase
		var userGuess = event.key;
		userGuess = userGuess.toLowerCase();

		// Set to false initially before checking the userGuess letter against the word and alphabet
		var checker = false;
		var valid = false;

		// checks if the userGuess is a valid letter
		function validate() {

			var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			for (i = 0; i < guessedLetters.length; i++) {

				if (userGuess === guessedLetters[i] || userGuess === blankWord[i]) {
					alert("You've already tried " + userGuess + ". Try again!");
					return;
				} 
			}

			for (j = 0; j < alphabet.length; j++) {
				if (userGuess === alphabet[j]) {
					valid = true;
				}
			}

			console.log("<--inside validate function-->");
			console.log(lives);
			console.log(guessedLetters);
			console.log(userGuess);
		}

		validate();

		// Checks if the userGuess letter is in the hangmanWord
		for (var i = 0; i < wordLength; i++) {

			if (userGuess === hangmanWordLetters[i]) {
				checker = true;
			} 
		}

		// If the letter is in the hangmanWord, then that letter is inserted into the correct index(es)
		if (checker) {

			for (var i = 0; i < wordLength; i++) {

				if (userGuess === hangmanWordLetters[i]) {
					blankWord[i] = userGuess;
					currentWord.innerHTML = "<h1> " + blankWord + " </h1>";
					currentWord.innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
				} 
			}
		} else if (valid) {
			guessedLetters.push(userGuess);
			lives--;
			guessesRemaining.innerHTML = "<h2> " + lives + "</h2>";
			lettersGuessed.innerHTML = "<h2> " + guessedLetters.join(" ") + "</h2>";
			console.log("<--inside onkeyup function-->");
			console.log(lives);
			console.log(guessedLetters);
			console.log(userGuess);
		} 	

		// Lose
		if (lives < 1) {
			answerImage.innerHTML = '<img src="assets/images/hangman.gif" width="400px" height="400px">';
			answerText.innerHTML = "<h1> You lose! Click anywhere to play again. </h1>";
			document.onclick = function(event) {
				answerText.innerHTML = "";
				restart();
			}
		}  

		// Win  
		if (blankWord.join("") === hangmanWord) {
			wins++;
			score.innerHTML = "<h2> " + wins + "</h2>";
			answerImage.innerHTML = '<img src="assets/images/win.gif" width="400px" height="400px">';
			answerText.innerHTML = "<h1> You win! Click anywhere to try again. </h1>";
			document.onclick = function(event) {
				answerText.innerHTML = "";
				restart();
			} 
		}

	}
		lettersGuessed.innerHTML = "<h2> " + guessedLetters.join(" ") + "</h2>";

		console.log("<--outside onkeyup function-->");
			console.log(lives);
			console.log(guessedLetters);