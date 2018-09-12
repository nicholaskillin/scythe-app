
//Get stuff from the DOM

window.onload = function () {
  
  //Get non-player elements
  let addPlayerButton = document.getElementById('add-player-button');
  let startGameButton = document.getElementById('start-game-button');
  let invaders = false;
  let gameStarted = false
  
//Get player one elements
  let gameStartedDivOne = document.getElementById('game-started-1');
  let playerOne = document.getElementById('player-one');
  let playerOneText = document.getElementById('player-one-text');
  let playerOneMat = document.getElementById('player-one-player-mat');
  let playerOnePop = document.getElementById('player-one-pop');
  let playerOneStars = document.getElementById('player-one-stars');
  let playerOneTerritories = document.getElementById("player-one-territory");
  let playerOneResources = document.getElementById("player-one-resources");
  let playerOneMoney = document.getElementById("player-one-money");
  let playerOneStrucBonus = document.getElementById("player-one-strucBonus");
  
//Get player two elements
  let gameStartedDivTwo = document.getElementById('game-started-2');
  let playerTwo = document.getElementById('player-two');
  let playerTwoText = document.getElementById('player-two-text');
  let playerTwoMat = document.getElementById('player-two-player-mat');
  let playerTwoPop = document.getElementById('player-two-pop');
  let playerTwoStars = document.getElementById('player-two-stars');
  let playerTwoTerritories = document.getElementById("player-two-territory");
  let playerTwoResources = document.getElementById("player-two-resources");
  let playerTwoMoney = document.getElementById("player-two-money");
  let playerTwoStrucBonus = document.getElementById("player-two-strucBonus");
  
//Get player three elements
  let gameStartedDivThree = document.getElementById('game-started-3');
  let playerThree = document.getElementById('player-three');
  let playerThreeText = document.getElementById('player-three-text');
  let playerThreeMat = document.getElementById('player-three-player-mat');
  let playerThreePop = document.getElementById('player-three-pop');
  let playerThreeStars = document.getElementById('player-three-stars');
  let playerThreeTerritories = document.getElementById("player-three-territory");
  let playerThreeResources = document.getElementById("player-three-resources");
  let playerThreeMoney = document.getElementById("player-three-money");
  let playerThreeStrucBonus = document.getElementById("player-three-strucBonus");
  
//Get player four elements
  let gameStartedDivFour = document.getElementById('game-started-4');
  let playerFour = document.getElementById('player-four');
  let playerFourText = document.getElementById('player-four-text');
  let playerFourMat = document.getElementById('player-four-player-mat');
  let playerFourPop = document.getElementById('player-four-pop');
  let playerFourStars = document.getElementById('player-four-stars');
  let playerFourTerritories = document.getElementById("player-four-territory");
  let playerFourResources = document.getElementById("player-four-resources");
  let playerFourMoney = document.getElementById("player-four-money");
  let playerFourStrucBonus = document.getElementById("player-four-strucBonus");
  
//Get player five elements
  let gameStartedDivFive = document.getElementById('game-started-5');
  let playerFive = document.getElementById('player-five');
  let playerFiveText = document.getElementById('player-five-text');
  let playerFiveMat = document.getElementById('player-five-player-mat');
  let playerFivePop = document.getElementById('player-five-pop');
  let playerFiveStars = document.getElementById('player-five-stars');
  let playerFiveTerritories = document.getElementById("player-five-territory");
  let playerFiveResources = document.getElementById("player-five-resources");
  let playerFiveMoney = document.getElementById("player-five-money");
  let playerFiveStrucBonus = document.getElementById("player-five-strucBonus");
  
//Get player six elements
  let gameStartedDivSix = document.getElementById('game-started-6');
  let playerSix = document.getElementById('player-six');
  let playerSixText = document.getElementById('player-six-text');
  let playerSixMat = document.getElementById('player-six-player-mat');
  let playerSixPop = document.getElementById('player-six-pop');
  let playerSixStars = document.getElementById('player-six-stars');
  let playerSixTerritories = document.getElementById("player-six-territory");
  let playerSixResources = document.getElementById("player-six-resources");
  let playerSixMoney = document.getElementById("player-six-money");
  let playerSixStrucBonus = document.getElementById("player-six-strucBonus");
  
//Get player seven elements
  let gameStartedDivSeven = document.getElementById('game-started-7');
  let playerSeven = document.getElementById('player-seven');
  let playerSevenText = document.getElementById('player-seven-text');
  let playerSevenMat = document.getElementById('player-Seven-player-mat');
  let playerSevenPop = document.getElementById('player-seven-pop');
  let playerSevenStars = document.getElementById('player-seven-stars');
  let playerSevenTerritories = document.getElementById("player-seven-territory");
  let playerSevenResources = document.getElementById("player-seven-resources");
  let playerSevenMoney = document.getElementById("player-seven-money");
  let playerSevenStrucBonus = document.getElementById("player-seven-strucBonus");

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
    stars: 0,
    territory: 0,
    resources: 0,
    money: 0,
    structureBonusPoints: 0,
    controlsFactory: false
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
  if (players[0].popularity <= 6) {
    var playerStarsScore = players[0].stars * 3;
  } else if (players[0].popularity >= 13) {
    var playerStarsScore = players[0].stars * 5;
  } else {
    var playerStarsScore = players[0].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById("player-one-stars-score");
  playerStarsScoreDiv.innerHTML = playerStarsScore;
});

playerTwoStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-two-stars').value;
  players[1].stars = newPlayerStars;
  if (players[1].popularity <= 6) {
    var playerStarsScore = players[1].stars * 3;
  } else if (players[1].popularity >= 13) {
    var playerStarsScore = players[1].stars * 5;
  } else {
    var playerStarsScore = players[1].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-two-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

playerThreeStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-three-stars').value;
  players[2].stars = newPlayerStars;
  if (players[2].popularity <= 6) {
    var playerStarsScore = players[2].stars * 3;
  } else if (players[2].popularity >= 13) {
    var playerStarsScore = players[2].stars * 5;
  } else {
    var playerStarsScore = players[2].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-three-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

playerFourStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-four-stars').value;
  players[3].stars = newPlayerStars;
  if (players[3].popularity <= 6) {
    var playerStarsScore = players[3].stars * 3;
  } else if (players[3].popularity >= 13) {
    var playerStarsScore = players[3].stars * 5;
  } else {
    var playerStarsScore = players[3].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-four-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

playerFiveStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-five-stars').value;
  players[4].stars = newPlayerStars;
  if (players[4].popularity <= 6) {
    var playerStarsScore = players[4].stars * 3;
  } else if (players[4].popularity >= 13) {
    var playerStarsScore = players[4].stars * 5;
  } else {
    var playerStarsScore = players[4].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-five-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

playerSixStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-six-stars').value;
  players[5].stars = newPlayerStars;
  if (players[5].popularity <= 6) {
    var playerStarsScore = players[5].stars * 3;
  } else if (players[5].popularity >= 13) {
    var playerStarsScore = players[5].stars * 5;
  } else {
    var playerStarsScore = players[5].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-six-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

playerSevenStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-seven-stars').value;
  players[6].stars = newPlayerStars;
  if (players[6].popularity <= 6) {
    var playerStarsScore = players[6].stars * 3;
  } else if (players[6].popularity >= 13) {
    var playerStarsScore = players[6].stars * 5;
  } else {
    var playerStarsScore = players[6].stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById('player-seven-stars-score');
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  console.log(players);
});

//Update Player Territory

playerOneTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerOneTerritories.value;
  players[0].territory = newPlayerTerritories;
  if (players[0].popularity <= 6) {
    var playerTerritoriesScore = players[0].territory * 2;
  } else if (players[0].popularity >= 13) {
    var playerTerritoriesScore = players[0].territory * 4;
  } else {
    var playerTerritoriesScore = players[0].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-one-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerTwoTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerTwoTerritories.value;
  players[1].territory = newPlayerTerritories;
  if (players[1].popularity <= 6) {
    var playerTerritoriesScore = players[1].territory * 2;
  } else if (players[1].popularity >= 13) {
    var playerTerritoriesScore = players[1].territory * 4;
  } else {
    var playerTerritoriesScore = players[1].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-two-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerThreeTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerThreeTerritories.value;
  players[2].territory = newPlayerTerritories;
  if (players[2].popularity <= 6) {
    var playerTerritoriesScore = players[2].territory * 2;
  } else if (players[2].popularity >= 13) {
    var playerTerritoriesScore = players[2].territory * 4;
  } else {
    var playerTerritoriesScore = players[2].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-three-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerFourTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerFourTerritories.value;
  players[3].territory = newPlayerTerritories;
  if (players[3].popularity <= 6) {
    var playerTerritoriesScore = players[3].territory * 2;
  } else if (players[3].popularity >= 13) {
    var playerTerritoriesScore = players[3].territory * 4;
  } else {
    var playerTerritoriesScore = players[3].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-four-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerFiveTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerFiveTerritories.value;
  players[4].territory = newPlayerTerritories;
  if (players[4].popularity <= 6) {
    var playerTerritoriesScore = players[4].territory * 2;
  } else if (players[4].popularity >= 13) {
    var playerTerritoriesScore = players[4].territory * 4;
  } else {
    var playerTerritoriesScore = players[4].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-five-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerSixTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerSixTerritories.value;
  players[5].territory = newPlayerTerritories;
  if (players[5].popularity <= 6) {
    var playerTerritoriesScore = players[5].territory * 2;
  } else if (players[5].popularity >= 13) {
    var playerTerritoriesScore = players[5].territory * 4;
  } else {
    var playerTerritoriesScore = players[5].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-six-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

playerSevenTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerSevenTerritories.value;
  players[6].territory = newPlayerTerritories;
  if (players[6].popularity <= 6) {
    var playerTerritoriesScore = players[6].territory * 2;
  } else if (players[6].popularity >= 13) {
    var playerTerritoriesScore = players[6].territory * 4;
  } else {
    var playerTerritoriesScore = players[6].territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-seven-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
});

//Update Player Resources

//Update Player Money

//Update Player Structure Bonus

};