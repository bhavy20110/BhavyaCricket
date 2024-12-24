// Game logic variables
let selectedBattingOrder = [];
let selectedBowlingOrder = [];
let squad = [
    "Player 1", "Player 2", "Player 3", "Player 4", "Player 5",
    "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11"
];
let runs = 0;
let ballDirection = ["left", "right", "straight"];
// Teams and Squads for all tournaments
const squads = {
  ipl: {
    "Mumbai Indians": ["Rohit Sharma", "Ishan Kishan", "Suryakumar Yadav", "Cameron Green", "Tilak Varma", "Tim David", "Jofra Archer"],
    "Chennai Super Kings": ["MS Dhoni", "Ruturaj Gaikwad", "Devon Conway", "Ravindra Jadeja", "Deepak Chahar"],
    "Gujarat Titans": ["Shubman Gill", "Hardik Pandya", "Mohammed Shami", "Rashid Khan"],
    "Lucknow Super Giants": ["KL Rahul", "Nicholas Pooran", "Avesh Khan", "Ravi Bishnoi"],
    // Add remaining IPL teams and squads...
  },
  t20wc: {
    India: ["Rohit Sharma", "Shubman Gill", "Virat Kohli", "Hardik Pandya", "Ravindra Jadeja", "Jasprit Bumrah", "Mohammed Siraj"],
    Australia: ["David Warner", "Steve Smith", "Mitchell Marsh", "Pat Cummins", "Josh Hazlewood"],
    // Add remaining T20 WC teams...
  },
  odiwc: {
    India: ["Rohit Sharma", "Virat Kohli", "Shubman Gill", "KL Rahul", "Hardik Pandya", "Jasprit Bumrah"],
    England: ["Joe Root", "Ben Stokes", "Jos Buttler", "Jofra Archer", "Jonny Bairstow"],
    // Add remaining ODI WC teams...
  },
  wtc: {
    India: ["Rohit Sharma", "Shubman Gill", "Cheteshwar Pujara", "Virat Kohli", "Ravindra Jadeja", "Jasprit Bumrah"],
    Australia: ["Usman Khawaja", "Steve Smith", "Marnus Labuschagne", "Pat Cummins", "Nathan Lyon"],
    // Add remaining WTC teams...
  },
};

// Game State
let selectedTournament = "";
let selectedTeams = { team1: "", team2: "" };
let matchInProgress = false;

// Populate Teams
function populateTeams(tournament) {
  const teams = Object.keys(squads[tournament]);
  const team1Select = document.getElementById("team1");
  const team2Select = document.getElementById("team2");

  team1Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
  team2Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
}

// Start Game
document.getElementById("start-game").addEventListener("click", () => {
  selectedTournament = document.getElementById("tournament").value;
  populateTeams(selectedTournament);
  document.getElementById("tournament-selection").style.display = "none";
  document.getElementById("team-selection").style.display = "block";
});

// Start Match
document.getElementById("start-match").addEventListener("click", () => {
  selectedTeams.team1 = document.getElementById("team1").value;
  selectedTeams.team2 = document.getElementById("team2").value;
  document.getElementById("team-selection").style.display = "none";
  document.getElementById("match-content").style.display = "block";
  document.getElementById("match-heading").innerText = `${selectedTeams.team1} vs ${selectedTeams.team2}`;
  startMatch();
});

// Match Logic
function startMatch() {
  // Reset match state and UI
  const scoreboard = document.getElementById("scoreboard");
  const commentaryBox = document.getElementById("commentary-box");
  scoreboard.innerHTML = "<p>Match Started!</p>";
  commentaryBox.innerHTML = "<p>Welcome to the match!</p>";

  matchInProgress = true;
  // Implement batting, bowling, fielding logic here
}

// Add more features like score updates, commentary, batting/bowling/fielding actions...
// Start toss function
document.getElementById("startTossBtn").addEventListener("click", simulateToss);

function simulateToss() {
    let tossOutcome = Math.random() > 0.5 ? "Heads" : "Tails";
    alert(`Toss result: ${tossOutcome}`);
    
    let playerChoice = prompt("You won the toss! Do you want to Bat or Bowl first? (Enter 'bat' or 'bowl')");
    let aiChoice = Math.random() > 0.5 ? "bat" : "bowl";
    
    alert(`You chose to ${playerChoice}, and the AI chose to ${aiChoice}.`);
    startMatch(playerChoice, aiChoice);
}

function startMatch(playerChoice, aiChoice) {
    console.log(`Match Started! Player chose to ${playerChoice}, AI chose to ${aiChoice}`);
}

// Player selection function
function selectPlayers() {
    selectedBattingOrder = [];
    selectedBowlingOrder = [];
    
    for (let i = 0; i < 11; i++) {
        let playerChoice = prompt(`Select player ${i + 1} for your team (from squad)`);
        selectedBattingOrder.push(playerChoice);
        if (i < 6) selectedBowlingOrder.push(playerChoice);  // First 6 players can bowl
    }
    
    console.log("Batting Order:", selectedBattingOrder);
    console.log("Bowling Order:", selectedBowlingOrder);
    updateScorecard();
}

