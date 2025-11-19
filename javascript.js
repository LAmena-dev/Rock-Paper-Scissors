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

  if (choice == 1) {
    choice = "rock";
    return funcCpuText();
  } else if (choice == 2) {
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
    pcChoice.src = "./images/" + choice + ".jpg";

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
      roundText.textContent = res;
    } else {
      const roundText = document.createElement("p");
      roundText.id = "roundText";
      roundText.setAttribute(
        "style",
        "text-align:center; margin: 0; padding: 0"
      );
      roundText.textContent = res;
      round.appendChild(roundText);
    }
  };

  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    const result =
      "You lose! " + computerChoice + " beats " + humanChoice + "!";
    funcRoundText(result);
    return "computer";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    const result = "You win! " + humanChoice + " beats " + computerChoice + "!";
    funcRoundText(result);
    return "human";
  } else {
    const result = "it's a tie! Both of your choices were " + humanChoice;
    funcRoundText(result);
    return;
  }
}

let playGame = (rounds) => {
  let round = 1;
  let humanScore = 0;
  let computerScore = 0;

  while (round <= rounds) {
    const player = getHumanChoice();
    const cpu = getComputerChoice();

    playRound(player, cpu);

    if (playRound(player, cpu) === "human") {
      humanScore += 1;
    } else if (playRound(player, cpu) === "computer") {
      computerScore += 1;
    }

    console.log(
      "Scores[ Player: " + humanScore + " CPU: " + computerScore + " ]"
    );
    round += 1;
    roundNum.textContent = "Round " + round;
  }

  if (humanScore < computerScore) {
    console.log("You lose!");
  } else if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("It's a tie!");
  }
};

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

const player = document.querySelector(".player");
const round = document.querySelector(".round");
const computer = document.querySelector(".computer");

const pcChoice = document.querySelector("#pcChoice");
const cpuChoice = document.querySelector("#cpuChoice");

const roundNum = document.querySelector(".roundNum");

rockbtn.addEventListener("click", () => {
  playRound(getHumanChoice("rock"), getComputerChoice());
});
paperbtn.addEventListener("click", () => {
  playRound(getHumanChoice("paper"), getComputerChoice());
});
scissorsbtn.addEventListener("click", () => {
  playRound(getHumanChoice("scissors"), getComputerChoice());
});

// playGame(5)
