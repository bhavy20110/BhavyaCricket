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
});
