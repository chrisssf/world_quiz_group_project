use quiz_questions;
db.dropDatabase();
db.countries.insertMany([
  {
    "Question": "Which country on the map is France?",
    "Options": [[{v: "India", f: "?"}], [{v: "Ukraine", f: "?"}], [{v: "France", f: "?"}], [{v: "Algeria", f: "?"}]],
    "Answer": "France"
  },
  {
    "Question": "Which country on the map is Brazil?",
    "Options": [[{v: "Mexico", f: "?"}], [{v: "Canada", f: "?"}], [{v: "Argentina", f: "?"}], [{v: "Brazil", f: "?"}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country on the map is China?",
    "Options": [[{v: "India", f: "?"}], [{v: "Australia", f: "?"}], [{v: "Mongolia", f: "?"}], [{v: "China", f: "?"}]],
    "Answer": "China"
  },
  {
    "Question": "Which country on the map is Canada?",
    "Options": [[{v: "Canada", f: "?"}], [{v: "United States", f: "?"}], [{v: "Mexico", f: "?"}], [{v: "Greenland", f: "?"}]],
    "Answer": "Canada"
  },
  {
    "Question": "Which country on the map is Italy?",
    "Options": [[{v: "Saudi Arabia", f: "?"}], [{v: "Ukraine", f: "?"}], [{v: "Italy", f: "?"}], [{v: "Sweden", f: "?"}]],
    "Answer": "Italy"
  },
  {
    "Question": "Which country on the map is Finland?",
    "Options": [[{v: "Spain", f: "?"}], [{v: "Kazakhstan", f: "?"}], [{v: "Finland", f: "?"}], [{v: "Iceland", f: "?"}]],
    "Answer": "Finland"
  },
  {
    "Question": "Which country on the map is Egypt?",
    "Options": [[{v: "South Africa", f: "?"}], [{v: "Algeria", f: "?"}], [{v: "Egypt", f: "?"}], [{v: "Iran", f: "?"}]],
    "Answer": "Egypt"
  },
]);
db.capitals.insertMany([
  {
    "Question": "Which country's capital city is Madrid?",
    "Options": [[{v: "India", f: "?"}], [{v: "Spain", f: "?"}], [{v: "France", f: "?"}], [{v: "Algeria", f: "?"}]],
    "Answer": "Spain"
  },
  {
    "Question": "Which country's capital city is Rio de Janeiro?",
    "Options": [[{v: "Mexico", f: "?"}], [{v: "Canada", f: "?"}], [{v: "Argentina", f: "?"}], [{v: "Brazil", f: "?"}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country's capital city is Canberra?",
    "Options": [[{v: "India", f: "?"}], [{v: "Australia", f: "?"}], [{v: "Mongolia", f: "?"}], [{v: "China", f: "?"}]],
    "Answer": "Australia"
  },
  {
    "Question": "Which country's capital city is Berlin?",
    "Options": [[{v: "Canada", f: "?"}], [{v: "United States", f: "?"}], [{v: "Egypt", f: "?"}], [{v: "Germany", f: "?"}]],
    "Answer": "Germany"
  },
  {
    "Question": "Which country's capital city is Stockholm?",
    "Options": [[{v: "Saudi Arabia", f: "?"}], [{v: "Ukraine", f: "?"}], [{v: "Italy", f: "?"}], [{v: "Sweden", f: "?"}]],
    "Answer": "Sweden"
  }
]);
