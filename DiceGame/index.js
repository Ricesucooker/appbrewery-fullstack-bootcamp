randomNumber1

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var x = document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png"); 
var y = document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png"); 

var z = document.querySelector("h1");

let result;
if (randomNumber1 == randomNumber2){
        result = "You both winner" 
}else if( randomNumber1 > randomNumber2) {
        result = "Player1 win"
}else if ( randomNumber1 < randomNumber2){
        result = "player2 win"
}else{
        result = "Refresh Me"
    };

var newT = z.replaceChildren(result);
