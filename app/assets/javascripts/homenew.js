
//Get stuff from the DOM

window.onload = function () {
  let addPlayerButton = document.getElementById('add-player-button');
  let startGameButton = document.getElementById('start-game-button');
  let playerOne = document.getElementById('player-one');
  let playerOneText = document.getElementById('player-one-text');
  let playerOneMat = document.getElementById('player-one-player-mat');
  let playerTwo = document.getElementById('player-two');
  let playerTwoText = document.getElementById('player-two-text');
  let playerTwoMat = document.getElementById('player-two-player-mat');
  let playerThree = document.getElementById('player-three');
  let playerThreeText = document.getElementById('player-three-text');
  let playerThreeMat = document.getElementById('player-three-player-mat');
  let playerFour = document.getElementById('player-four');
  let playerFourText = document.getElementById('player-four-text');
  let playerFourMat = document.getElementById('player-four-player-mat');
  let playerFive = document.getElementById('player-five');
  let playerFiveText = document.getElementById('player-five-text');
  let playerFiveMat = document.getElementById('player-five-player-mat');
  let playerSix = document.getElementById('player-six');
  let playerSixText = document.getElementById('player-six-text');
  let playerSixMat = document.getElementById('player-six-player-mat');
  let playerSeven = document.getElementById('player-seven');
  let playerSevenText = document.getElementById('player-seven-text');
  let playerSevenMat = document.getElementById('player-Seven-player-mat');
  let invaders = false;

//Set display for DOM elements
playerOne.style.display = 'none';
playerTwo.style.display = 'none';
playerThree.style.display = 'none';
playerFour.style.display = 'none';
playerFive.style.display = 'none';
playerSix.style.display = 'none';
playerSeven.style.display = 'none';

//Set arrays
let factions = ["Nordic", "Saxony", "Polania", "Crimea", "Rusviet"];
if (invaders) {
  factions.push("Albion");
  factions.push("Togawa");
}
randomizeArray(factions);
let playerMats = ["Mechanical", "Patriotic", "Agricultural", "Industrial", "Engineering"];
randomizeArray(playerMats);
let players = [];

//Set functions
function addPlayer(){
  let newPlayer = {
    playerNumber: players.length + 1,
    faction: factions.pop(),
    mat: playerMats.pop()
  };
  players.push(newPlayer);
}

function randomizeArray(array) {
  for (let i = 0; i < array.length; i++ ) {
    let swapIdx = Math.trunc(Math.random() * array.length);
    let tmp = array[swapIdx];
    array[swapIdx] = array[i];
    array[i] = tmp;
  }
}

//Button event listeners
addPlayerButton.addEventListener('click', function() {
  switch (players.length + 1) {
    case 1:
      addPlayer();
      playerOne.style.display = "block";
      playerOneText.innerText = "You're the " + players[0].faction + " faction!";
      playerOneMat.innerText = "You get the " + players[0].mat + " player mat!";
      break;
    case 2:
      addPlayer();
      playerTwo.style.display = "block";
      playerTwoText.innerText = "You're the " + players[1].faction + " faction!";
      playerTwoMat.innerText = "You get the " + players[1].mat + " player mat!";
      startGameButton.style.display = "inline";
      break;
    case 3:
      addPlayer();
      playerThree.style.display = "block";
      playerThreeText.innerText = "You're the " + players[2].faction + " faction!";
      playerThreeMat.innerText = "You get the " + players[2].mat + " player mat!";
      break;
    case 4:
      addPlayer();
      playerFour.style.display = "block";
      playerFourText.innerText = "You're the " + players[3].faction + " faction!";
      playerFourMat.innerText = "You get the " + players[3].mat + " player mat!";
      break;
    case 5:
      addPlayer();
      playerFive.style.display = "block";
      playerFiveText.innerText = "You're the " + players[4].faction + " faction!";
      playerFiveMat.innerText = "You get the " + players[4].mat + " player mat!";
      addPlayerButton.style.display = 'none';
      break;
  }
  console.log(players);
});
};