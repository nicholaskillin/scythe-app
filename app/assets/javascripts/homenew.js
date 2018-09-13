
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
  let playerOnePop = document.getElementById('player-1-pop');
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
  let playerTwoPop = document.getElementById('player-2-pop');
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
  let playerThreePop = document.getElementById('player-3-pop');
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
  let playerFourPop = document.getElementById('player-4-pop');
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
  let playerFivePop = document.getElementById('player-5-pop');
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
  let playerSixPop = document.getElementById('player-6-pop');
  let playerSixStars = document.getElementById('player-six-stars');
  let playerSixTerritories = document.getElementById("player-six-territory");
  let playerSixResources = document.getElementById("player-six-resources");
  let playerSixMoney = document.getElementById("player-six-money");
  let playerSixStrucBonus = document.getElementById("player-six-strucBonus");
  
//Get player seven elements
  let gameStartedDivSeven = document.getElementById('game-started-7');
  let playerSeven = document.getElementById('player-seven');
  let playerSevenText = document.getElementById('player-seven-text');
  let playerSevenMat = document.getElementById('player-seven-player-mat');
  let playerSevenPop = document.getElementById('player-7-pop');
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

function updatePopularity(player) {
  let elementId = "player-" + player.playerNumber + "-pop";
  let newPlayerPop = document.getElementById(elementId).value;
  player.popularity = newPlayerPop;
  updateStars(player);
  updateTerrirories(player);
  updateResources(player);
}

function updateStars(player) {
  if (player.popularity <= 6) {
    var playerStarsScore = player.stars * 3;
  } else if (player.popularity >= 13) {
    var playerStarsScore = player.stars * 5;
  } else {
    var playerStarsScore = player.stars * 4;
  }
  let playerStarsScoreDiv = document.getElementById("player-" + player.playerNumber + "-stars-score");
  playerStarsScoreDiv.innerHTML = playerStarsScore;
  calculateTotalScore(player);
}

function updateTerrirories(player) {
  if (player.popularity <= 6) {
    var playerTerritoriesScore = player.territory * 2;
  } else if (player.popularity >= 13) {
    var playerTerritoriesScore = player.territory * 4;
  } else {
    var playerTerritoriesScore = player.territory * 3;
  }
  let playerTerritoriesScoreDiv = document.getElementById("player-" + player.playerNumber + "-territory-score");
  playerTerritoriesScoreDiv.innerHTML = playerTerritoriesScore;
  calculateTotalScore(player);
}

function updateResources(player) {
  if (player.popularity <= 6) {
    var playerResourcesScore = Math.floor(player.resources/2);
  } else if (player.popularity >= 13) {
    var playerResourcesScore = Math.floor(player.resources/2) * 3;
  } else {
    var playerResourcesScore = Math.floor(player.resources/2) * 2;
  }
  let playerResourcesScoreDiv = document.getElementById("player-" + player.playerNumber + "-resources-score");
  playerResourcesScoreDiv.innerHTML = playerResourcesScore;
  calculateTotalScore(player);
}

function calculateTotalScore(player) {
  //Get Stars Score
  var starsScore = Number(document.getElementById("player-" + player.playerNumber + "-stars-score").innerHTML);
  var territoryScore = Number(document.getElementById("player-" + player.playerNumber + "-territory-score").innerHTML);
  var resourcesScore = Number(document.getElementById("player-" + player.playerNumber + "-resources-score").innerHTML);
  var moneyScore = Number(document.getElementById("player-" + player.playerNumber + "-money-score").innerHTML);
  var strucBonusScore = Number(document.getElementById("player-" + player.playerNumber + "-strucBonus-score").innerHTML);
  //Add them all together
  let totalPlayerScore = starsScore + territoryScore + resourcesScore + moneyScore + strucBonusScore;
  let totalPlayerScoreDiv = document.getElementById("player-" + player.playerNumber + "-total-score");
  totalPlayerScoreDiv.innerHTML = totalPlayerScore;
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
});

startGameButton.addEventListener('click', function() {
  gameStarted = true;
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
  updatePopularity(players[0]);
});

playerTwoPop.addEventListener('input', function() {
  updatePopularity(players[1]);
});

playerThreePop.addEventListener('input', function() {
  updatePopularity(players[2]);
});

playerFourPop.addEventListener('input', function() {
  updatePopularity(players[3]);
});

playerFivePop.addEventListener('input', function() {
  updatePopularity(players[4]);
});

playerSixPop.addEventListener('input', function() {
  updatePopularity(players[5]);
});

playerSevenPop.addEventListener('input', function() {
  updatePopularity(players[6]);
});

// Update Player Stars

playerOneStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-one-stars').value;
  players[0].stars = newPlayerStars;
  updateStars(players[0]);
});

playerTwoStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-two-stars').value;
  players[1].stars = newPlayerStars;
  updateStars(players[1]);
});

playerThreeStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-three-stars').value;
  players[2].stars = newPlayerStars;
  updateStars(players[2]);
});

playerFourStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-four-stars').value;
  players[3].stars = newPlayerStars;
  updateStars(players[3]);
});

playerFiveStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-five-stars').value;
  players[4].stars = newPlayerStars;
  updateStars(players[4]);
});

playerSixStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-six-stars').value;
  players[5].stars = newPlayerStars;
  updateStars(players[5]);
});

playerSevenStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-seven-stars').value;
  players[6].stars = newPlayerStars;
  updateStars(players[6]);
});

//Update Player Territory

playerOneTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerOneTerritories.value;
  players[0].territory = newPlayerTerritories;
  updateTerrirories(players[0]);
});

playerTwoTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerTwoTerritories.value;
  players[1].territory = newPlayerTerritories;
  updateTerrirories(players[1]);
});

playerThreeTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerThreeTerritories.value;
  players[2].territory = newPlayerTerritories;
  updateTerrirories(players[2]);
});

playerFourTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerFourTerritories.value;
  players[3].territory = newPlayerTerritories;
  updateTerrirories(players[3]);
});

playerFiveTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerFiveTerritories.value;
  players[4].territory = newPlayerTerritories;
  updateTerrirories(players[4]);
});

playerSixTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerSixTerritories.value;
  players[5].territory = newPlayerTerritories;
  updateTerrirories(players[5]);
});

playerSevenTerritories.addEventListener('input', function () {
  let newPlayerTerritories = playerSevenTerritories.value;
  players[6].territory = newPlayerTerritories;
  updateTerrirories(players[6]);
});

//Update Player Resources

playerOneResources.addEventListener('input', function () {
  let newPlayerResources = playerOneResources.value;
  players[0].resources = newPlayerResources;
  updateResources(players[0]);
});

playerTwoResources.addEventListener('input', function () {
  let newPlayerResources = playerTwoResources.value;
  players[1].resources = newPlayerResources;
  updateResources(players[1]);
});

playerThreeResources.addEventListener('input', function () {
  let newPlayerResources = playerThreeResources.value;
  players[2].resources = newPlayerResources;
  updateResources(players[2]);
});

playerFourResources.addEventListener('input', function () {
  let newPlayerResources = playerFourResources.value;
  players[3].resources = newPlayerResources;
  updateResources(players[3]);
});

playerFiveResources.addEventListener('input', function () {
  let newPlayerResources = playerFiveResources.value;
  players[4].resources = newPlayerResources;
  updateResources(players[4]);
});

playerSixResources.addEventListener('input', function () {
  let newPlayerResources = playerSixResources.value;
  players[5].resources = newPlayerResources;
  updateResources(players[5]);
});

playerSevenResources.addEventListener('input', function () {
  let newPlayerResources = playerSevenResources.value;
  players[6].resources = newPlayerResources;
  updateResources(players[6]);
});

//Update Player Money

playerOneMoney.addEventListener('input', function() {
  let newPlayerMoney = playerOneMoney.value;
  players[0].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-1-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[0]);
});

playerTwoMoney.addEventListener('input', function() {
  let newPlayerMoney = playerTwoMoney.value;
  players[1].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-2-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[1]);
});

playerThreeMoney.addEventListener('input', function() {
  let newPlayerMoney = playerThreeMoney.value;
  players[2].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-3-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[2]);
});

playerFourMoney.addEventListener('input', function() {
  let newPlayerMoney = playerFourMoney.value;
  players[3].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-4-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[3]);
});

playerFiveMoney.addEventListener('input', function() {
  let newPlayerMoney = playerFiveMoney.value;
  players[4].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-5-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[4]);
});

playerSixMoney.addEventListener('input', function() {
  let newPlayerMoney = playerSixMoney.value;
  players[5].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-6-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[5]);
});

playerSevenMoney.addEventListener('input', function() {
  let newPlayerMoney = playerSevenMoney.value;
  players[6].money = newPlayerMoney;
  let playerMoneyScoreDiv = document.getElementById("player-7-money-score");
  playerMoneyScoreDiv.innerHTML = newPlayerMoney;
  calculateTotalScore(players[6]);
});

//Update Player Structure Bonus

playerOneStrucBonus.addEventListener('input', function() {
  let newPlayerStrucBonus = playerOneStrucBonus.value;
  players[0].structureBonusPoints = newPlayerStrucBonus;
  let playerStrucBonusDiv = document.getElementById("player-one-strucBonus-score");
  playerStrucBonusDiv.innerHTML = newPlayerStrucBonus;
});

};