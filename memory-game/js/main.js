
var cards = ["queen" , "queen" , "king" , "king"];
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
   var cardOne = cards[cardId];
    cardsInPlay.push(cardOne);
    console.log("you flipped: " + cardOne);

};
        flipCard(1);
        flipCard(0);

checkCards();


