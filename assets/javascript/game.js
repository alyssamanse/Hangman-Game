

var words = ["Stark", "Tyrion", "Lannister", "Drogon", "Westeros", "Varys", "Mountain", "Hound", "Daenerys", "Targaryen", "Khaleesi", "Melisandre", "Valyrian" "Gendry", "Volantis", "Hodor", "Missandei", "Dorne", "Oberyn", "Direwolf", "Podrick", "Raven", "Viserys", "Pentos", "Baratheon", "Dothraki", "Needle", "Wildling", "Brienne", "Ghost", "Shaggydog", "Nymeria"];

var wins = document.getElementById("wins");
var blankWord = document.getElementById("blankWord");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed");
var answerText = document.getElementById("answerText");
var answerImage = document.getElementById("answerImage");
var loserText = document.getElementById("loserText");
var loserImage = document.getElementById("loserImage");

var userWins = 0;

document.onkeyup = function(event) {

     // Determines which key was pressed.
     var userGuess = event.key;

     // Randomly chooses a choice from the words array. This is the Computer's word.
     var computerWord = words[Math.floor(Math.random() * computerChoices.length)];

     
     
    };