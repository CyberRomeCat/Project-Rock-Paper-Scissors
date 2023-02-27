const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playScoreSelect = document.querySelector('.playscore');
const compScoreSelect = document.querySelector('.compscore');
const tieScoreSelect = document.querySelector('.tiescore')
const finalResult = document.querySelector('.finalresult')

let playerScore = 0;
let computerScore = 0;
let tie = 0;

buttons.forEach((item) => {
item.addEventListener('click',resultbutton)
});
   
function resultbutton () {
   let getComputerChoice = () => { 
      const randomNumber = Math.floor(Math.random() * 3)
      switch(randomNumber) {
         case 0:
            return 'ROCK';
         case 1:
            return 'PAPER';
         case 2: 
            return 'SCISSORS';
      }
   };
   
   let playRound = (playerSelection,computerSelection) => {
      const win = (playerSelection === 'ROCK') && (computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS') && (computerSelection === 'PAPER') || (playerSelection === 'PAPER') && (computerSelection === 'ROCK');
      if (playerSelection === computerSelection) {
         tie++;
         console.log("It's a tie")
         result.innerText = "IT'S A TIE"
      }
      else if (win) {
         playerScore++;
         console.log('YOU WON');
         result.innerText = "YOU WON"
      }
      else {
         computerScore++;
         console.log('YOU LOST');
         result.innerText = "YOU LOST";
      }
   };

   result.innerText = this.innerText;
   const playerSelection = result.innerText;
   const computerSelection = getComputerChoice();
   player.innerText = `player choose: ${playerSelection}`;
   computer.innerText = `computer choose: ${computerSelection}`;
   console.log(`player choose:${playerSelection}`);
   console.log(`computer choose:${computerSelection}`);
   console.log(playRound(playerSelection,computerSelection)); 

   playScoreSelect.innerHTML = `PLAYER:${playerScore}`;
   compScoreSelect.innerHTML = `COMPUTER:${computerScore}`;
   tieScoreSelect.innerHTML = `TIE:${tie}`;

   if (playerScore + computerScore + tie === 6) {
      if (playerScore > computerScore) {
         result.innerText = 'YOU ARE THE WINNER';
         alert('YOU ARE THE WINNER');
         alert('CHOOSE AGAIN FOR ANOTHER ROUND');
         playerScore = 0;
         computerScore = 0;
         tie = 0;
         return;  
      } else if (playerScore < computerScore){
         result.innerText = 'YOU ARE THE LOSER';
         alert('YOU ARE THE LOSER');
         alert('CHOOSE AGAIN FOR ANOTHER ROUND')
         playerScore = 0;
         computerScore = 0;
         tie = 0;
         return;
      } else if (playerScore === computerScore) {
         playerScore = 0;
         computerScore = 0;
         tie = 0;
         result.innerText = 'BOTH TIE';
         alert('BOTH PLAYER AND COMPUTER IS TIE');
         alert('CHOOSE AGAIN FOR ANOTHER ROUND');
         return;  
      }
   }
}







        
         