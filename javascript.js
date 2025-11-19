// function expression

function getComputerChoice() {
  const cpuText = document.querySelector("#cpuText");
  const constant = 3;
  let choice = Math.floor(Math.random() * constant);

  let funcCpuText = () => {
    cpuChoice.src = "./images/" + choice + ".jpg";
    if (cpuText) {
      cpuText.textContent = choice;
    } else {
      const cpuText = document.createElement("p");
      cpuText.id = "cpuText";
      cpuText.setAttribute("style", "margin: 0; padding: 0");
      cpuText.textContent = choice;
      computer.appendChild(cpuText);
    }
    return choice;
  };

  if (choice === 1) {
    choice = "rock";
    return funcCpuText();
  } else if (choice === 2) {
    choice = "paper";
    return funcCpuText();
  } else {
    choice = "scissors";
    return funcCpuText();
  }
}

// arrow function
let getHumanChoice = (choice) => {
  // let choice = prompt("What's your choice?: ").toLowerCase();
  const pcText = document.querySelector("#pcText");

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    playerChoice.src = "./images/" + choice + ".jpg";

    if (pcText) {
      pcText.textContent = choice;
    } else {
      const pcText = document.createElement("p");
      pcText.id = "pcText";
      pcText.setAttribute("style", "margin: 0; padding: 0");
      pcText.textContent = choice;
      player.appendChild(pcText);
    }
    return choice;
  }
  //   else {
  //     console.log("enter a valid choice!");
  //   }
};

function playRound(humanChoice, computerChoice) {
  const roundText = document.querySelector("#roundText");

  let funcRoundText = (res) => {
    if (roundText) {
      if (res == "You win! " + humanChoice + " beats " + computerChoice + "!") {
        roundText.setAttribute("style", "color: green");
      } else if (
        res ==
        "You lose! " + computerChoice + " beats " + humanChoice + "!"
      ) {
        roundText.setAttribute("style", "color: red");
      } else {
        roundText.setAttribute("style", "color: white");
      }
      roundText.textContent = res;
    } else {
      const roundText = document.createElement("p");
      roundText.id = "roundText";
      roundText.setAttribute("style", "text-align: center");
      if (res == "You win! " + humanChoice + " beats " + computerChoice + "!") {
        roundText.setAttribute("style", "color: green");
      } else if (
        res ==
        "You lose! " + computerChoice + " beats " + humanChoice + "!"
      ) {
        roundText.setAttribute("style", "color: red");
      } else {
        roundText.setAttribute("style", "color: white");
      }

      roundText.textContent = res;
      round.appendChild(roundText);
    }
  };

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    const result =
      "You lose! " + computerChoice + " beats " + humanChoice + "!";
    funcRoundText(result);
    return "computer";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    const result = "You win! " + humanChoice + " beats " + computerChoice + "!";
    funcRoundText(result);
    return "human";
  } else {
    const result = "it's a tie! Both of your choices were " + humanChoice;
    funcRoundText(result);
    return "tie";
  }
}

let playGame = (human) => {
  //   let round = 1;
  //   let humanScore = 0;
  //   let computerScore = 0;

  //   while (round <= rounds) {
  const player = getHumanChoice(human);
  const cpu = getComputerChoice();

  let funcWinText = (wText) => {
    const winText = document.createElement("p");
    winText.id = "winText";
    winText.setAttribute("style", "text-align: center");
    if (humeScore === 5) {
      winText.setAttribute("style", "color: green");
    } else {
      winText.setAttribute("style", "color: red");
    }
    winText.textContent = wText;
    round.appendChild(winText);

    humeScore = 0;
    humanScore.textContent = humeScore;
    compScore = 0;
    computerScore.textContent = compScore;
    return;
  };

  playRound(player, cpu);

  if (playRound(player, cpu) === "human") {
    humeScore += 1;
    humanScore.textContent = humeScore;
  } else if (playRound(player, cpu) === "computer") {
    compScore += 1;
    computerScore.textContent = compScore;
  } else if (playRound(player, cpu) === "tie") {
    ties += 1;
    tieScore.textContent = ties;
  }

  //   console.log(
  //     "Scores[ Player: " + humanScore + " CPU: " + computerScore + " ]"
  //   );

  roundNum += 1;
  rounds.textContent = roundNum;
  //   }

  if (humeScore === 5 || compScore === 5) {
    if (humeScore < compScore) {
      win = "You lose!";
      funcWinText(win);
      const tempTies = ties;
    } else if (humeScore > compScore) {
      win = "You win!";
      funcWinText(win);
      const tempTies = ties;
    }
    // else {
    //   win = "It's a tie!";
    // }
  } else if ((humeScore % 5 !== 0 && compScore % 5 !== 0) || tempTies < ties) {
    round.removeChild(winText);
  }
  return;
};

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

const player = document.querySelector(".player");
const round = document.querySelector(".round");
const computer = document.querySelector(".computer");

const playerChoice = document.querySelector("#playerChoice");
const cpuChoice = document.querySelector("#cpuChoice");

const humanScore = document.querySelector(".playerScore");
const rounds = document.querySelector(".roundNum");
const tieScore = document.querySelector(".ties");
const computerScore = document.querySelector(".cpuScore");

let roundNum = 1;
let humeScore = 0;
let compScore = 0;
let ties = 0;
let tempTies = 0;

rockbtn.addEventListener("click", () => {
  //   playRound(getHumanChoice("rock"), getComputerChoice());
  playGame("rock");
});
paperbtn.addEventListener("click", () => {
  //   playRound(getHumanChoice("paper"), getComputerChoice());
  playGame("paper");
});
scissorsbtn.addEventListener("click", () => {
  //   playRound(getHumanChoice("scissors"), getComputerChoice());
  playGame("scissors");
});

// playGame(5);
