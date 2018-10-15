// varibles needed
var characterlist = ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"];
var totalguesses = 8;
var userguesses = [];
var letterguess = []
var remaining_guesses = 0;
var wins = 0;
var gameover = false;
var resetgame = false;
var loca = [];


// Game reset
function gamereset() { 
    remaining_guesses = totalguesses;
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
        letterguess.push("_")
    };

    startgame()
}

function startgame() {
    // update the counters
    document.getElementById("totalwins").innerText = wins;
    document.getElementById("remainingguesses").innerText = remaining_guesses;
    document.getElementById("chosencharacter").innerText = "";
    document.getElementById("guessedletters").innerText = userguesses;
    // Apply the dashes to the array to the correct length
    for (var h = 0; h < letterguess.length; h++) {
        document.getElementById("chosencharacter").innerText += letterguess[h];
    }

    if (remaining_guesses <= 0) {
        document.getElementById("loser").style.cssText = "display: none";
        document.getElementById("again").style.cssText = "display: none";
        gameover = true;
    }


letterguess ();
}


document.onkeyup = function (event) {
    //   game over check
        if (gameover = true) {
            gamereset();
            }
                else {
                // sort to get characters only 
                    if(event.keyCode >= 65 && event.keyCode <= 0122) {
                    letterguess = (event.key);
                    letterguess = letterguess.toLowerCase();
                    // document.getElementById("guessedletters").append(userguesses)
                        }
                    }
                  
                }               
function letterguess (alpha){
    // check is user has guessed character already
    if(userguesses.indexOf(alpha) === -1)
    {userguesses.push(alpha)

    // check if the letter guess matches the character name
        for (var a = 0; a < characterlist[characterchoice].length; a++) {
            if (characterlist[characterchoice][a] === alpha) {
                loca.push(a);}
                // replace the dash with correct letter
                for (var x = 0; x < loca.length; x++) {
                    letterguess[loca[x]] = letterguesses;
                }
                }
                   }       // Lower the counter and add letter to the guessed letter
                      else {remaining_guesses-1;
                            userguesses.push(letterguess);}
                            
checkwinner();
startgame();                      
                        }
                    

function checkwinner(){
    if (letterguess.indexOf(" _ ") === -1) {
        wins++;
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("again").style.cssText = "display: block";
        gameover = true;
    }
}