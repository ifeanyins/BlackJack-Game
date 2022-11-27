let firstCard = getRandomCard ();
let secondCard = getRandomCard ();;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true;
let message = ' '

let messageEl = document.getElementById("message-el")
console.log(messageEl);
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

function getRandomCard (){
    return Math.floor(Math.random() * 12) + 1
}

let startGame = ()=> {
    renderGame();
}

let renderGame =()=> {
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
    message = 'Do you want to draw a new card?'
    }else if (sum === 21) {
    message = 'wohoo! you have gotten blackJack'
    hasBlackJack = true;
    }else {
    message ='you is out of the game'
    isAlive = false 

}
messageEl.textContent = message;
}

let newCard =()=> {
    let card = getRandomCard ();
    sum += card;  
    cards.push(card)
    renderGame();


document.title = 'Black Jack Game';






