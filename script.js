let userWeapon = prompt('rock paper or scissors?')

        function getComputerChoice() { 
            const randomNumber = Math.floor(Math.random() * 3)

            switch(randomNumber) {
                case 0:
                    return 'rock'
                    break;
                case 1:
                    return 'paper'
                    break;
                case 2: 
                    return 'scissors'
            }
          
        }

        let computerSelection = getComputerChoice;
        

        function playRound(playerSelection, computerSelection) {        
             if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
                return 'you win!!!';
             } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
                return 'you win!!!';
             } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
                return 'you win!!!';

             } else if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {
                return 'You lose!!!';
             } else if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {
                return 'You lose!!!';
             } else if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
                return 'You lose!!!';
             }  
        }   
        
        function playRoundTie(playerSelection, computerSelection) {

             if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
                return 'it/s a tie';   
             } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
                return 'it/s a tie';
             } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
                return 'it/s a tie';
             } 
            
        }

        function game() {
            for(let i = 1; i >= 5; i++) {        
            
            }
        }
            