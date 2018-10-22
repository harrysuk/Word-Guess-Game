var guessgame = {


// varbles for gameplay
wins =0,
losses =0,
guessesleft = 9,
// var secretWord = document.getElementById("chosencharacter");
gameover = false,
correctguess = 0,
lost= "OH NO! you lost, that makes beefsquatch sad",
win= "You won! ",
List: ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"],
lettersGuessed: [],
letters: [],



gamestart: function() {
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
    console.log(game.randomWord);
    console.log(game.letters);
    if (validGuess) {
        if (game.randomWord.indexOf(key) === -1 && game.lettersGuessed.indexOf(key) === -1){
            game.lettersGuessed.push(key);
            guessesleft--;
            $("#remainingguesses").text(guessesleft);                
            $("#guessed-letters").text(game.lettersGuessed.join(""));
            if (guessesleft === 0) {
                $("#loser").text(lost);
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
                    if (game.letters.indexOf(" _ ") === -1){
                        win++;
                        $("#winner").text(win);
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

function gamereset(){
    remaining_guesses = 9;
    // game.letters.length = 0;
    // game.lettersGuessed = [];
    // gameover = false;
    // game.character();
    // game.getLetters();
}


