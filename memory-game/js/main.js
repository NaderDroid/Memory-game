
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

var checkCards = function () {

    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("God damn it, you made it")
    }

    else if (cardsInPlay.length === 2) {
        alert(" No Match, sorry");
    }

    else {
        alert("No Enough Plays");
    }
};
var flipCard = function (cardId) {

   /* These lines of code have been moved to checkCards()

    var cardOne = cards[1];
    cardsInPlay.push(cardOne);
    console.log("User flipped " + cardOne);
    var cardTwo = cards[0];
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cardTwo);
*/
    cardsInPlay.push(cards[cardId].rank);
    console.log("you flipped: " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);


};
        flipCard(1);
        flipCard(0);

checkCards();