function updateScorecard() {
    document.getElementById("scorecard").innerHTML = `
        <p>Batter: ${selectedBattingOrder[0]}</p>
        <p>Batter 2: ${selectedBattingOrder[1]}</p>
        <p>Bowler: ${selectedBowlingOrder[0]}</p>
        <p>Runs: ${runs}</p>
    `;
}

// Fielding actions
function simulateFieldingAction(fielder) {
    let outcome = Math.random() > 0.5 ? "successful" : "failed";
    let direction = ballDirection[Math.floor(Math.random() * ballDirection.length)];
    
    alert(`${fielder} attempted a field in direction: ${direction}, and it was ${outcome}`);
    
    if (outcome === "failed") {
        updateMatchStatus("run");
    } else {
        updateMatchStatus("fielded");
    }
}

function updateMatchStatus(action) {
    let statusMessage = action === "run" ? "The ball went for a run!" : "The ball was successfully fielded!";
    document.getElementById("matchStatus").innerHTML = statusMessage;
}

// Fielding buttons event listeners
document.querySelectorAll("#fielders button").forEach(button => {
    button.addEventListener("click", () => simulateFieldingAction(button.id));
});

// Additional Functions (for realistic gameplay)

// Simulate batter and bowler switching
function switchBatterAndBowler() {
    let currentBatter = selectedBattingOrder.shift();  // remove the first batter
    selectedBattingOrder.push(currentBatter);  // move him to the end of the line-up
    let currentBowler = selectedBowlingOrder.shift();  // remove the bowler
    selectedBowlingOrder.push(currentBowler);  // add him back to the bowling line-up
    updateScorecard();
    alert("Batter and Bowler switched!");
}

// Update the scorecard with each ball
function ballOutcome(runsScored, ballType) {
    runs += runsScored;
    updateScorecard();
    alert(`${runsScored} runs scored, Ball type: ${ballType}`);
}
// Save game progress
function saveProgress() {
    localStorage.setItem("gameState", JSON.stringify(gameState));
}

// Load game progress
function loadProgress() {
    let savedState = localStorage.getItem("gameState");
    if (savedState) {
        gameState = JSON.parse(savedState);
        // Load the game state into the game
    }
    // Example functions to trigger commentary on various events:

function hitBoundary() {
    const commentaryText = "शुभमन गिल ने चौका मारा!";
    playCommentary(commentaryText);  // Play commentary
    displayCommentary(commentaryText);  // Display commentary text
}

function takeWicket() {
    const commentaryText = "विकेट! बल्लेबाज़ आउट हो गए!";
    playCommentary(commentaryText);
    displayCommentary(commentaryText);
}

function hitSix() {
    const commentaryText = "क्या शॉट है! एक शानदार छक्का!";
    playCommentary(commentaryText);
    displayCommentary(commentaryText);
}

function goodShot() {
    const commentaryText = "बेहतरीन शॉट! बल्लेबाज ने शानदार खेल दिखाया!";
    playCommentary(commentaryText);
    displayCommentary(commentaryText);
}
    function renderCrowd() {
  const crowd = document.getElementById("crowd");
  const team1Supporters = Math.floor(Math.random() * 50) + 25; // 25% to 75% range
  const team2Supporters = 100 - team1Supporters;

  crowd.innerHTML = ""; // Clear the crowd
  for (let i = 0; i < team1Supporters; i++) {
    const fan = document.createElement("div");
    fan.classList.add("fan", "supporting-team1");
    crowd.appendChild(fan);
  }
  for (let i = 0; i < team2Supporters; i++) {
    const fan = document.createElement("div");
    fan.classList.add("fan", "supporting-team2");
    crowd.appendChild(fan);
  }

  document.getElementById("fan-support-levels").innerText = 
    `${team1Supporters}% ${selectedTeams.team1} vs ${team2Supporters}% ${selectedTeams.team2}`;
}

function updateCrowdReactions(event) {
  const commentaryBox = document.getElementById("commentary-box");
  const reaction = document.createElement("p");

  if (event === "boundary") {
    reaction.innerText = `${selectedTeams.team1} fans erupt in cheers for that boundary!`;
  } else if (event === "wicket") {
    reaction.innerText = `${selectedTeams.team2} fans are over the moon with that wicket!`;
  } else if (event === "tense") {
    reaction.innerText = `The stadium is electric, fans from both sides are on edge!`;
  } else {
    reaction.innerText = `The fans are enjoying the game!`;
  }

  commentaryBox.appendChild(reaction);
  commentaryBox.scrollTop = commentaryBox.scrollHeight; // Auto-scroll to the latest reaction
}

// Call renderCrowd when the match starts
document.getElementById("start-match").addEventListener("click", () => {
  renderCrowd();
});

// Update crowd reactions based on events
document.getElementById("bat").addEventListener("click", () => updateCrowdReactions("boundary"));
document.getElementById("bowl").addEventListener("click", () => updateCrowdReactions("wicket"));
}
