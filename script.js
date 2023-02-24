//your code here
const userGuess = document.getElementById('guess');
const btn = document.getElementById('btn');
const displayNum = document.getElementById('num');
const hotOrCold = document.getElementById('respond');

btn.addEventListener('click', ()=>{
    let random = Math.floor((Math.random()*21));
    let userNum = Number(userGuess.value);
    displayNum.innerText = random;
    if(random <= 20 && random >= -20){
        hotOrCold.innerText = 'Hot';
    }else{
        hotOrCold.innerText = 'Cold';
    }
})
    
        

