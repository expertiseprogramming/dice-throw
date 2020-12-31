randumNumber1 = randomNumberGenerator();
console.log(randumNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randumNumber1 + ".png");

randumNumber2 = randomNumberGenerator();
console.log(randumNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + randumNumber2 + ".png");

var winner =  "";
if(randumNumber1 > randumNumber2){
    winner = "🚩Player1 Wins"
}
else if (randumNumber1 < randumNumber2) {
    winner = "Player2 Wins 🚩"
}
else{
    winner = "Draw"
}
document.querySelector("h1").innerHTML = winner;

function randomNumberGenerator(){
    return Math.floor((Math.random() * 6) + 1);
}
