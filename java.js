
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let start=document.getElementById("start-btn").addEventListener("click",startGame)
let para=document.getElementById("heading")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("card-el")
let cardBtn=document.getElementById("card-btn")
let name=document.getElementById("name")
let player={
   name:"guru",
   coin:124

}
name.innerText=player.name +":$" +player.coin
function startGame(){
    isAlive=true
    let firstNumber=getRandom()
    let secondNumber=getRandom()
    cards=[firstNumber,secondNumber]
    sum=firstNumber+secondNumber
    render()
}
function render(){
    cardEl.textContent="Cards: "
   for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" "
   }
     sumEl.textContent ="Sum:"+ sum
    if(sum===21){
    
        para.innerText="Wohoo! You/ve got BlackJack"
        hasBlackJack=true
        }else if(sum<21){
            para.innerText="Do u want to Draw a new Card"
        }else{
            para.innerText="You/ve are out of the game"
            isAlive=false
    }
    // console.log(hasBlackJack)
    // console.log(isAlive)

}
cardBtn.addEventListener("click",change)
function change(){
    // console.log("change")
    
    if(isAlive==true&& hasBlackJack===false){
        let card=getRandom()
        cards.push(card)
        console.log(cards)
        sum+=card 
        render() 
    }else{

    }
    
}

function getRandom(){
    
    let value=Math.floor(Math.random()*13)+1
    if(value===1) return 11
    else if(value>10) return 10
    else return value
    
}
