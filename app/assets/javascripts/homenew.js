
//Get stuff from the DOM

window.onload = function () {
  let addPlayerButton = document.getElementById('add-player-button');
  let startGameButton = document.getElementById('start-game-button');
  let gameStartedDivOne = document.getElementById('game-started-1');
  let playerOne = document.getElementById('player-one');
  let playerOneText = document.getElementById('player-one-text');
  let playerOneMat = document.getElementById('player-one-player-mat');
  let gameStartedDivTwo = document.getElementById('game-started-2');
  let playerTwo = document.getElementById('player-two');
  let playerTwoText = document.getElementById('player-two-text');
  let playerTwoMat = document.getElementById('player-two-player-mat');
  let gameStartedDivThree = document.getElementById('game-started-3');
  let playerThree = document.getElementById('player-three');
  let playerThreeText = document.getElementById('player-three-text');
  let playerThreeMat = document.getElementById('player-three-player-mat');
  let gameStartedDivFour = document.getElementById('game-started-4');
  let playerFour = document.getElementById('player-four');
  let playerFourText = document.getElementById('player-four-text');
  let playerFourMat = document.getElementById('player-four-player-mat');
  let gameStartedDivFive = document.getElementById('game-started-5');
  let playerFive = document.getElementById('player-five');
  let playerFiveText = document.getElementById('player-five-text');
  let playerFiveMat = document.getElementById('player-five-player-mat');
  let gameStartedDivSix = document.getElementById('game-started-6');
  let playerSix = document.getElementById('player-six');
  let playerSixText = document.getElementById('player-six-text');
  let playerSixMat = document.getElementById('player-six-player-mat');
  let gameStartedDivSeven = document.getElementById('game-started-7');
  let playerSeven = document.getElementById('player-seven');
  let playerSevenText = document.getElementById('player-seven-text');
  let playerSevenMat = document.getElementById('player-Seven-player-mat');
  let invaders = false;
  let gameStarted = false

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
      playerOneText.innerText = "Faction: " + players[0].faction;
      playerOneMat.innerText = "Player mat: " + players[0].mat;
      break;
    case 2:
      addPlayer();
      playerTwo.style.display = "block";
      playerTwoText.innerText = "Faction: " + players[1].faction;
      playerTwoMat.innerText = "Player mat: " + players[1].mat;
      startGameButton.style.display = "inline";
      break;
    case 3:
      addPlayer();
      playerThree.style.display = "block";
      playerThreeText.innerText = "Faction: " + players[2].faction;
      playerThreeMat.innerText = "Player mat: " + players[2].mat;
      break;
    case 4:
      addPlayer();
      playerFour.style.display = "block";
      playerFourText.innerText = "Faction: " + players[3].faction;
      playerFourMat.innerText = "Player mat: " + players[3].mat;
      break;
    case 5:
      addPlayer();
      playerFive.style.display = "block";
      playerFiveText.innerText = "Faction: " + players[4].faction;
      playerFiveMat.innerText = "Player mat: " + players[4].mat;
      addPlayerButton.style.display = 'none';
      break;
  }
  console.log(players);
});

startGameButton.addEventListener('click', function() {
  gameStarted = true;
  console.log("Game Started!");
  gameStartedDivOne.style.display = "block";
  gameStartedDivTwo.style.display = "block";
  gameStartedDivThree.style.display = "block";
  gameStartedDivFour.style.display = "block";
  gameStartedDivFive.style.display = "block";
  gameStartedDivSix.style.display = "block";
  gameStartedDivSeven.style.display = "block";
});

};