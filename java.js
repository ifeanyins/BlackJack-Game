let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false;
let message = ' '
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

function getRandomCard (){
    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber > 10 ) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

let startGame = ()=>{
    isAlive = true;
    let firstCard = getRandomCard ();
    let secondCard = getRandomCard ();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
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
}

document.title = 'Black Jack Game';






