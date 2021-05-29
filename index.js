const randomNumber1 = Math.floor((Math.random() * 6) + 1); //used to update the first dice image
const randomNumber2 = Math.floor((Math.random() * 6) + 1); //used to update the second dice image

//changes image of the first dice randomly
const updateImg1 = () =>{
    const img1 = document.querySelectorAll("img")[0];
    const randomDiceImage = "dice" + randomNumber1 + ".png";
    const randomImageSource1 = "images/" + randomDiceImage;
    img1.setAttribute("src", randomImageSource1);
}

//changes image of the second dice randomly
const updateImg2 = () =>{
    const img2 = document.querySelectorAll("img")[1];
    const randomDiceImage = "dice" + randomNumber2 + ".png";
    const randomImageSource2 = "images/" + randomDiceImage;
    img2.setAttribute("src", randomImageSource2);
}


//tells which of the dice is greater
const updateWinner = () =>{
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Result is a tie.";
    }
}
updateImg1();
updateImg2();
updateWinner();