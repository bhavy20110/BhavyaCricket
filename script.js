// Game logic variables
let selectedBattingOrder = [];
let selectedBowlingOrder = [];
let runs = 0;
let balls = 0;
let wickets = 0;
let overs = 0;
let commentary = [];
let matchInProgress = false;
// Teams and Squads for all tournaments
const squads = {
  ipl: {
    "Mumbai Indians": [
      "Rohit Sharma",
      "Suryakumar Yadav",
      "Tilak Varma",
      "Bevon Jacobs",
      "Robin Minz",
      "Ryan Rickelton",
      "Krishnan Shrijith",
      "Hardik Pandya",
      "Naman Dhir",
      "Will Jacks",
      "Raj Angad Bawa",
      "Vignesh Puthur",
      "Allah Ghazanfar",
      "Karn Sharma",
      "Mitchell Santner",
      "Jasprit Bumrah",
      "Trent Boult",
      "Reece Topley",
      "Lizaad Williams",
      "Arjun Tendulkar"
    ],
    "Chennai Super Kings": [
      "MS Dhoni",
      "Ruturaj Gaikwad",
      "Devon Conway",
      "Ambati Rayudu",
      "Shivam Dube",
      "Ravindra Jadeja",
      "Moeen Ali",
      "Deepak Chahar",
      "Dwayne Bravo",
      "Mitchell Santner",
      "Shardul Thakur",
      "Sam Curran",
      "Imran Tahir",
      "Josh Hazlewood",
      "Lungi Ngidi"
    ],
    "Royal Challengers Bangalore": [
      "Virat Kohli",
      "Faf du Plessis",
      "Glenn Maxwell",
      "Dinesh Karthik",
      "Harshal Patel",
      "Mohammed Siraj",
      "Wanindu Hasaranga",
      "Shahbaz Ahmed",
      "Josh Hazlewood",
      "Anuj Rawat",
      "Suyash Prabhudessai",
      "Karn Sharma",
      "David Willey",
      "Mahipal Lomror",
      "Finn Allen"
    ],
    "Kolkata Knight Riders": [
      "Shreyas Iyer",
      "Andre Russell",
      "Sunil Narine",
      "Venkatesh Iyer",
      "Nitish Rana",
      "Pat Cummins",
      "Varun Chakravarthy",
      "Shivam Mavi",
      "Umesh Yadav",
      "Tim Southee",
      "Rinku Singh",
      "Rahul Tripathi",
      "Dinesh Karthik",
      "Kuldeep Yadav",
      "Lockie Ferguson"
    ],
    "Delhi Capitals": [
      "Rishabh Pant",
      "Prithvi Shaw",
      "David Warner",
      "Anrich Nortje",
      "Axar Patel",
      "Shardul Thakur",
      "Mitchell Marsh",
      "Kuldeep Yadav",
      "Mustafizur Rahman",
      "Chetan Sakariya",
      "Lalit Yadav",
      "Ripal Patel",
      "Khaleel Ahmed",
      "Sarfaraz Khan",
      "Mandeep Singh"
    ],
    "Punjab Kings": [
      "Shikhar Dhawan",
      "Mayank Agarwal",
      "Jonny Bairstow",
      "Liam Livingstone",
      "Kagiso Rabada",
      "Arshdeep Singh",
      "Rahul Chahar",
      "Shahrukh Khan",
      "Harpreet Brar",
      "Raj Bawa",
      "Rishi Dhawan",
      "Nathan Ellis",
      "Prabhsimran Singh",
      "Odean Smith",
      "Sandeep Sharma"
    ],
    "Rajasthan Royals": [
      "Sanju Samson",
      "Jos Buttler",
      "Yashasvi Jaiswal",
      "Devdutt Padikkal",
      "Shimron Hetmyer",
      "Ravichandran Ashwin",
      "Trent Boult",
      "Yuzvendra Chahal",
      "Obed McCoy",
      "Prasidh Krishna",
      "Navdeep Saini",
      "Riyan Parag",
      "KC Cariappa",
      "Daryl Mitchell",
      "James Neesham"
    ],
    "Sunrisers Hyderabad": [
      "Kane Williamson",
      "Abhishek Sharma",
      "Rahul Tripathi",
      "Aiden Markram",
      "Nicholas Pooran",
      "Washington Sundar",
      "Bhuvneshwar Kumar",
      "T Natarajan",
      "Umran Malik",
      "Marco Jansen",
      "Kartik Tyagi",
      "Shreyas Gopal",
      "Priyam Garg",
      "Jagadeesha Suchith",
      "Sean Abbott"
    ],
    "Lucknow Super Giants": [
      "KL Rahul",
      "Quinton de Kock",
      "Deepak Hooda",
      "Marcus Stoinis",
      "Krunal Pandya",
      "Jason Holder",
      "Avesh Khan",
      "Mark Wood",
      "Ravi Bishnoi",
      "Manish Pandey",
      "Dushmantha Chameera",
      "K Gowtham",
      "Mohsin Khan",
      "Ayush Badoni",
      "Evin Lewis"
    ],
    "Gujarat Titans": [
      "Hardik Pandya",
      "Shubman Gill",
      "David Miller",
      "Rashid Khan",
      "Mohammed Shami",
      "Lockie Ferguson",
      "Rahul Tewatia",
      "Matthew Wade",
      "Alzarri Joseph",
      "Yash Dayal",
      "Sai Sudharsan",
      "Vijay Shankar",
      "Abhinav Manohar",
      "Jayant Yadav",
      "Pradeep Sangwan"
    ]
  },
  t20WorldCup2024: {
    "India": [
      "Rohit Sharma (c)",
      "KL Rahul",
      "Virat Kohli",
      "Suryakumar Yadav",
      "Rishabh Pant (wk)",
      "Hardik Pandya",
      "Ravindra Jadeja",
      "Yuzvendra Chahal",
      "Jasprit Bumrah",
      "Bhuvneshwar Kumar",
      "Mohammed Shami",
      "Axar Patel",
      "Shreyas Iyer",
      "Deepak Hooda",
      "Harshal Patel"
        }
      Australia": [
      "Aaron Finch (c)",
      "David Warner",
      "Steve Smith",
      "Glenn Maxwell",
      "Marcus Stoinis",
      "Matthew Wade (wk)",
      "Pat Cummins",
      "Mitchell Starc",
      "Josh Hazlewood",
      "Adam Zampa",
      "Ashton Agar",
      "Kane Richardson",
      "Daniel Sams",
      "Mitchell Marsh",
      "Tim David"
    ],
    "England": [
      "Jos Buttler (c)",
      "Jonny Bairstow",
      "Dawid Malan",
      "Ben Stokes",
      "Moeen Ali",
      "Liam Livingstone",
      "Sam Curran",
      "Chris Woakes",
      "Jofra Archer",
      "Adil Rashid",
      "Mark Wood",
      "Harry Brook",
      "Reece Topley",
      "Phil Salt",
      "David Willey"
    ],
    "Pakistan": [
      "Babar Azam (c)",
      "Mohammad Rizwan (wk)",
      "Fakhar Zaman",
      "Haider Ali",
      "Shadab Khan",
      "Mohammad Nawaz",
      "Shaheen Afridi",
      "Haris Rauf",
      "Naseem Shah",
      "Imad Wasim",
      "Asif Ali",
      "Iftikhar Ahmed",
      "Mohammad Wasim Jr.",
      "Khushdil Shah",
      "Usman Qadir"
    ]
  },
