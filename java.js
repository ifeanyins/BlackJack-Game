let firstCard = 14;
let secondCard = 7;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true;
let message = ' '

let messageEl = document.getElementById("message-el")
console.log(messageEl);
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

let startGame = ()=> {
    renderGame();
}

let renderGame =()=> {
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
cardEl.textContent = 'cards: ' + cards[0] + ' ' + cards[1] ;
}

let newCard =()=> {
    let card = 7;
    sum += card;
    renderGame()
}

document.title = 'Black Jack Game'
