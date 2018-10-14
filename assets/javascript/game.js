// varibles needed
var characterlist = ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"];
var totalguesses = 8;
var userguesses = [];
var letterguess = []
var remainguesses = 0;
var wins = 0;
var gameover = false;
var reset = false;
var characterchoice;
var character;

// game reset
function resetgame() {
    remaining_guesses = totalguesses;
    userguesses = [];
    letterguess = [];
    reset = false;

    // win or lose message
    document.getElementById("again").style.cssText = "display: none";
    document.getElementById("winner").style.cssText = "display: none";
    document.getElementById("loser").style.cssText = "display: none";

    characterchoice = Math.floor(Math.random() * characterlist.length);
    character = (characterlist[characterchoice])

    for (var i = 0; i < (character.length); i++){
        letterguess.push(" _ ")
    };

    score();
};


function score() {
console.log (letterguess);
console.log (character);

    document.getElementById("totwins").innerText = wins;
    document.getElementById("chosencharacter").innerText = "";
    for (var h = 0; h < letterguess.length; h++) {
    document.getElementById("chosencharacter").innerText = letterguess;
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
        // game start
    if (gameover) {
    resetgame();
    gameover = false;
    }
    else {
    // Get input letters only 
    if(event.keyCode >= 65 && event.keyCode <= 0122) {
    guessedletter(event.key.toLowerCase());
    }
    }
    guessedletter();
};


    function guessedletter(letter) {
    if (remainguesses > 0) {
    if (!resetgame) {
    resetgame = true;
    }
    Check if the letter guessed is not already used
    if (userguesses.indexOf(letter) === -1) {
    userguesses.push(letter);
    checkguesses(letter);
    }
    // }

    checkWin();
};
function checkguesses(letter) {
    var position = [];
    console.log (characterlist[characterchoice]);
   
    for (var k = 0; k < characterlist[characterchoice].length; k++) {
    if (characterlist[characterchoice][k] === letter) {
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
    if (letterguess.indexOf(" _ ") === -1) {
    wins++;
    document.getElementById("winner").style.cssText = "display: block";
    document.getElementById("again").style.cssText = "display: block";
    game_over = true;
    }

};