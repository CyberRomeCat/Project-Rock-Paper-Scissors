
let playerScore = 0;
let computerScore = 0;
let tie = 0;

let gamePlay = () => {
   for (let i = 0; i < 5; i++) {
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
      }      
      let playRound = (playerSelection,computerSelection) => {
         const win = (playerSelection === 'ROCK') && (computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS') && (computerSelection === 'PAPER') || (playerSelection === 'PAPER') && (computerSelection === 'ROCK')
         if (playerSelection === computerSelection) {
            tie++;
            console.log("IT'S A TIE");
         }
         else if (win) {
            playerScore++;
            console.log('YOU WON');
         }
         else {
            computerScore++;
            console.log('YOU LOST');
         }
      }

      let player = prompt('choose your weapon');
      const playerSelection = player.toUpperCase();
      const computerSelection = getComputerChoice();
      console.log(`computer choose:${computerSelection}`)
      console.log(`player choose: ${playerSelection}`)

      console.log(playRound(playerSelection,computerSelection))
   }
}

gamePlay()


console.log(`PLAYER:${playerScore}`)
console.log(`COMPUTER:${computerScore}`)
console.log(`TIE:${tie}`)

let playAgain = prompt('Would you dare to play the game again?','yes')

if (playAgain === 'yes') {
   gamePlay()
}
else if (playAgain) {
   alert('pack you')
}





        
         