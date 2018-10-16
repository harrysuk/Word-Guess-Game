window.onload = function () {


var wins =0; $("#totalwins").text(wins); 
var losses =0;
var guessesleft = 9;
// var secretWord = document.getElementById("chosencharacter");
var gameover = false; 
var correctguess = 0; 



var game = {
    List: ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"],
    lettersGuessed: [],
    letters: [],
    randomWord: this.character,
    character: function () {
        this.randomWord = this.List[Math.floor(Math.random() * this.List.length)];
    },
    getLetters: function () {
        for (var i = 0; i < this.randomWord.length; i++) {
            this.letters.push(" _ ");
            
        }
    },
};
game.character();
game.getLetters();
// game.lettersGuessed();
$("#chosencharacter").append(game.letters);

document.onkeyup = function (event) {
    if (gameover === true) {
        gamereset();
        }
    var key = event.key.toLowerCase();
    var validGuess = /^[a-zA-Z]$/.test(key);
    if (validGuess) {
        if (game.randomWord.indexOf(key) === -1 && game.lettersGuessed.indexOf(key) === -1){
            game.lettersGuessed.push(key);
            guessesleft--;
            $("#remainingguesses").text(guessesleft);                
            $("#guessed-letters").text(game.lettersGuessed.join(""));
            if (guessesleft === 0) {
                document.getElementById("#loser").style.cssText = "display: none";

                gameover = true;
                gamereset();

            }
            }
            
        else {
            for (var x = 0; x < game.randomWord.length; x++) {
                if (game.randomWord[x] === key) {
                    game.letters[x] = game.randomWord[x];
                    $("#chosencharacter").text(game.letters.join(""));
                    correctguess++;
                }
            }
        }
                    if (game.randomWord === game.letters){
                        win++;
                        document.getElementById("#winner").style.cssText = "display: block";
                        $("#totalwins").text(wins);
                        gameover = true;
                        
                    }
        }
        if (gameover === true){
            game.lettersGuessed.length =0;
            game.letters.length =0;
            }

    }

}






