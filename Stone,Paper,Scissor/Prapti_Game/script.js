// const { options } = require("nodemon/lib/config"); 

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");


const genCompChoice = () => {
    const choices = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];   
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "black";
};

const showWinner = (userwin, userChoice, CompChoice)=>{
    if(userwin){
        userScore++;
        console.log("User Score:",userScore);
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
        } else{
        compScore++;
        console.log("Comp Score:",compScore);
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose. ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if (userChoice === CompChoice){
        console.log("Its a draw!");
        drawGame();
    
    } else{
        let userwin = true;
        if (userChoice === "Rock"){
            //scissor paper
            userwin = CompChoice === "Paper"? false:true;
        } else if(userChoice === "Paper"){
            //scissor rock
            userwin = CompChoice === "Scissor"? false:true;
        } else{
            userwin = CompChoice === "Rock" ? false:true;       
        }
        showWinner(userwin, userChoice, CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
});
});

//start from 8:13:00