odiWorldCup: {
    "India": [
      "Rohit Sharma (c)",
      "Shubman Gill",
      "Virat Kohli",
      "KL Rahul",
      "Hardik Pandya",
      "Ravindra Jadeja",
      "Mohammed Shami",
      "Jasprit Bumrah",
      "Kuldeep Yadav",
      "Shardul Thakur",
      "Ishan Kishan",
      "Suryakumar Yadav",
      "Axar Patel",
      "Prasidh Krishna",
      "Yuzvendra Chahal"
    ],
    "Australia": [
      "Pat Cummins (c)",
      "David Warner",
      "Steve Smith",
      "Marnus Labuschagne",
      "Travis Head",
      "Glenn Maxwell",
      "Alex Carey (wk)",
      "Mitchell Marsh",
      "Adam Zampa",
      "Josh Hazlewood",
      "Mitchell Starc",
      "Marcus Stoinis",
      "Cameron Green",
      "Ashton Agar",
      "Sean Abbott"
    ],
    "England": [
      "Jos Buttler (c)",
      "Jason Roy",
      "Jonny Bairstow",
      "Joe Root",
      "Ben Stokes",
      "Moeen Ali",
      "Sam Curran",
      "Chris Woakes",
      "Jofra Archer",
      "Mark Wood",
      "Adil Rashid",
      "Liam Livingstone",
      "Harry Brook",
      "Reece Topley",
      "Phil Salt"
    ],
    "New Zealand": [
      "Kane Williamson (c)",
      "Devon Conway",
      "Finn Allen",
      "Tom Latham (wk)",
      "Glenn Phillips",
      "Daryl Mitchell",
      "Mitchell Santner",
      "Tim Southee",
      "Trent Boult",
      "Lockie Ferguson",
      "Ish Sodhi",
      "James Neesham",
      "Mark Chapman",
      "Henry Nicholls",
      "Kyle Jamieson"
    ]
  },
