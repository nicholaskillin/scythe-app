
//Get stuff from the DOM

window.onload = function () {
  let addPlayerButton = document.getElementById('add-player-button');
  let startGameButton = document.getElementById('start-game-button');
  let gameStartedDivOne = document.getElementById('game-started-1');
  let playerOne = document.getElementById('player-one');
  let playerOneText = document.getElementById('player-one-text');
  let playerOneMat = document.getElementById('player-one-player-mat');
  let playerOnePop = document.getElementById('player-one-pop');
  let playerOneStars = document.getElementById('player-one-stars');
  let gameStartedDivTwo = document.getElementById('game-started-2');
  let playerTwo = document.getElementById('player-two');
  let playerTwoText = document.getElementById('player-two-text');
  let playerTwoMat = document.getElementById('player-two-player-mat');
  let playerTwoPop = document.getElementById('player-two-pop');
  let gameStartedDivThree = document.getElementById('game-started-3');
  let playerThree = document.getElementById('player-three');
  let playerThreeText = document.getElementById('player-three-text');
  let playerThreeMat = document.getElementById('player-three-player-mat');
  let playerThreePop = document.getElementById('player-three-pop');
  let gameStartedDivFour = document.getElementById('game-started-4');
  let playerFour = document.getElementById('player-four');
  let playerFourText = document.getElementById('player-four-text');
  let playerFourMat = document.getElementById('player-four-player-mat');
  let playerFourPop = document.getElementById('player-four-pop');
  let gameStartedDivFive = document.getElementById('game-started-5');
  let playerFive = document.getElementById('player-five');
  let playerFiveText = document.getElementById('player-five-text');
  let playerFiveMat = document.getElementById('player-five-player-mat');
  let playerFivePop = document.getElementById('player-five-pop');
  let gameStartedDivSix = document.getElementById('game-started-6');
  let playerSix = document.getElementById('player-six');
  let playerSixText = document.getElementById('player-six-text');
  let playerSixMat = document.getElementById('player-six-player-mat');
  let playerSixPop = document.getElementById('player-six-pop');
  let gameStartedDivSeven = document.getElementById('game-started-7');
  let playerSeven = document.getElementById('player-seven');
  let playerSevenText = document.getElementById('player-seven-text');
  let playerSevenMat = document.getElementById('player-Seven-player-mat');
  let playerSevenPop = document.getElementById('player-seven-pop');
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
    mat: playerMats.pop(),
    popularity: 0,
    stars: 0
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

// Update Player Popularity

playerOnePop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-one-pop').value;
  players[0].popularity = newPlayerPop;
  console.log(players);
});

playerTwoPop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-two-pop').value;
  players[1].popularity = newPlayerPop;
  console.log(players);
});

playerThreePop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-three-pop').value;
  players[2].popularity = newPlayerPop;
  console.log(players);
});

playerFourPop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-four-pop').value;
  players[3].popularity = newPlayerPop;
  console.log(players);
});

playerFivePop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-five-pop').value;
  players[4].popularity = newPlayerPop;
  console.log(players);
});

playerSixPop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-six-pop').value;
  players[5].popularity = newPlayerPop;
  console.log(players);
});

playerSevenPop.addEventListener('input', function() {
  let newPlayerPop = document.getElementById('player-seven-pop').value;
  players[6].popularity = newPlayerPop;
  console.log(players);
});

// Update Player Stars

playerOneStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-one-stars').value;
  players[0].stars = newPlayerStars;
  let playerStarsScore = players[0].stars * players[0].popularity;
  let playerStarsScoreDiv = document.getElementById('player-one-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

};