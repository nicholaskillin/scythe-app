 
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
  let playerPopularity = $(".player-popularity");
  let playerStars = $(".player-stars");
  let playerTerritories = $(".player-territory");
  let playerResources = $(".player-resources");
  let playerMoney = $(".player-money");
  let playerStrucBonus = $(".player-structure-bonus");
  let playerFactionImage = $(".faction-icon");

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
  let newPlayerPop = playerPopularity[players.indexOf(player)].value;
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
      for (var i=0; i < playerStrucBonus.length; i++) {
        playerStrucBonus[i].max = "6";
      }
      break;
    case "Lakes":
      for (var i=0; i < playerStrucBonus.length; i++) {
       playerStrucBonus[i].max = "7";
      }
      break;
    case "Encounters":
      for (var i=0; i < playerStrucBonus.length; i++) {
       playerStrucBonus[i].max = "7";
      }
      break;
    case "Structure on Tunnel":
      for (var i=0; i < playerStrucBonus.length; i++) {
       playerStrucBonus[i].max = "4";
      }
      break;
    case "Structures in a Row":
      for (var i=0; i < playerStrucBonus.length; i++) {
       playerStrucBonus[i].max = "4";
      }
      break;
    case "Structures on Farms or Tundra":
      for (var i=0; i < playerStrucBonus.length; i++) {
       playerStrucBonus[i].max = "4";
      }
      break;
  }
});

