// varibles needed
var characterlist = ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"];
var totalguesses = 10;
var userguesses = [];
var letterguess = []
var remainguesses = 10;
var wins = 0;
var gameover = false;
var reset = false;
var characterchoice;

// game reset
function resetgame() {
    remaining_guesses = 10;
    userguesses = [];
    letterguess = [];
    reset = false;

    document.getElementById("again").style.cssText = "display: none";
    document.getElementById("winner").style.cssText = "display: none";
    document.getElementById("loser").style.cssText = "display: none";

    characterchoice = Math.floor(Math.random() * characterlist.length);
    console.log (characterlist[characterchoice]);

    for (var g=0; g < characterlist[characterchoice]; g++) {
        letterguess.push("_");
    }

    score();
};

function score() {
    document.getElementById("totwins").innerText = wins;
    document.getElementById("chosencharacter").innerText = "";
    for (var h = 0; h < letterguess.length; h++) {
    document.getElementById("chosencharacter").innerText += letterguess[h];
    };

    document.getElementById("remainguesses").innerText = remaining_guesses;
    document.getElementById("guessedletters").innerText = userguesses;

    if (remaining_guesses <= 0) {
    document.getElementById("loser").style.cssText = "display: block";
    document.getElementById("again").style.cssText = "display: block";
    gameover = true;
    }

};

    document.onkeydown = function (event) {
    if (gameover) {
    reset();
    gameover = false;
    }
    else {
    // Get input letters only 
    if(event.keyCode >= 65 && event.keyCode <= 90) {
    guessLetter(event.key.toLowerCase());
    }
    }
};


    function guessLetter(letter) {
    if (remainguesses > 0) {
    if (!reset) {
    reset = true;
    }
    // Check if the letter guessed is not already used
    if (userguesses.indexOf(letter) === -1) {
    userguesses.push(letter);
    checkGuess(letter);
    }
    }
    updateDisplay();
    checkWin();
};
function checkGuess(letter) {
    var position = [];
   
    for (var k = 0; k < characterist[characterchoice].length; k++) {
    if (characterList[characterchoice][k] === letter) {
    position.push(k);
    }
    }

    if (position.length <= 0) {
    remainguesses--;
    }
    else {
    // replace dashes with letter
    for (var x = 0; x < position.length; x++) {
    letterguess[position[x]] = letter;
    }
    }
   };

   function checkWin() {
    if (letterguess.indexOf("_") === -1) {
    wins++;
    document.getElementById("winner").style.cssText = "display: block";
    document.getElementById("again").style.cssText = "display: block";
    game_over = true;
    }

};