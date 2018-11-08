 
//Get stuff from the DOM

window.onload = function () {
  
  //Get non-player elements
  var addPlayerButton = document.getElementById("add-player-button");
  var startGameButton = document.getElementById("start-game-button");
  var structureBonusCard = document.getElementById("strucBonus-dropdown");
  var invadersDropdown = document.getElementById("invaders-dropdown");
  var blankState = document.getElementById("blankstate");
  var invaders = false;
  var gameStarted = false;
  var structureBonus = "none";
  
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
randomizeArray(factions);
randomizeArray(playerMats);
let players = (resetPlayers());

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

function resetPlayers() {
    let players = [];
    return players;
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

function resetGame(players) {
  for (var i=0; i < playerSections.length; i++) {
    playerSections[i].style.display = "none";
  }
  blankState.style.display = "block";
  location.reload(true);
}

//Button event listeners

invadersDropdown.addEventListener('change', function() {
  if (invadersDropdown.value == "Yes") {
    invaders = true;
    factions.push("Albion", "Togawa");
    playerMats.push("Militant", "Innovative");
    randomizeArray(factions);
    randomizeArray(playerMats);
  } else {
    let reset = confirm("This will reset the game. Continue?");
    if (reset == true) {
      invaders = false;
      let albionIndex = factions.indexOf('Albion');
      factions.splice(albionIndex, 1);
      let togawaIndex = factions.indexOf('Togawa');
      factions.splice(togawaIndex, 1);
      resetGame(players);
    }
  }
});

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
      if (invaders == false) {
        addPlayerButton.style.display = 'none';
      }
      break;
    case 6:
      addPlayer();
      //playerNames[5].innerHTML = players[4].name;
      playerFactionImage[5].src = "assets/icons/" + players[5].faction.toLowerCase() + "_icon.png"; 
      playerText[5].innerText = "Faction: " + players[5].faction;
      playerMatText[5].innerText = "Player mat: " + players[5].mat;
      playerSections[5].style.display = "block";
      break;
    case 7:
      addPlayer();
      //playerNames[6].innerHTML = players[4].name;
      playerFactionImage[6].src = "assets/icons/" + players[6].faction.toLowerCase() + "_icon.png"; 
      playerText[6].innerText = "Faction: " + players[6].faction;
      playerMatText[6].innerText = "Player mat: " + players[6].mat;
      playerSections[6].style.display = "block";
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

// Player Popularity Event Listeners

for ( let i=0; i < playerPopularity.length; i++) {
  playerPopularity[i].addEventListener('input', function() {
    updatePopularity(players[i]);
  });
}

// Player Stars Event Listeners

for ( let i=0; i < playerStars.length; i++) {
  playerStars[i].addEventListener('input', function() {
    players[i].stars = playerStars[i].value;
    updateStars(players[i]);
  });
}

// Player Territory Event Listeners

for ( let i=0; i < playerTerritories.length; i++) {
  playerTerritories[i].addEventListener('input', function() {
    players[i].territory = playerTerritories[i].value;
    updateTerrirories(players[i]);
  });
}

// Player Resources Event Listeners

for ( let i=0; i < playerResources.length; i++) {
  playerResources[i].addEventListener('input', function() {
    players[i].resources = playerResources[i].value;
    updateResources(players[i]);
  });
}

// Player Money Event Listeners

for ( let i=0; i < playerMoney.length; i++) {
  playerMoney[i].addEventListener('input', function() {
    players[i].money = playerMoney[i].value;
    let playerMoneyScoreDiv = document.getElementById("player-" + (i +1) + "-money-score");
    playerMoneyScoreDiv.innerHTML = playerMoney[i].value;
    calculateTotalScore(players[i]);
  });
}

// Player Structure Bonus Event Listeners

for ( let i=0; i < playerStrucBonus.length; i++) {
  playerStrucBonus[i].addEventListener('input', function() {
    let numberOfStructures = playerStrucBonus[i].value;
    updateStructureBonus(players[i], structureBonus, numberOfStructures);
  });
}

};