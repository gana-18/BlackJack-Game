let sum=0
let cards=[]
var money=0
let isAlive=false
let hasBlackJack=false
let messageEl=document.querySelector("#message-el")
let cardsEl=document.querySelector("#cards-el")
let sumEl=document.querySelector("#sum-el")
let person={
    name:"Gana"
}
let personEl=document.querySelector("#person-el")
function randomNumber(){
    let number=Math.floor(Math.random()*13)+1
    if(number>10){
        return 10
    }
    else if(number==1){
        return 11
    }
    else{
        return number
    }
}
function startGame(){
    isAlive=true
    let firstCard=randomNumber()
    let secondCard=randomNumber()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
        hasBlackJack==false
    } else if (sum === 21) {
        message = "You've got Blackjack !"
        hasBlackJack = true
    } else {
        message = "You're out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
    if(hasBlackJack===true){
        money=money+23
        personEl.textContent=person.name+":"+"$"+money
    }
    else{
        personEl.textContent=person.name+":"+"$"+money
    }
}
function newCard(){
    if(isAlive===true&&hasBlackJack===false){
    let card=randomNumber()
    sum=sum+card
    cards.push(card)
    renderGame()
    }
}