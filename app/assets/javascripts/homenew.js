 
//Get stuff from the DOM

window.onload = function () {
  
  //Get non-player elements
  let addPlayerButton = document.getElementById("add-player-button");
  let startGameButton = document.getElementById("start-game-button");
  let structureBonusCard = document.getElementById("strucBonus-dropdown");
  let blankState = document.getElementById("blankstate");
  let invaders = false;
  let gameStarted = false;
  let structureBonus = "none";
  
//Get player elements  
  let playerStats = $(".game-started");
  let playerNames = $(".player-name");
  let playerSections = $(".player-section");
  let playerText = $(".player-text");
  let playerMatText = $(".player-mat");
  
//Get player one elements
  let playerOnePop = document.getElementById("player-1-pop");
  let playerOneStars = document.getElementById("player-1-stars");
  let playerOneTerritories = document.getElementById("player-1-territory");
  let playerOneResources = document.getElementById("player-1-resources");
  let playerOneMoney = document.getElementById("player-1-money");
  let playerOneStrucBonus = document.getElementById("player-1-strucBonus");
  let playerOneFactionImage = document.getElementById('player-1-faction-image');
  
//Get player two elements
  let playerTwoPop = document.getElementById("player-2-pop");
  let playerTwoStars = document.getElementById("player-2-stars");
  let playerTwoTerritories = document.getElementById("player-2-territory");
  let playerTwoResources = document.getElementById("player-2-resources");
  let playerTwoMoney = document.getElementById("player-2-money");
  let playerTwoStrucBonus = document.getElementById("player-2-strucBonus");
  let playerTwoFactionImage = document.getElementById('player-2-faction-image');
  
//Get player three elements
  let playerThreePop = document.getElementById("player-3-pop");
  let playerThreeStars = document.getElementById("player-3-stars");
  let playerThreeTerritories = document.getElementById("player-3-territory");
  let playerThreeResources = document.getElementById("player-3-resources");
  let playerThreeMoney = document.getElementById("player-3-money");
  let playerThreeStrucBonus = document.getElementById("player-3-strucBonus");
  let playerThreeFactionImage = document.getElementById('player-3-faction-image');
  
//Get player four elements
  let playerFourPop = document.getElementById("player-4-pop");
  let playerFourStars = document.getElementById("player-4-stars");
  let playerFourTerritories = document.getElementById("player-4-territory");
  let playerFourResources = document.getElementById("player-4-resources");
  let playerFourMoney = document.getElementById("player-4-money");
  let playerFourStrucBonus = document.getElementById("player-4-strucBonus");
  let playerFourFactionImage = document.getElementById('player-4-faction-image');
  
//Get player five elements
  let playerFivePop = document.getElementById("player-5-pop");
  let playerFiveStars = document.getElementById("player-5-stars");
  let playerFiveTerritories = document.getElementById("player-5-territory");
  let playerFiveResources = document.getElementById("player-5-resources");
  let playerFiveMoney = document.getElementById("player-5-money");
  let playerFiveStrucBonus = document.getElementById("player-5-strucBonus");
  let playerFiveFactionImage = document.getElementById('player-5-faction-image');
  
//Get player six elements
  let playerSixPop = document.getElementById("player-6-pop");
  let playerSixStars = document.getElementById("player-6-stars");
  let playerSixTerritories = document.getElementById("player-6-territory");
  let playerSixResources = document.getElementById("player-6-resources");
  let playerSixMoney = document.getElementById("player-6-money");
  let playerSixStrucBonus = document.getElementById("player-6-strucBonus");
  let playerSixFactionImage = document.getElementById('player-6-faction-image');
  
//Get player seven elements
  let playerSevenPop = document.getElementById("player-7-pop");
  let playerSevenStars = document.getElementById("player-7-stars");
  let playerSevenTerritories = document.getElementById("player-7-territory");
  let playerSevenResources = document.getElementById("player-7-resources");
  let playerSevenMoney = document.getElementById("player-7-money");
  let playerSevenStrucBonus = document.getElementById("player-7-strucBonus");
  let playerSevenFactionImage = document.getElementById('player-7-faction-image');

//Set arrays
let factions = ["Nordic", "Saxony", "Polania", "Crimea", "Rusviet"];
let playerMats = ["Mechanical", "Patriotic", "Agricultural", "Industrial", "Engineering"];
if (invaders) {
  factions.push("Albion", "Togawa");
  playerMats.push("Militant", "Innovative");
}
randomizeArray(factions);
randomizeArray(playerMats);
let players = [];

//Set functions
function addPlayer(){
  //let personName = prompt("Please enter your name", "Name Here");
  let newPlayer = {
    //name: personName,
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

function updateStructureBonus(player, structureBonus, numberOfStructures) {
  player.structureBonusPoints = numberOfStructures;
  switch (structureBonus) {
    case "none":
      alert("Please select a structure bonus.");
      break;
    case "Tunnels Adjacent":
      if (player.structureBonusPoints === "0") {
        var structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2" || player.structureBonusPoints === "3") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "4" || player.structureBonusPoints === "5") {
        structureBonusScore = 6;
      } else if (player.structureBonusPoints === "6") {
        structureBonusScore = 9;
      }
      break;
    case "Lakes":
      if (player.structureBonusPoints === "0") {
        structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2" || player.structureBonusPoints === "3") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "4" || player.structureBonusPoints === "5") {
        structureBonusScore = 6;
      } else if (player.structureBonusPoints === "6" || player.structureBonusPoints === "7") {
        structureBonusScore = 9;
      }
      break;
    case "Encounters":
      if (player.structureBonusPoints === "0") {
        structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2" || player.structureBonusPoints === "3") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "4" || player.structureBonusPoints === "5") {
        structureBonusScore = 6;
      } else if (player.structureBonusPoints === "6" || player.structureBonusPoints === "7") {
        structureBonusScore = 9;
      }
      break;
    case "Structure on Tunnel":
      if (player.structureBonusPoints === "0") {
        structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "3" || player.structureBonusPoints === "4") {
        structureBonusScore = 6;
      } 
      break;
    case "Structures in a Row":
      if (player.structureBonusPoints === "0") {
        structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "3") {
        structureBonusScore = 6;
      } else if (player.structureBonusPoints === "4") {
        structureBonusScore = 9;
      }
      break;
    case "Structures on Farms or Tundra":
      if (player.structureBonusPoints === "0") {
        structureBonusScore = 0;
      } else if (player.structureBonusPoints === "1") {
        structureBonusScore = 2;
      } else if (player.structureBonusPoints === "2") {
        structureBonusScore = 4;
      } else if (player.structureBonusPoints === "3") {
        structureBonusScore = 6;
      } else if (player.structureBonusPoints === "4") {
        structureBonusScore = 9;
      }
      break;
  }
  let playerStrucBonusDiv = document.getElementById("player-" + player.playerNumber + "-strucBonus-score");
  playerStrucBonusDiv.innerHTML = structureBonusScore;
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
structureBonusCard.addEventListener('change', function() {
  structureBonus = structureBonusCard.value;
  switch (structureBonusCard.value) {
    case "Tunnels Adjacent":
      playerOneStrucBonus.max = "6";
      playerTwoStrucBonus.max = "6";
      playerThreeStrucBonus.max = "6";
      playerFourStrucBonus.max = "6";
      playerFiveStrucBonus.max = "6";
      playerSixStrucBonus.max = "6";
      playerSevenStrucBonus.max = "6";
      break;
    case "Lakes":
       playerOneStrucBonus.max = "7";
       playerTwoStrucBonus.max = "7";
       playerThreeStrucBonus.max = "7";
       playerFourStrucBonus.max = "7";
       playerFiveStrucBonus.max = "7";
       playerSixStrucBonus.max = "7";
       playerSevenStrucBonus.max = "7";
      break;
    case "Encounters":
       playerOneStrucBonus.max = "7";
       playerTwoStrucBonus.max = "7";
       playerThreeStrucBonus.max = "7";
       playerFourStrucBonus.max = "7";
       playerFiveStrucBonus.max = "7";
       playerSixStrucBonus.max = "7";
       playerSevenStrucBonus.max = "7";
      break;
    case "Structure on Tunnel":
       playerOneStrucBonus.max = "4";
       playerTwoStrucBonus.max = "4";
       playerThreeStrucBonus.max = "4";
       playerFourStrucBonus.max = "4";
       playerFiveStrucBonus.max = "4";
       playerSixStrucBonus.max = "4";
       playerSevenStrucBonus.max = "4";
      break;
    case "Structures in a Row":
       playerOneStrucBonus.max = "4";
       playerTwoStrucBonus.max = "4";
       playerThreeStrucBonus.max = "4";
       playerFourStrucBonus.max = "4";
       playerFiveStrucBonus.max = "4";
       playerSixStrucBonus.max = "4";
       playerSevenStrucBonus.max = "4";
      break;
    case "Structures on Farms or Tundra":
       playerOneStrucBonus.max = "4";
       playerTwoStrucBonus.max = "4";
       playerThreeStrucBonus.max = "4";
       playerFourStrucBonus.max = "4";
       playerFiveStrucBonus.max = "4";
       playerSixStrucBonus.max = "4";
       playerSevenStrucBonus.max = "4";
      break;
  }
});

addPlayerButton.addEventListener('click', function() {
  switch (players.length + 1) {
    case 1:
      addPlayer();
      //playerNames[0].innerHTML = players[0].name;
      blankState.style.display = "none";
      playerOneFactionImage.src = "assets/icons/" + players[0].faction.toLowerCase() + "_icon.png"; 
      playerText[0].innerText = "Faction: " + players[0].faction;
      playerMatText[0].innerText = "Player mat: " + players[0].mat;
      playerSections[0].style.display = "block";
      break;
    case 2:
      addPlayer();
      //playerNames[1].innerHTML = players[1].name;
      playerTwoFactionImage.src = "assets/icons/" + players[1].faction.toLowerCase() + "_icon.png";
      playerText[1].innerText = "Faction: " + players[1].faction;
      playerMatText[1].innerText = "Player mat: " + players[1].mat;
      playerSections[1].style.display = "block";
      startGameButton.style.display = "inline";
      break;
    case 3:
      addPlayer();
      //playerNames[2].innerHTML = players[2].name;
      playerThreeFactionImage.src = "assets/icons/" + players[2].faction.toLowerCase() + "_icon.png"; 
      playerText[2].innerText = "Faction: " + players[2].faction;
      playerMatText[2].innerText = "Player mat: " + players[2].mat;
      playerSections[2].style.display = "block";
      break;
    case 4:
      addPlayer();
      //playerNames[3].innerHTML = players[3].name;
      playerFourFactionImage.src = "assets/icons/" + players[3].faction.toLowerCase() + "_icon.png"; 
      playerText[3].innerText = "Faction: " + players[3].faction;
      playerMatText[3].innerText = "Player mat: " + players[3].mat;
      playerSections[3].style.display = "block";
      break;
    case 5:
      addPlayer();
      //playerNames[4].innerHTML = players[4].name;
      playerFiveFactionImage.src = "assets/icons/" + players[4].faction.toLowerCase() + "_icon.png"; 
      playerText[4].innerText = "Faction: " + players[4].faction;
      playerMatText[4].innerText = "Player mat: " + players[4].mat;
      playerSections[4].style.display = "block";
      addPlayerButton.style.display = 'none';
      break;
  }
});

startGameButton.addEventListener('click', function() {
  gameStarted = true;
  for (var i = 0; i < playerStats.length; i++) {
    playerStats[i].style.display = "block";
  }
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
  let newPlayerStars = document.getElementById('player-1-stars').value;
  players[0].stars = newPlayerStars;
  updateStars(players[0]);
});

playerTwoStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-2-stars').value;
  players[1].stars = newPlayerStars;
  updateStars(players[1]);
});

playerThreeStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-3-stars').value;
  players[2].stars = newPlayerStars;
  updateStars(players[2]);
});

playerFourStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-4-stars').value;
  players[3].stars = newPlayerStars;
  updateStars(players[3]);
});

playerFiveStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-5-stars').value;
  players[4].stars = newPlayerStars;
  updateStars(players[4]);
});

playerSixStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-6-stars').value;
  players[5].stars = newPlayerStars;
  updateStars(players[5]);
});

playerSevenStars.addEventListener('input', function() {
  let newPlayerStars = document.getElementById('player-7-stars').value;
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
  let numberOfStructures = playerOneStrucBonus.value; 
  updateStructureBonus(players[0], structureBonus, numberOfStructures);
});

playerTwoStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerTwoStrucBonus.value; 
  updateStructureBonus(players[1], structureBonus, numberOfStructures);
});

playerThreeStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerThreeStrucBonus.value; 
  updateStructureBonus(players[2], structureBonus, numberOfStructures);
});

playerFourStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerFourStrucBonus.value; 
  updateStructureBonus(players[3], structureBonus, numberOfStructures);
});

playerFiveStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerFiveStrucBonus.value; 
  updateStructureBonus(players[4], structureBonus, numberOfStructures);
});

playerSixStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerSixStrucBonus.value; 
  updateStructureBonus(players[5], structureBonus, numberOfStructures);
});

playerSevenStrucBonus.addEventListener('input', function() {
  let numberOfStructures = playerSevenStrucBonus.value; 
  updateStructureBonus(players[6], structureBonus, numberOfStructures);
});

};