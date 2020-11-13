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

  const textWin = 'Tu marques un point ! '
  const textLoose = 'Tu as perdu ! '
  const textTie = 'égalité recommence ! '
  const textWonGame = 'Tu as gagné la partie ! '
  const textLostGame = 'Tu as perdu la partie !'

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

      displayTextResult(textTie);
      applyResultStyle(playerChoice, "tie");
      setTimeout( () => {removeResultStyle(playerChoice, "tie");
      }, 1000);

    } else if (result === "win") {

      displayScore(playerScoreSPan, playerScore += 1 );
      displayTextResult(`${textWin} ${convertToWord(playerChoice)} bat ${convertToWord(computerChoice)}!`);
      applyResultStyle(playerChoice, "win");
      setTimeout( () => {
        removeResultStyle(playerChoice, "win");
      }, 1000);

    } else if (result === "loose") {

      displayScore(computerScoreSpan, computerScore += 1);
      displayTextResult(`${textLoose} ${convertToWord(computerChoice)} bat ${convertToWord(playerChoice)} !`);
      applyResultStyle(playerChoice, "loose");
      setTimeout( () => {
        removeResultStyle(playerChoice, "loose");
      }, 1000);
    } 
  }

  function checkIsgameOver(){
    if (computerScore == gameLimit || playerScore == gameLimit) {
      if (computerScore > playerScore) {
        displayTextResult(textLostGame);
      } else {
        displayTextResult(textWonGame);
      }
      setTimeout(resetGame, 2000);
    }    
  }


  function displayImageComputerChoice(computerChoice) {
    if(computerChoice === "r") displayImage("pierre");
    if(computerChoice === "p") displayImage("feuille");
    if(computerChoice === "c") displayImage("ciseau");
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
    displayScore(playerScoreSPan, playerScore);
    displayScore(computerScoreSpan, computerScore)
  }

  function displayImage(img) {
    computerChoiceImage.setAttribute("src", `img/${img}.png`);
  }

  function displayTextResult(textResult){
    resultSentence.textContent = textResult;
  }

  function displayScore(content, score) {
    content.textContent = score;
  }
};

launchGame();
