let humanScore = 0;
let compScore = 0;

function getcompChoice(){
    const choice= Math.random();
    if(choice<1/3) return "rock";
    else if (choice<2/3) return "paper";
    else return "scissors";
}
function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?");
}
function playRound(humanChoice, computerChoice){
    let human=humanChoice.toLowerCase();
    let comp=computerChoice.toLowerCase();
    if(human===comp) console.log("It's a Tie!")
    else if(
(human==="rock" && comp=="paper") ||
(human==="paper" && comp==="scissors")||
(human==="scissors" && comp==="rock")){
    compScore++;
    console.log(`You lose! ${comp} beats ${human}`);
}  else{
    humanScore++;
    console.log(`You win! ${human} beats ${comp}`);
}
}


function playGame(){
    for(let i=0;i<5; i++){
        const humanSelection=getHumanChoice();
        const compSelection=getcompChoice();
        playRound(humanSelection,compSelection);
    }
    console.log(`Final Score: `);
    console.log(`Human: ${humanScore} | Computer: ${compScore}`);
    if(humanScore>compScore) console.log("You won the game!!");
    else if(humanScore<compScore) console.log("You lost the game!!");
    else console.log("It's a tie!!");
}

playGame();
