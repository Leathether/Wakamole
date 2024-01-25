const backgroundMusic = document.getElementById("backgroundmusic");
const winSound = document.getElementById("winsound");
const coinSound = document.getElementById("coinsound");
let points = 0;
let play = false;
let currentMole;


startbutton.onclick = function(){
    //prevents the user from clicking the play button multiple times
    if(play == false){
        backgroundMusic.play();
        backgroundMusic.loop = true;
        play = true;
        randomMoleGen();
    }
}

b1.onclick = function(){
    pointCalculator("b1");
}

b2.onclick = function(){
    pointCalculator("b2");
}

b3.onclick = function(){
    pointCalculator("b3");
}

b4.onclick = function(){
    pointCalculator("b4");
}

b5.onclick = function(){
    pointCalculator("b5");
}

b6.onclick = function(){
    pointCalculator("b6");
}

b7.onclick = function(){
    pointCalculator("b7");
}

b8.onclick = function(){
    pointCalculator("b8");
}

b9.onclick = function(){
    pointCalculator("b9");
}

function pointCalculator(buttonClicked){
    if(play == true){
        if(document.getElementById(buttonClicked).className == 'buttons mole'){
            points++;
            coinSound.play();
        } else {
            points--;
        }
        document.getElementById("pointsdisplay").innerHTML = "Points: " + points;
    }
}

function randomMoleGen(){
    //controls the amount of points needed to win
    if(points<10){
        if(currentMole != null){
            document.getElementById(currentMole).className = "buttons nomole";
        }

        currentMole = "b"+(Math.floor(Math.random() * 9)+1);
        console.log(currentMole);
        document.getElementById(currentMole).className = "buttons mole";
        //makes a clock until the game is won
        setTimeout(function() {randomMoleGen()}, 600);
    } else {
        backgroundMusic.pause();
        document.getElementById("pointsdisplay").style.display = "block";
        document.getElementById("startbutton").style.display = "block";
        document.getElementById("b1").style.visibility = "hidden";
        document.getElementById("b2").style.visibility = "hidden";
        document.getElementById("b3").style.visibility = "hidden";
        document.getElementById("b4").style.visibility = "hidden";
        document.getElementById("b5").style.visibility = "hidden";
        document.getElementById("b6").style.visibility = "hidden";
        document.getElementById("b7").style.visibility = "hidden";
        document.getElementById("b8").style.visibility = "hidden";
        document.getElementById("b9").style.visibility = "hidden";
        document.getElementById("winmessage").style.visibility = "visible";
        winSound.play();
    }
}