
var cards = [
    {
        rank : "queen",
        suit : "hearts",
        cardImage : "images/queen-of-hearts.png"
    },
    {
        rank : "queen",
        suit : "diamonds",
        cardImage : "images/queen-of-diamonds.png"
    },
    {
        rank : "king",
        suit : "hearts",
        cardImage : "images/king-of-hearts.png"
    },
    {
        rank : "king",
        suit : "diamonds",
        cardImage : "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var flipCard = function () {

    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log("you flipped: " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    this.setAttribute('src' , cards[cardId].cardImage);

    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("Aawww, you made it")
    }

    else if (cardsInPlay.length === 2) {
        alert(" No Match, sorry");
    }

    else {
        alert("No Enough Plays");
    }
};

function createBoard() {
 for (var i = 0; i<cards.length; i++) {
     var cardElement = document.createElement('img');
     cardElement.setAttribute('src', 'images/back.png');
     cardElement.setAttribute('data-id' , i);
     cardElement.addEventListener("click", flipCard);

     var gameBoard = document.getElementById('game-board');
     gameBoard.appendChild(cardElement);
 }
}
    createBoard();


