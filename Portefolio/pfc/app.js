const launchGame = function () {
  let result;
  let playerChoice;
  let computerChoice;
  let gameLimit = 10;
  let playerScore = 0;
  let computerScore = 0;

  const choices = document.querySelectorAll(".choice");
  const btnReset = document.querySelector(".btn-reset");
  const resultSentence = document.querySelector(".result");
  const playerScoreSPan = document.getElementById("user-score");
  const computerScoreSpan = document.getElementById("computer-score");
  const computerChoiceImage = document.getElementById("imgComputerChoice");

  btnReset.addEventListener("click", resetGame);

  for (let i = 0; i < choices.length; i++) {
    
    choices[i].addEventListener("click", function () {
      playerChoice = choices[i].id;
      computerChoice = defineComputerChoice();

      displayImageComputerChoice(computerChoice);
      gameStart(playerChoice, computerChoice);
      displayResult(result);
      checkIsgameOver();
    });
  }

  function gameStart(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
      case "rr":
      case "pp":
      case "cc":
        result = "tie";
        break;
      case "rc":
      case "cp":
      case "pr":
        result = "win";
        break;
      case "cr":
      case "pc":
      case "rp":
        result = "loose";
        break;
    }
  }

  function displayResult(result) {
    if (result === "tie") {

      displayTextResult("Egalité recommence !");
      applyResultStyle(playerChoice, "tie");
      setTimeout(function () {removeResultStyle(playerChoice, "tie");
      }, 1000);

    } else if (result === "win") {

      displayScoreResult(playerScoreSPan, playerScore++);
      displayTextResult(`Tu marques un point !  ${convertToWord(playerChoice)} bat ${convertToWord(computerChoice)}!`);
      applyResultStyle(playerChoice, "win");
      setTimeout(function () {
        removeResultStyle(playerChoice, "win");
      }, 1000);

    } else if (result === "loose") {

      displayScoreResult(computerScoreSpan, computerScore++)
      displayTextResult(`Tu as perdu ! ${convertToWord(computerChoice)} bat ${convertToWord(playerChoice)} !`);
      applyResultStyle(playerChoice, "loose");
      setTimeout(function () {
        removeResultStyle(playerChoice, "loose");
      }, 1000);
    } 
  }

  function checkIsgameOver(){
    if (computerScore == gameLimit || playerScore == gameLimit) {
      if (computerScore > playerScore) {
        displayTextResult("Tu as perdu  la partie");
      } else {
        displayTextResult("Tu as gagné la partie");
      }
      setTimeout(resetGame, 2000);
    }    
  }


  function displayImageComputerChoice(computerChoice) {
    if(computerChoice === "r"){
      choiseImageTodisplay("pierre")
    }
    if(computerChoice === "p"){
      choiseImageTodisplay("feuille")
    }
    if(computerChoice === "c"){
      choiseImageTodisplay("ciseau")
    }
  }

  function applyResultStyle(choice, cssClass) {
    document.getElementById(choice).classList.add(cssClass);
  }

  function removeResultStyle(choice, cssClass) {
    document.getElementById(choice).classList.remove(cssClass);
  }

  function defineComputerChoice() {
    randomNumber = Math.round(Math.random() * 2);
    return  choices[randomNumber].id
  }

  function convertToWord(letter) {
    if (letter === "r") return " la Pierre";
    if (letter === "p") return " le Papier";
    if (letter === "c") return "les Ciseaux";
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreSpan.textContent = computerScore;
    playerScoreSPan.textContent = playerScore;
  }

  function choiseImageTodisplay(img) {
    computerChoiceImage.setAttribute("src", `img/${img}.png`);
  }

  function displayTextResult(textResult){
    resultSentence.textContent = textResult;
  }

  function displayScoreResult(content, score) {
    content.textContent = score;
  }
};


launchGame();
