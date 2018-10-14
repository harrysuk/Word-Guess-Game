// varibles needed
var characterlist = ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"];
var totalguesses = 8;
var userguesses = [];
var letterguess = []
var remaining_guesses = 0;
var wins = 0;
var gameover = false;
var resetgame = false;
var position = [];


// Game reset
function gamereset() { 
    remainguesses = totalguesses;
    userguesses = [];
    letterguess = [];
    gameover = false;

    // win or lose message
    document.getElementById("again").style.cssText = "display: none";
    document.getElementById("winner").style.cssText = "display: none";
    document.getElementById("loser").style.cssText = "display: none";
    document.getElementById("guessed").style.cssText = "display: none";

    // Character randomizer
    characterchoice = Math.floor(Math.random() * characterlist.length);
    character = (characterlist[characterchoice])

    // Match character to the dashes
    for (var i = 0; i < (character.length); i++){
        letterguess.push(" _ ")
    };

    startgame();
};

function startgame() {
    // update the counters
    document.getElementById("totalwins").innerText = wins;
    document.getElementById("remainingguesses").innerHTML = remaining_guesses;
    document.getElementById("guessedletters").innerText = userguesses;
    // Apply the dashes to the array to the correct length
    for (var h = 0; h < letterguess.length; h++) {
        document.getElementById("chosencharacter").innerText = letterguess;
    }
    gameplay()
}

function gameplay() {
    document.onkeyup = function (event) {
            if (gameover === true) {
                gamereset();
                }
                    else {
                    // Get input letters only 
                        if(event.keyCode >= 65 && event.keyCode <= 0122) {
                        letterguess = (event.key.toLowerCase());
                        document.getElementById("guessedletters").append(userguesses)
                        
                        }
                    }
                    // check is user has guessed character already
                    if(userguesses.indexOf(letterguess) === -1)
                    {
                    // check if the letter guess matches the character name
                        for (var k = 0; k < characterlist[characterchoice].length; k++) {
                            if (characterlist[characterchoice][k] === letterguess) {
                                position.push(k);}
                                // replace the dash with correct letter
                                for (var x = 0; x < position.length; x++) {
                                    letterguess[position[x]] = letter;
                                }
                            };
                                        // Lower the counter and add letter to the guessed letter
                                            remaining_guesses--;
                                            userguesses.push(letterguess);
                                            
                        
                        }
checkwinner();
}

function checkwinner(){
    if (letterguess.indexOf(" _ ") === -1) {
        wins++;
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("again").style.cssText = "display: block";
        game_over = true;
    }
}}