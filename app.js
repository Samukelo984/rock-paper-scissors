const game = () => {
  let pScore = 0;
  let cScore = 0;

  //   STARTS THE GAME
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //   PLAY MATCH
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // GET COMPUTER OPTIONS
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // COMPUTER CHOICE
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
        // COMPAREHANDS
        compareHands(this.textContent, computerChoice);
        // UPDATE IMAGE HANDS ACCORDINGLY
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
        // ANIMATION
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //   UPDATE SCORE
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //   COMPARE DATA TO CHECK WINNER
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a Draw!";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  //   CALL ALL INNER FUNCTIONS
  startGame();
  playMatch();
};

// CALL MAIN FUNCTION
game();
