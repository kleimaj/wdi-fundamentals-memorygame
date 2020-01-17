const cards = ["queen", "queen","king","king"];
let cardsInPlay = [];
const myArray =[
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        alert("You found a match!");
      } else {
        console.log("Sorry, try again.");
        alert("Sorry, try again.")
      }
}
function flipCard() {
    cardId=this.getAttribute('data-id');
    this.setAttribute('src',myArray[cardId].cardImage)
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped "+myArray[cardId].rank);
    if (cardsInPlay.length == 2) {
        checkForMatch();
    }
}
function createBoard(){
    for (let i = 0; i < myArray.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById("gameboard").appendChild(cardElement);
    }
}
createBoard();