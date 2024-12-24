// Global Variables
let selectedTournament = "";
let selectedTeams = { team1: "", team2: "" };
let matchInProgress = false;
let runs = 0;
let balls = 0;
let wickets = 0;
let overs = 0;
let commentary = [];
// IPL Teams and Squads
const iplTeams = {
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
  t20wc: {
    "India": [
      "Rohit Sharma (c)",
      "KL Rahul",
      "Virat Kohli",
      "Shubman Gill",
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
odiwc: {
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
 

// Populate Teams
function populateTeams(tournament) {
  const teams = Object.keys(squads[tournament]);
  const team1Select = document.getElementById("team1");
  const team2Select = document.getElementById("team2");

  team1Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
  team2Select.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join("");
}

// Start Tournament
document.getElementById("start-game").addEventListener("click", () => {
  selectedTournament = document.getElementById("tournament").value;
  populateTeams(selectedTournament);
  document.getElementById("tournament-selection").style.display = "none";
  document.getElementById("team-selection").style.display = "block";
});

// Start Match
document.getElementById("start-match").addEventListener("click", () => {
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;

  if (team1 === team2) {
    alert("Please select two different teams.");
    return;
  }

  selectedTeams.team1 = team1;
  selectedTeams.team2 = team2;
  document.getElementById("team-selection").style.display = "none";
  document.getElementById("match-content").style.display = "block";

  document.getElementById("match-heading").innerText = `${team1} बनाम ${team2}`;
  startMatch();
});

// Start Match Logic
function startMatch() {
  resetScoreboard();
  commentary.push(`${selectedTeams.team1} और ${selectedTeams.team2} के बीच मैच शुरू हो गया है!`);
  updateCommentary();
}

// Update Scoreboard
function resetScoreboard() {
  runs = 0;
  balls = 0;
  wickets = 0;
  overs = 0;
  document.getElementById("scoreboard").innerHTML = `<p>स्कोर: 0/0</p><p>ओवर: 0.0</p>`;
}

// Hindi Commentary
function updateCommentary() {
  const commentaryBox = document.getElementById("commentary-box");
  commentaryBox.innerHTML = commentary.slice(-5).map(c => `<p>${c}</p>`).join("");
}

// Batting Logic
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
// IPL Teams and Squads
const iplTeams = {
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
  t20wc: {
    "India": [
      "Rohit Sharma (c)",
      "KL Rahul",
      "Virat Kohli",
      "Shubman Gill",
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
odiwc: {
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