wtc: {
    "India": [
      "Rohit Sharma (c)",
      "Shubman Gill",
      "Cheteshwar Pujara",
      "Virat Kohli",
      "Ajinkya Rahane",
      "Ravindra Jadeja",
      "Ravichandran Ashwin",
      "Mohammed Shami",
      "Jasprit Bumrah",
      "Mohammed Siraj",
      "KS Bharat (wk)",
      "Axar Patel",
      "Shardul Thakur",
      "Jaydev Unadkat",
      "Yashasvi Jaiswal"
    ],
    "Australia": [
      "Pat Cummins (c)",
      "David Warner",
      "Usman Khawaja",
      "Steve Smith",
      "Marnus Labuschagne",
      "Travis Head",
      "Alex Carey (wk)",
      "Mitchell Marsh",
      "Mitchell Starc",
      "Nathan Lyon",
      "Josh Hazlewood",
      "Cameron Green",
      "Scott Boland",
      "Michael Neser",
      "Todd Murphy"
    ],
    "England": [
      "Ben Stokes (c)",
      "Zak Crawley",
      "Ben Duckett",
      "Joe Root",
      "Harry Brook",
      "Jonny Bairstow (wk)",
      "Ollie Pope",
      "Chris Woakes",
      "Mark Wood",
      "James Anderson",
      "Stuart Broad",
      "Jack Leach",
      "Rehan Ahmed",
      "Ollie Robinson",
      "Will Jacks"
    ],
    "South Africa": [
      "Dean Elgar (c)",
      "Temba Bavuma",
      "Aiden Markram",
      "Rassie van der Dussen",
      "Quinton de Kock (wk)",
      "Keshav Maharaj",
      "Kagiso Rabada",
      "Anrich Nortje",
      "Lungi Ngidi",
      "Marco Jansen",
      "Keegan Petersen",
      "Reeza Hendricks",
      "Dwaine Pretorius",
      "Tabraiz Shamsi",
      "Ryan Rickelton"
    ]
  }
};
// Stadium Setup
function setupStadium() {
  const stadium = document.getElementById("stadium");
  stadium.style.backgroundColor = "green"; // Green grass
  stadium.style.border = "5px solid brown"; // Stadium boundary
  stadium.style.display = "flex";
  stadium.style.justifyContent = "center";
  stadium.style.alignItems = "center";

  const pitch = document.createElement("div");
  pitch.id = "pitch";
  pitch.style.width = "200px";
  pitch.style.height = "400px";
  pitch.style.backgroundColor = "#d3d3d3"; // Pitch color
  stadium.appendChild(pitch);

  const fans = document.createElement("div");
  fans.id = "fans";
  fans.style.width = "100%";
  fans.style.height = "50px";
  fans.style.backgroundColor = "blue"; // Crowd color
  stadium.appendChild(fans);
}

// Start Match
function startMatch() {
  matchInProgress = true;
  resetScoreboard();
  setupStadium();
  commentary.push("Match started! Let the game begin!");
  updateCommentary();
}

// Reset Scoreboard
function resetScoreboard() {
  runs = 0;
  balls = 0;
  wickets = 0;
  overs = 0;
  updateScoreboard();
}

// Update Scoreboard
function updateScoreboard() {
  document.getElementById("scoreboard").innerHTML = `
    <p>Runs: ${runs}</p>
    <p>Balls: ${balls}</p>
    <p>Wickets: ${wickets}</p>
    <p>Overs: ${overs}.${balls % 6}</p>
  `;
}

// Batting Mechanics
function bat() {
  if (!matchInProgress) return alert("Start the match first!");
  const outcome = Math.random();
  balls++;
  if (balls % 6 === 0) overs++;
  if (outcome < 0.2) {
    wickets++;
    commentary.push("Wicket! The batter is out.");
  } else if (outcome < 0.8) {
    const runsScored = Math.floor(Math.random() * 4 + 1);
    runs += runsScored;
    commentary.push(`The batter scored ${runsScored} runs!`);
  } else {
    runs += 6;
    commentary.push("It's a SIX! What a shot!");
  }
  if (wickets === 10) {
    matchInProgress = false;
    commentary.push("All out! Innings over.");
  }
  updateScoreboard();
  updateCommentary();
}

// Bowling Mechanics
function bowl() {
  if (!matchInProgress) return alert("Start the match first!");
  const outcome = Math.random();
  balls++;
  if (balls % 6 === 0) overs++;
  if (outcome < 0.2) {
    commentary.push("The bowler has taken a wicket!");
    wickets++;
  } else if (outcome < 0.8) {
    commentary.push("Dot ball! Excellent delivery.");
  } else {
    commentary.push("Wide ball! Extra run awarded.");
    runs++;
  }
  if (wickets === 10) {
    matchInProgress = false;
    commentary.push("Innings over! The bowler has done it.");
  }
  updateScoreboard();
  updateCommentary();
}

// Fielding Mechanics
function field() {
  if (!matchInProgress) return alert("Start the match first!");
  const outcome = Math.random();
  if (outcome < 0.5) {
    commentary.push("Amazing fielding! No runs taken.");
  } else {
    const runsSaved = Math.floor(Math.random() * 3);
    commentary.push(`Fielding effort saved ${runsSaved} runs!`);
    runs -= runsSaved;
  }
  updateScoreboard();
  updateCommentary();
}

// Update Commentary
function updateCommentary() {
  const commentaryBox = document.getElementById("commentary-box");
  commentaryBox.innerHTML = commentary.slice(-5).map(c => `<p>${c}</p>`).join("");
}

// Start Match Button
document.getElementById("start-match").addEventListener("click", startMatch);

// Player Action Buttons
document.getElementById("bat").addEventListener("click", bat);
document.getElementById("bowl").addEventListener("click", bowl);
document.getElementById("field").addEventListener("click", field);
