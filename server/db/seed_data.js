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
  {
    "Question": "Which country on the map is Poland?",
    "Options": [[{v: "Portugal", f: "?"}], [{v: "Poland", f: "?"}], [{v: "Romania", f: "?"}], [{v: "Turkey", f: "?"}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country on the map is Japan?",
    "Options": [[{v: "Japan", f: "?"}], [{v: "Mongolia", f: "?"}], [{v: "India", f: "?"}], [{v: "Thailand", f: "?"}]],
    "Answer": "Japan"
  },
  {
    "Question": "Which country on the map is Saudi Arabia?",
    "Options": [[{v: "Algeria", f: "?"}], [{v: "Saudi Arabia", f: "?"}], [{v: "Sudan", f: "?"}], [{v: "Kazakhstan", f: "?"}]],
    "Answer": "Saudi Arabia"
  }

]);
db.capitals.insertMany([
  {
    "Question": "Which country's capital city is Madrid?",
    "Options": [[{v: "India", f: "India"}], [{v: "Spain", f: "Spain"}], [{v: "France", f: "France"}], [{v: "Algeria", f: "Algeria"}]],
    "Answer": "Spain"
  },
  {
    "Question": "Which country's capital city is Brasilia?",
    "Options": [[{v: "Mexico", f: "Mexico"}], [{v: "Canada", f: "Canada"}], [{v: "Argentina", f: "Argentina"}], [{v: "Brazil", f: "Brazil"}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country's capital city is Canberra?",
    "Options": [[{v: "India", f: "India"}], [{v: "Australia", f: "Australia"}], [{v: "Mongolia", f: "Mongolia"}], [{v: "China", f: "China"}]],
    "Answer": "Australia"
  },
  {
    "Question": "Which country's capital city is Berlin?",
    "Options": [[{v: "Romania", f: "Romania"}], [{v: "United States", f: "United States"}], [{v: "Egypt", f: "Egypt"}], [{v: "Germany", f: "Germany"}]],
    "Answer": "Germany"
  },
  {
    "Question": "Which country's capital city is Stockholm?",
    "Options": [[{v: "Saudi Arabia", f: "Saudi Arabia"}], [{v: "Ukraine", f: "Ukraine"}], [{v: "Italy", f: "Italy"}], [{v: "Sweden", f: "Sweden"}]],
    "Answer": "Sweden"
  },
  {
    "Question": "Which country's capital city is New Delhi?",
    "Options": [[{v: "India", f: "India"}], [{v: "France", f: "France"}], [{v: "Germany", f: "Germany"}], [{v: "Turkey", f: "Turkey"}]],
    "Answer": "India"
  },
  {
    "Question": "Which country's capital city is Cairo?",
    "Options": [[{v: "India", f: "India"}], [{v: "Egypt", f: "Egypt"}], [{v: "Ukraine", f: "Ukraine"}], [{v: "Algeria", f: "Algeria"}]],
    "Answer": "Egypt"
  },
  {
    "Question": "Which country's capital city is Beijing?",
    "Options": [[{v: "Thailand", f: "Thailand"}], [{v: "Australia", f: "Australia"}], [{v: "China", f: "China"}], [{v: "Kazakhstan", f: "Kazakhstan"}]],
    "Answer": "China"
  },
  {
    "Question": "Which country's capital city is Warsaw?",
    "Options": [[{v: "Poland", f: "Poland"}], [{v: "Spain", f: "Spain"}], [{v: "France", f: "France"}], [{v: "Egypt", f: "Egypt"}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country's capital city is Lisbon?",
    "Options": [[{v: "Portugal", f: "Portugal"}], [{v: "Turkey", f: "Turkey"}], [{v: "France", f: "France"}], [{v: "Germany", f: "Germany"}]],
    "Answer": "Portugal"
  }

]);
