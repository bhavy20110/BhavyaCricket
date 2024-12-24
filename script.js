// Global Variables
let selectedTournament = "";
let selectedTeams = { team1: "", team2: "" };
let matchInProgress = false;
let runs = 0;
let balls = 0;
let wickets = 0;
let overs = 0;
let commentary = [];

// Teams and Squads
const squads = {
  ipl: {
    "Mumbai Indians": ["Rohit Sharma", "Ishan Kishan", "Suryakumar Yadav"],
    "Chennai Super Kings": ["MS Dhoni", "Ruturaj Gaikwad", "Ravindra Jadeja"],
    "Royal Challengers Bangalore": ["Virat Kohli", "Faf du Plessis", "Glenn Maxwell"],
    "Delhi Capitals": ["David Warner", "Prithvi Shaw", "Axar Patel"],
    "Kolkata Knight Riders": ["Andre Russell", "Shreyas Iyer", "Sunil Narine"]
    // Add more IPL teams...
  },
  odiwc: {
    India: ["Rohit Sharma", "Virat Kohli", "Shubman Gill"],
    England: ["Joe Root", "Ben Stokes", "Jos Buttler"]
  },
  t20wc: {
    India: ["Rohit Sharma", "Virat Kohli", "Hardik Pandya"],
    Australia: ["David Warner", "Steve Smith", "Mitchell Marsh"]
  },
  wtc: {
    India: ["Rohit Sharma", "Shubman Gill", "Cheteshwar Pujara"],
    Australia: ["Steve Smith", "Usman Khawaja", "Pat Cummins"]
  }
};

// Populate Teams Dropdown
function populateTeams(tournament) {
  const teams = Object.keys(squads[tournament]);
  const team1Select = document.getElementById("team1");
  const team2Select = document.getElementById("team2");

  team1Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
  team2Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
}

// Start Tournament
document.getElementById("start-game").addEventListener("click", () => {
  const tournament = document.getElementById("tournament").value;
  if (!tournament) {
    alert("Please select a tournament!");
    return;
  }
  selectedTournament = tournament;

  // Populate teams for the selected tournament
  populateTeams(selectedTournament);

  // Transition to team selection
  document.getElementById("tournament-selection").style.display = "none";
  document.getElementById("team-selection").style.display = "block";
});

// Start Match
document.getElementById("start-match").addEventListener("click", () => {
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;

  if (!team1 || !team2 || team1 === team2) {
    alert("Please select two different teams.");
    return;
  }

  // Save selected teams
  selectedTeams.team1 = team1;
  selectedTeams.team2 = team2;

  // Transition to match content
  document.getElementById("team-selection").style.display = "none";
  document.getElementById("match-content").style.display = "block";

  // Initialize match
  document.getElementById("match-heading").innerText = `${team1} बनाम ${team2}`;
  startMatch();
});

// Start Match Logic
function startMatch() {
  matchInProgress = true;
  resetScoreboard();
  commentary = [`${selectedTeams.team1} और ${selectedTeams.team2} के बीच मैच शुरू हो गया है!`];
  updateCommentary();
}

// Reset Scoreboard
function resetScoreboard() {
  runs = 0;
  balls = 0;
  wickets = 0;
  overs = 0;

  document.getElementById("scoreboard").innerHTML = `
    <p>स्कोर: ${runs}/${wickets}</p>
    <p>ओवर: ${overs}.${balls % 6}</p>
  `;
}

// Update Commentary Box
function updateCommentary() {
  const commentaryBox = document.getElementById("commentary-box");
  commentaryBox.innerHTML = commentary.slice(-5).map(c => `<p>${c}</p>`).join("");
}

// Batting Action
document.getElementById("bat").addEventListener("click", () => {
  if (!matchInProgress) {
    alert("पहले मैच शुरू करें!");
    return;
  }

  const outcome = Math.random();
  balls++;
  if (balls % 6 === 0) overs++;

  if (outcome < 0.2) {
    wickets++;
    commentary.push("विकेट! बल्लेबाज आउट हो गया।");
  } else if (outcome < 0.8) {
    const runsScored = Math.floor(Math.random() * 4) + 1;
    runs += runsScored;
    commentary.push(`बल्लेबाज ने ${runsScored} रन बनाए।`);
  } else {
    runs += 6;
    commentary.push("क्या शॉट है! शानदार छक्का!");
  }

  if (wickets === 10) {
    matchInProgress = false;
    commentary.push("पारी समाप्त। सभी खिलाड़ी आउट।");
  }

  resetScoreboard();
  updateCommentary();
});

// Bowling Action
document.getElementById("bowl").addEventListener("click", () => {
  commentary.push("गेंदबाजी जारी है।");
  updateCommentary();
});

// Fielding Action
document.getElementById("field").addEventListener("click", () => {
  commentary.push("फील्डिंग जारी है।");
  updateCommentary();
});
