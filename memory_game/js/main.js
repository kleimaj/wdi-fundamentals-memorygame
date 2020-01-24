const cards = ["queen", "queen","king","king"];
let cardsInPlay = [];
let score = 0;
let reset = 0;
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
function reshuffle(){
    if(reset===1){
        console.log("reshuffling");
        createBoard();
        reset=0;
        cardsInPlay=[];
        document.getElementById("result").innerHTML="";
    }
}
function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        document.getElementById("result").innerHTML="Match Found";
        score=score+1;
        document.getElementById("score").innerHTML="Score:"+score;
        reset=1;
      } else {
        console.log("Sorry, try again.");
        document.getElementById("result").innerHTML="No Match, try again";
        reset=1;
        // alert("Sorry, try again.")
      }
}
function flipCard() {
    if (cardsInPlay.length==2) {
        return;
    }
    cardId=this.getAttribute('data-id');
    this.setAttribute('src',myArray[cardId].cardImage)
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped "+myArray[cardId].rank);
    if (cardsInPlay.length == 2) {
        checkForMatch();
    }
}
function createBoard(){
    document.getElementById("gameboard").innerHTML="";
    for (let i = 0; i < myArray.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById("gameboard").appendChild(cardElement);
    }
}
createBoard();