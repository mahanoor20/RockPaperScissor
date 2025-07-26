let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice=() => {
    const options= ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random () * 3);
    return options [randIdx]
}
 const drawGame= () => {

 }

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
         msg.innerHTML = "Draw. Play again!";
         msg.style.backgroundColor = "#081b31";

    }else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
         userScore ++;
         userScorePara.innerText = userScore;
         msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}.`;
         msg.style.backgroundColor = "green";

    } else {
         compScore ++;
         compScorePara.innerText = compScore;
         msg.innerText = ` Computer wins! Computer's ${compChoice} beats your ${userChoice}.`;
         msg.style.backgroundColor = "red";

    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });


});