var guessinggame = {

// Varibles needed for gameplay
    wins: 0,
    losses: 0,
    guessesleft: 9,
    gameover: false,
    correctguess: 0,
    lost: "OH NO! you lost, that makes beefsquatch sad",
    win: "You won! ",
    List: ["bob", "linda", "tina", "gene", "louise", "teddy", "mort", "beefsquatch"],
    lettersGuessed: [],
    letters: [],
    randomword: [],
    guessed: null,

getcharacter: function() {
    this.randomWord = this.List[Math.floor(Math.random() * this.List.length)];
    getLetters = function () {
        for (var i = 0; i < this.randomWord.length; i++) {
            this.letters.push(" _ ");
            }
    }
    document.querySelector("#chosencharacter").innerHTML = this.letters;
},

updatepage: function(guessed) {
    if (this.guessesleft === 0){
        losses++;
        this.gameReset();
    }

    else {
        this.letterCheck(guessed);
        this.correctLetters(guessed);
        this.updatePage();

    }
},

letterCheck: function(guessed) {
    if (guessinggame.randomWord != guessinggame.guessed && guessinggame.lettersGuessed != guessinggame.guessed){
        guessinggame.lettersGuessed.push(guessed);
        guessinggame.guessesleft--;
        $("#remainingguesses").text(guessinggame.guessesleft);                
        $("#guessed-letters").text(guessinggame.lettersGuessed.join(""));

    }
},

correctLetters: function(guessed) {
    for (var x = 0; x < guessinggame.randomWord.length; x++) {
        if (guessinggame.randomWord[x] === guessed) {
            guessinggame.letters[x] = guessinggame.randomWord[x];
            $("#chosencharacter").text(game.letters.join(""));
            checkwins();
        }
    }
},

checkwin: function (){
    if (guessinggame.letters.indexOf(" _ ") === -1){
        win++;
        $("#winner").text(win);
        $("#totalwins").text(wins);
        document.querySelector("#totalwins").innerHTML = this.wins;
        gameover = true;
    }
},

}
guessinggame.getcharacter();

document.onkeyup = function (event) {
    var key = event.key.toLowerCase();
   guessinggame.guessed = /^[a-zA-Z]$/.test(key);
    guessinggame.updatepage(guessinggame.guessed);
};
