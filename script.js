// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select the start game button
    const startButton = document.getElementById("startGame");

    // Select team and player stats elements
    const teamSelect = document.getElementById("teamSelection");
    const matchStatus = document.getElementById("matchStatus");
    const playerName = document.getElementById("playerName");
    const playerScore = document.getElementById("playerScore");

    // Example initial values
    let currentTeam = "";
    let currentPlayer = "Shubman Gill";
    let currentScore = 0;

    // Start game logic when the button is clicked
    startButton.addEventListener("click", function() {
        currentTeam = teamSelect.value; // Get selected team
        matchStatus.innerHTML = `Match Started: ${currentTeam} vs Team 2`;

        // Simulate some gameplay (this can be extended with more game logic)
        startGameSimulation();
    });

    // Function to simulate a simple match (this can be extended)
    function startGameSimulation() {
        // Example: Random score for the player
        currentScore = Math.floor(Math.random() * 100); // Simulate a score (random)

        // Update the player stats
        playerName.innerHTML = `Player: ${currentPlayer}`;
        playerScore.innerHTML = `Score: ${currentScore}`;

        // Update match status
        matchStatus.innerHTML = `${currentPlayer} is batting. Score: ${currentScore}`;
    }

    // Additional functions can go here (e.g., player actions, overs, etc.)
    // Adding event listeners for batting actions
document.getElementById("frontFoot").addEventListener("click", function() {
    simulateBattingAction("Front Foot");
});
document.getElementById("backFoot").addEventListener("click", function() {
    simulateBattingAction("Back Foot");
});

// Function to simulate batting action
function simulateBattingAction(action) {
    const shotOutcome = Math.random() > 0.5 ? "Hit for 4!" : "Missed!";
    alert(`${action} shot: ${shotOutcome}`);
}
    // Adding event listeners for bowling actions
document.getElementById("fastDelivery").addEventListener("click", function() {
    simulateBowlingAction("Fast Delivery");
});
document.getElementById("spinDelivery").addEventListener("click", function() {
    simulateBowlingAction("Spin Delivery");
});

// Function to simulate bowling action
function simulateBowlingAction(delivery) {
    const outcome = Math.random() > 0.5 ? "Bowled a perfect delivery!" : "Wide ball!";
    alert(`${delivery}: ${outcome}`);
}
    // Adding event listeners for fielding actions
document.getElementById("fielderCatch").addEventListener("click", function() {
    simulateFieldingAction();
});

// Function to simulate fielding action
function simulateFieldingAction() {
    const outcome = Math.random() > 0.5 ? "Catch taken!" : "Ball missed!";
    alert(`Fielding Outcome: ${outcome}`);
}
    let runs = 0;
let wickets = 0;
let overs = 0;
let currentBatter = "Shubman Gill";

function startNewOver() {
    runs = 0;
    wickets = 0;
    overs++;
    updateMatchStatus();
}

function updateMatchStatus() {
    document.getElementById("matchStatus").innerHTML = `${currentBatter} is batting. Runs: ${runs}, Wickets: ${wickets}, Overs: ${overs}`;
}

function addRuns(run) {
    runs += run;
    updateMatchStatus();
}

function wicketFallen() {
    wickets++;
    currentBatter = "New Batsman"; // Replace with real batter name
    updateMatchStatus();
}
    // Update Points Table based on match outcome
function updatePointsTable(team, result) {
    const pointsRow = document.getElementById(`${team}Stats`);
    let points = pointsRow.cells[4].innerText;

    if (result === "win") {
        points = parseInt(points) + 2;  // 2 points for a win
    }

    pointsRow.cells[4].innerText = points;
}
    let playerStats = {
    "Shubman Gill": { runs: 0, wickets: 0 }
};

function updatePlayerStats(player, runsScored, wicketsTaken) {
    playerStats[player].runs += runsScored;
    playerStats[player].wickets += wicketsTaken;
    document.getElementById("playerStats").innerHTML = `${player} Stats: Runs: ${playerStats[player].runs}, Wickets: ${playerStats[player].wickets}`;
}
    let matchFormat = "t20"; // Default format

document.getElementById("matchFormat").addEventListener("change", function() {
    matchFormat = this.value;
    alert(`Match Format changed to: ${matchFormat}`);
});
    
});
