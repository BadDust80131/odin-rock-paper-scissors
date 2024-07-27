let humanScore = 0;
let computerScore = 0;
let won = false;

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
    if (won == true) {
        return;
    }
    const out = document.querySelector("#result")
    const score = document.querySelector("#score")

    console.log(humanChoice)
    console.log(computerChoice)
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice == "rock") {
        switch (humanChoice) {
            case "rock":
                out.textContent = "Tie";
                break;
            case "paper":
                humanScore++;
                out.textContent = `You win. ${humanChoice} beats ${computerChoice}.`
                break;
            case "scissor":
                computerScore++;
                out.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`
                break;
        }
    }
    if (computerChoice == "paper") {
        switch (humanChoice) {
            case "rock":
                computerScore++;
                out.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`
                break;
            case "paper":
                out.textContent = "Tie";
                break;
            case "scissor":
                humanScore++;
                out.textContent = `You win. ${humanChoice} beats ${computerChoice}.`
                break;
        }
    }
    if (computerChoice == "scissor") {
        switch (humanChoice) {
            case "rock":
                humanScore++;
                out.textContent = `You win. ${humanChoice} beats ${computerChoice}.`
                break;
            case "paper":
                computerScore++;
                out.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`
                break;
            case "scissor":
                out.textContent = "Tie";
                break;
        }
    }
    score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`
    if (humanScore >= 5) {
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore} Player Won`
        won = true;
    }
    if (computerScore >= 5) {
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore} Computer Won`
        won = true;
    }
}

function playGame() {
    let humanSelection;
    let computerSelection;
    for (let i = 0; i <=4; i++) {
        humanSelection = getHumanChoice;
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Player Score: ${humanScore}`)
}

function buttonListeners() {
    const btnR = document.querySelector("#btn-r");
    btnR.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    const btnP = document.querySelector("#btn-p");
    btnP.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    const btnS = document.querySelector("#btn-s");
    btnS.addEventListener("click", () => {
        playRound("scissor", getComputerChoice());
    });
}

buttonListeners()