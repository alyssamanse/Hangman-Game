

	// Get Elements
	var wins = document.getElementById("wins");
	var currentWord = document.getElementById("currentWord");
	var guessesRemaining = document.getElementById("guessesRemaining");
	var lettersGuessed = document.getElementById("lettersGuessed");
	var answerText = document.getElementById("answerText");
	var answerImage = document.getElementById("answerImage");
	
	// Global Variables
	var words = ["Tyrion", "Lannister", "Westeros", "Daenerys", "Khaleesi", "Valyrian", "Volantis", "Hodor", "Direwolf", "Baratheon", "Dothraki", "Wildling", "Brienne", "Nymeria", "Stark", "Catspaw", "Missandei", "Brotherhood", "Baelor", "Rhaegar", "Ghost", "Winterfell", "Oberyn", "Harrenhal"];
	var wins = 0;
	var guessedLetters = [];
	var remainingGuesses = 9;
	var blankWord = [];
	var hangmanWord;
	var hangmanWordLetters = [];
	var wordLength;

	// When page loads or is refreshed
	function start() {

		// Shows generic image
		document.getElementById("answerImage").innerHTML = "<img src=\"assets/images/ironthrone.jpg\" width=\"300px\" height=\"300px\">";

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

		document.getElementById("wins").innerHTML = "<h2> " + wins + "</h2>";
		document.getElementById("currentWord").innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
		document.getElementById("guessesRemaining").innerHTML = "<h2> " + remainingGuesses + "</h2>";
		document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";

	}

	start();

	// When the user guesses the word correctly or loses all their lives
	function restart() {

		// Shows generic image
		document.getElementById("answerImage").innerHTML = "<img src=\"assets/images/ironthrone.jpg\" width=\"300px\" height=\"300px\">";

		// Resets blanks for word and letters already guessed
		blankWord = [];
		guessedLetters = [];

		// Resets remaining guesses counter
		remainingGuesses = 9;

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

		document.getElementById("wins").innerHTML = "<h2> " + wins + "</h2>";
		document.getElementById("currentWord").innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
		document.getElementById("guessesRemaining").innerHTML = "<h2> " + remainingGuesses + "</h2>";
		document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";

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
			
			for (i = 0; i < guessedLetters.length; i++) {

				if (userGuess === guessedLetters[i] || userGuess === blankWord[i]) {
					alert("You've already tried " + userGuess + ". Try again!");
					return;
				} 
			}

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
		if (checker) {

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
			remainingGuesses--;
			document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";
		} 	

		if (remainingGuesses < 1) {
			document.getElementById("answerImage").innerHTML = "<img src=\"assets/images/hangman.gif\" width=\"300px\" height=\"300px\">";
			document.getElementById("answerText").innerHTML = "<h1> You lose! Click anywhere to play again. </h1>";
			document.onclick = function(event) {
				document.getElementById("answerText").innerHTML = "";
				restart();
			}  

		if (blankWord.join("") === hangmanWord) {
			wins++;
			document.getElementById("wins").innerHTML = "<h2> " + wins + "</h2>";
			document.getElementById("answerImage").innerHTML = "<img src=\"assets/images/win.gif\" width=\"300px\" height=\"300px\">";
			document.getElementById("answerText").innerHTML = "<h1> You win! Click anywhere to try again. </h1>";
			document.onclick = function(event) {
				document.getElementById("answerText").innerHTML = "";
				restart();
		} 

	
		}


		console.log(hangmanWord);
		console.log(guessedLetters);
		console.log(remainingGuesses)

	}

		document.getElementById("guessesRemaining").innerHTML = "<h2> " + remainingGuesses + "</h2>";
		document.getElementById("lettersGuessed").innerHTML = "<h2> " + guessedLetters + "</h2>";
	}


// SHOW WINNING IMAGE WHEN WORD IS COMPLETE -- DEPENDS ON ORDER SO WHATEVER IS LISTED FIRST WILL RUN