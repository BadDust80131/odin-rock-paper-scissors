let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choicenum = Math.random();
    let choicestr;
    if (choicenum <= 0.33) {
        choicestr = "rock";
    }else if(choicenum > 0.33 && choicenum <= 0.66) {
        choicestr = "paper";
    }else {
        choicestr = "scissor"
    }
    return choicestr
}

function getHumanChoice() {
    return prompt("rock, paper, or scissor: ")
}

function playRound(humanChoice,computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice == "rock") {
        switch (humanChoice) {
            case "rock":
                console.log("Tie");
                break;
            case "paper":
                humanScore++;
                console.log(`You win. ${humanChoice} beats ${computerChoice}.`)
                break;
            case "scissor":
                computerScore++;
                console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
                break;
        }
    }
    if (computerChoice == "paper") {
        switch (humanChoice) {
            case "rock":
                computerScore++;
                console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
                break;
            case "paper":
                console.log("Tie");
                break;
            case "scissor":
                humanScore++;
                console.log(`You win. ${humanChoice} beats ${computerChoice}.`)
                break;
        }
    }
    if (computerChoice == "scissor") {
        switch (humanChoice) {
            case "rock":
                humanScore++;
                console.log(`You win. ${humanChoice} beats ${computerChoice}.`)
                break;
            case "paper":
                computerScore++;
                console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
                break;
            case "scissor":
                console.log("Tie");
                break;
        }
    }
}

function playGame() {
    let humanSelection;
    let computerSelection;
    for (let i = 0; i <=4; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Player Score: ${humanScore}`)
}


playGame();
