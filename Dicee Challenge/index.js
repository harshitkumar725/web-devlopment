
function changeDice(randomNumber1,str)
{
if(randomNumber1===1)
document.querySelector(str).setAttribute("src","images/dice1.png");
else if(randomNumber1===2)
document.querySelector(str).setAttribute("src","images/dice2.png");
else if(randomNumber1===3)
document.querySelector(str).setAttribute("src","images/dice3.png");
else if(randomNumber1===4)
document.querySelector(str).setAttribute("src","images/dice4.png");
else if(randomNumber1===5)
document.querySelector(str).setAttribute("src","images/dice5.png");
else if(randomNumber1===6)
document.querySelector(str).setAttribute("src","images/dice6.png");
}

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
changeDice(randomNumber1,".img1");
changeDice(randomNumber2,".img2");
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML = " 🚩 Player 1 wins!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";

else
document.querySelector("h1").innerHTML = "Draw!";
