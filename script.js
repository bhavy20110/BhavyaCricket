// Game logic variables
let selectedBattingOrder = [];
let selectedBowlingOrder = [];
let squad = [
    "Player 1", "Player 2", "Player 3", "Player 4", "Player 5",
    "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11"
];
let runs = 0;
let ballDirection = ["left", "right", "straight"];

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