addPlayerButton.addEventListener('click', function() {
  switch (players.length + 1) {
    case 1:
      addPlayer();
      //playerNames[0].innerHTML = players[0].name;
      blankState.style.display = "none";
      playerFactionImage[0].src = "assets/icons/" + players[0].faction.toLowerCase() + "_icon.png"; 
      playerText[0].innerText = "Faction: " + players[0].faction;
      playerMatText[0].innerText = "Player mat: " + players[0].mat;
      playerSections[0].style.display = "block";
      break;
    case 2:
      addPlayer();
      //playerNames[1].innerHTML = players[1].name;
      playerFactionImage[1].src = "assets/icons/" + players[1].faction.toLowerCase() + "_icon.png";
      playerText[1].innerText = "Faction: " + players[1].faction;
      playerMatText[1].innerText = "Player mat: " + players[1].mat;
      playerSections[1].style.display = "block";
      startGameButton.style.display = "inline";
      break;
    case 3:
      addPlayer();
      //playerNames[2].innerHTML = players[2].name;
      playerFactionImage[2].src = "assets/icons/" + players[2].faction.toLowerCase() + "_icon.png"; 
      playerText[2].innerText = "Faction: " + players[2].faction;
      playerMatText[2].innerText = "Player mat: " + players[2].mat;
      playerSections[2].style.display = "block";
      break;
    case 4:
      addPlayer();
      //playerNames[3].innerHTML = players[3].name;
      playerFactionImage[3].src = "assets/icons/" + players[3].faction.toLowerCase() + "_icon.png"; 
      playerText[3].innerText = "Faction: " + players[3].faction;
      playerMatText[3].innerText = "Player mat: " + players[3].mat;
      playerSections[3].style.display = "block";
      break;
    case 5:
      addPlayer();
      //playerNames[4].innerHTML = players[4].name;
      playerFactionImage[4].src = "assets/icons/" + players[4].faction.toLowerCase() + "_icon.png"; 
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

playerPopularity[0].addEventListener('input', function() {
  updatePopularity(players[0]);
});

playerPopularity[1].addEventListener('input', function() {
  updatePopularity(players[1]);
});

playerPopularity[2].addEventListener('input', function() {
  updatePopularity(players[2]);
});

playerPopularity[3].addEventListener('input', function() {
  updatePopularity(players[3]);
});

playerPopularity[4].addEventListener('input', function() {
  updatePopularity(players[4]);
});

playerPopularity[5].addEventListener('input', function() {
  updatePopularity(players[5]);
});

playerPopularity[6].addEventListener('input', function() {
  updatePopularity(players[6]);
});

// Update Player Stars

playerStars[0].addEventListener('input', function() {
  players[0].stars = playerStars[0].value;
  updateStars(players[0]);
});

playerStars[1].addEventListener('input', function() {
  players[1].stars = playerStars[1].value;
  updateStars(players[1]);
});

playerStars[2].addEventListener('input', function() {
  players[2].stars = playerStars[2].value;
  updateStars(players[2]);
});

playerStars[3].addEventListener('input', function() {
  players[3].stars = playerStars[3].value;
  updateStars(players[3]);
});

playerStars[4].addEventListener('input', function() {
  players[4].stars = playerStars[4].value;
  updateStars(players[4]);
});

playerStars[5].addEventListener('input', function() {
  players[5].stars = playerStars[5].value;
  updateStars(players[5]);
});

playerStars[6].addEventListener('input', function() {
  players[6].stars = playerStars[6].value;
  updateStars(players[6]);
});

//Update Player Territory

playerTerritories[0].addEventListener('input', function () {
  players[0].territory = playerTerritories[0].value;
  updateTerrirories(players[0]);
});

playerTerritories[1].addEventListener('input', function () {
  players[1].territory = playerTerritories[1].value;
  updateTerrirories(players[1]);
});

playerTerritories[2].addEventListener('input', function () {
  players[2].territory = playerTerritories[2].value;
  updateTerrirories(players[2]);
});

playerTerritories[3].addEventListener('input', function () {
  players[3].territory = playerTerritories[3].value;
  updateTerrirories(players[3]);
});

playerTerritories[4].addEventListener('input', function () {
  players[4].territory = playerTerritories[4].value;
  updateTerrirories(players[4]);
});

playerTerritories[5].addEventListener('input', function () {
  players[5].territory = playerTerritories[5].value;
  updateTerrirories(players[5]);
});

playerTerritories[6].addEventListener('input', function () {
  players[6].territory = playerTerritories[6].value;
  updateTerrirories(players[6]);
});

//Update Player Resources

playerResources[0].addEventListener('input', function () {
  players[0].resources = playerResources[0].value;
  updateResources(players[0]);
});

playerResources[1].addEventListener('input', function () {
  players[1].resources = playerResources[1].value;
  updateResources(players[1]);
});

playerResources[2].addEventListener('input', function () {
  players[2].resources = playerResources[2].value;
  updateResources(players[2]);
});

playerResources[3].addEventListener('input', function () {
  players[3].resources = playerResources[3].value;
  updateResources(players[3]);
});

playerResources[4].addEventListener('input', function () {
  players[4].resources = playerResources[4].value;
  updateResources(players[4]);
});

playerResources[5].addEventListener('input', function () {
  players[5].resources = playerResources[5].value;
  updateResources(players[5]);
});

playerResources[6].addEventListener('input', function () {
  players[6].resources = playerResources[6].value;
  updateResources(players[6]);
});

//Update Player Money

playerMoney[0].addEventListener('input', function() {
  players[0].money = playerMoney[0].value;
  let playerMoneyScoreDiv = document.getElementById("player-1-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[0].value;
  calculateTotalScore(players[0]);
});

playerMoney[1].addEventListener('input', function() {
  players[1].money = playerMoney[1].value;
  let playerMoneyScoreDiv = document.getElementById("player-2-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[1].value;
  calculateTotalScore(players[1]);
});

playerMoney[2].addEventListener('input', function() {
  players[2].money = playerMoney[2].value;
  let playerMoneyScoreDiv = document.getElementById("player-3-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[2].value;
  calculateTotalScore(players[2]);
});

playerMoney[3].addEventListener('input', function() {
  players[3].money = playerMoney[3].value;
  let playerMoneyScoreDiv = document.getElementById("player-4-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[3].value;
  calculateTotalScore(players[3]);
});

playerMoney[4].addEventListener('input', function() {
  players[4].money = playerMoney[4].value;
  let playerMoneyScoreDiv = document.getElementById("player-5-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[4].value;
  calculateTotalScore(players[4]);
});

playerMoney[5].addEventListener('input', function() {
  players[5].money = playerMoney[5].value;
  let playerMoneyScoreDiv = document.getElementById("player-6-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[5].value;
  calculateTotalScore(players[5]);
});

playerMoney[6].addEventListener('input', function() {
  players[6].money = playerMoney[6].value;
  let playerMoneyScoreDiv = document.getElementById("player-7-money-score");
  playerMoneyScoreDiv.innerHTML = playerMoney[6].value;
  calculateTotalScore(players[6]);
});

//Update Player Structure Bonus

playerStrucBonus[0].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[0].value; 
  updateStructureBonus(players[0], structureBonus, numberOfStructures);
});

playerStrucBonus[1].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[1].value; 
  updateStructureBonus(players[1], structureBonus, numberOfStructures);
});

playerStrucBonus[2].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[2].value; 
  updateStructureBonus(players[2], structureBonus, numberOfStructures);
});

playerStrucBonus[3].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[3].value; 
  updateStructureBonus(players[3], structureBonus, numberOfStructures);
});

playerStrucBonus[4].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[4].value; 
  updateStructureBonus(players[4], structureBonus, numberOfStructures);
});

playerStrucBonus[5].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[5].value; 
  updateStructureBonus(players[5], structureBonus, numberOfStructures);
});

playerStrucBonus[6].addEventListener('input', function() {
  let numberOfStructures = playerStrucBonus[6].value; 
  updateStructureBonus(players[6], structureBonus, numberOfStructures);
});

};