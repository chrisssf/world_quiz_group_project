use quiz_questions;
db.dropDatabase();
db.countries.insertMany([
  {
    "Question": "Which country on the map is France?",
    "Options": [[{v: "India", f: "?"}, {v:0, f:""}], [{v: "Ukraine", f: "?"}, {v:1, f:""}], [{v: "France", f: "?"}, {v:2, f:""}], [{v: "Algeria", f: "?"}, {v:3, f:""}]],
    "Answer": "France"
  },
  {
    "Question": "Which country on the map is Brazil?",
    "Options": [[{v: "Mexico", f: "?"}, {v:0, f:""}], [{v: "Canada", f: "?"}, {v:1, f:""}], [{v: "Argentina", f: "?"}, {v:2, f:""}], [{v: "Brazil", f: "?"}, {v:3, f:""}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country on the map is China?",
    "Options": [[{v: "India", f: "?"}, {v:0, f:""}], [{v: "Australia", f: "?"}, {v:1, f:""}], [{v: "Mongolia", f: "?"}, {v:2, f:""}], [{v: "China", f: "?"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "Which country on the map is Canada?",
    "Options": [[{v: "Canada", f: "?"}, {v:0, f:""}], [{v: "United States", f: "?"}, {v:1, f:""}], [{v: "Mexico", f: "?"}, {v:2, f:""}], [{v: "Greenland", f: "?"}, {v:3, f:""}]],
    "Answer": "Canada"
  },
  {
    "Question": "Which country on the map is Italy?",
    "Options": [[{v: "Saudi Arabia", f: "?"}, {v:0, f:""}], [{v: "Ukraine", f: "?"}, {v:1, f:""}], [{v: "Italy", f: "?"}, {v:2, f:""}], [{v: "Sweden", f: "?"}, {v:3, f:""}]],
    "Answer": "Italy"
  },
  {
    "Question": "Which country on the map is Finland?",
    "Options": [[{v: "Spain", f: "?"}, {v:0, f:""}], [{v: "Kazakhstan", f: "?"}, {v:1, f:""}], [{v: "Finland", f: "?"}, {v:2, f:""}], [{v: "Iceland", f: "?"}, {v:3, f:""}]],
    "Answer": "Finland"
  },
  {
    "Question": "Which country on the map is Egypt?",
    "Options": [[{v: "South Africa", f: "?"}, {v:0, f:""}], [{v: "Algeria", f: "?"}, {v:1, f:""}], [{v: "Egypt", f: "?"}, {v:2, f:""}], [{v: "Iran", f: "?"}, {v:3, f:""}]],
    "Answer": "Egypt"
  },
  {
    "Question": "Which country on the map is Poland?",
    "Options": [[{v: "Portugal", f: "?"}, {v:0, f:""}], [{v: "Poland", f: "?"}, {v:1, f:""}], [{v: "Romania", f: "?"}, {v:2, f:""}], [{v: "Turkey", f: "?"}, {v:3, f:""}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country on the map is Japan?",
    "Options": [[{v: "Japan", f: "?"}, {v:0, f:""}], [{v: "Mongolia", f: "?"}, {v:1, f:""}], [{v: "India", f: "?"}, {v:2, f:""}], [{v: "Thailand", f: "?"}, {v:3, f:""}]],
    "Answer": "Japan"
  },
  {
    "Question": "Which country on the map is Saudi Arabia?",
    "Options": [[{v: "Algeria", f: "?"}, {v:0, f:""}], [{v: "Saudi Arabia", f: "?"}, {v:1, f:""}], [{v: "Sudan", f: "?"}, {v:2, f:""}], [{v: "Kazakhstan", f: "?"}, {v:3, f:""}]],
    "Answer": "Saudi Arabia"
  }

]);
db.capitals.insertMany([
  {
    "Question": "Which country's capital city is Madrid?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Algeria", f: "Algeria"}, {v:3, f:""}]],
    "Answer": "Spain"
  },
  {
    "Question": "Which country's capital city is Brasilia?",
    "Options": [[{v: "Mexico", f: "Mexico"}, {v:0, f:""}], [{v: "Canada", f: "Canada"}, {v:1, f:""}], [{v: "Argentina", f: "Argentina"}, {v:2, f:""}], [{v: "Brazil", f: "Brazil"}, {v:3, f:""}]],
    "Answer": "Brazil"
  },
  {
    "Question": "Which country's capital city is Canberra?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Australia", f: "Australia"}, {v:1, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:2, f:""}], [{v: "China", f: "China"}, {v:3, f:""}]],
    "Answer": "Australia"
  },
  {
    "Question": "Which country's capital city is Berlin?",
    "Options": [[{v: "Romania", f: "Romania"}, {v:0, f:""}], [{v: "United States", f: "United States"}, {v:1, f:""}], [{v: "Egypt", f: "Egypt"}, {v:2, f:""}], [{v: "Germany", f: "Germany"}, {v:3, f:""}]],
    "Answer": "Germany"
  },
  {
    "Question": "Which country's capital city is Stockholm?",
    "Options": [[{v: "Saudi Arabia", f: "Saudi Arabia"}, {v:0, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:1, f:""}], [{v: "Italy", f: "Italy"}, {v:2, f:""}], [{v: "Sweden", f: "Sweden"}, {v:3, f:""}]],
    "Answer": "Sweden"
  },
  {
    "Question": "Which country's capital city is New Delhi?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "France", f: "France"}, {v:1, f:""}], [{v: "Germany", f: "Germany"}, {v:2, f:""}], [{v: "Turkey", f: "Turkey"}, {v:3, f:""}]],
    "Answer": "India"
  },
  {
    "Question": "Which country's capital city is Cairo?",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Egypt", f: "Egypt"}, {v:1, f:""}], [{v: "Ukraine", f: "Ukraine"}, {v:2, f:""}], [{v: "Algeria", f: "Algeria"}, {v:3, f:""}]],
    "Answer": "Egypt"
  },
  {
    "Question": "Which country's capital city is Beijing?",
    "Options": [[{v: "Thailand", f: "Thailand"}, {v:0, f:""}], [{v: "Australia", f: "Australia"}, {v:1, f:""}], [{v: "China", f: "China"}, {v:2, f:""}], [{v: "Kazakhstan", f: "Kazakhstan"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "Which country's capital city is Warsaw?",
    "Options": [[{v: "Poland", f: "Poland"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Egypt", f: "Egypt"}, {v:3, f:""}]],
    "Answer": "Poland"
  },
  {
    "Question": "Which country's capital city is Lisbon?",
    "Options": [[{v: "Portugal", f: "Portugal"}, {v:0, f:""}], [{v: "Turkey", f: "Turkey"}, {v:1, f:""}], [{v: "France", f: "France"}, {v:2, f:""}], [{v: "Germany", f: "Germany"}, {v:3, f:""}]],
    "Answer": "Portugal"
  }

]);
db.flags.insertMany([
  {
    "Question": "https://restcountries.eu/data/aus.svg",
    "Options": [[{v: "France", f: "France"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "Canada", f: "Canada"}, {v:2, f:""}], [{v: "Australia", f: "Australia"}, {v:3, f:""}]],
    "Answer": "Australia"
  },
  {
    "Question": "https://restcountries.eu/data/prt.svg",
    "Options": [[{v: "Ethiopia", f: "Ethiopia"}, {v:0, f:""}], [{v: "Portugal", f: "Portugal"}, {v:1, f:""}], [{v: "Peru", f: "Peru"}, {v:2, f:""}], [{v: "Mongolia", f: "Mongolia"}, {v:3, f:""}]],
    "Answer": "Portugal"
  },
  {
    "Question": "https://restcountries.eu/data/jpn.svg",
    "Options": [[{v: "Japan", f: "Japan"}, {v:0, f:""}], [{v: "Morocco", f: "Morocco"}, {v:1, f:""}], [{v: "Saudi Arabia", f: "Saudi Arabia"}, {v:2, f:""}], [{v: "Argentina", f: "Argentina"}, {v:3, f:""}]],
    "Answer": "Japan"
  },
  {
    "Question": "https://restcountries.eu/data/zaf.svg",
    "Options": [[{v: "Ethiopia", f: "Ethiopia"}, {v:0, f:""}], [{v: "South Africa", f: "South Africa"}, {v:1, f:""}], [{v: "Russia", f: "Russia"}, {v:2, f:""}], [{v: "Greenland", f: "Greenland"}, {v:3, f:""}]],
    "Answer": "South Africa"
  },
  {
    "Question": "https://restcountries.eu/data/ind.svg",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Thailand", f: "Thailand"}, {v:1, f:""}], [{v: "Kazakhstan", f: "Kazakhstan"}, {v:2, f:""}], [{v: "Yemen", f: "Yemen"}, {v:3, f:""}]],
    "Answer": "India"
  },
  {
    "Question": "https://restcountries.eu/data/esp.svg",
    "Options": [[{v: "Germany", f: "Germany"}, {v:0, f:""}], [{v: "Spain", f: "Spain"}, {v:1, f:""}], [{v: "Poland", f: "Poland"}, {v:2, f:""}], [{v: "Madagascar", f: "Madagascar"}, {v:3, f:""}]],
    "Answer": "Spain"
  },
  {
    "Question": "https://restcountries.eu/data/grc.svg",
    "Options": [[{v: "Greece", f: "Greece"}, {v:0, f:""}], [{v: "Finland", f: "Finland"}, {v:1, f:""}], [{v: "Italy", f: "Italy"}, {v:2, f:""}], [{v: "Australia", f: "Australia"}, {v:3, f:""}]],
    "Answer": "Greece"
  },
  {
    "Question": "https://restcountries.eu/data/chn.svg",
    "Options": [[{v: "India", f: "India"}, {v:0, f:""}], [{v: "Mali", f: "Mali"}, {v:1, f:""}], [{v: "Paraguay", f: "Paraguay"}, {v:2, f:""}], [{v: "China", f: "China"}, {v:3, f:""}]],
    "Answer": "China"
  },
  {
    "Question": "https://restcountries.eu/data/swe.svg",
    "Options": [[{v: "Chad", f: "Chad"}, {v:0, f:""}], [{v: "Sudan", f: "Sudan"}, {v:1, f:""}], [{v: "Sweden", f: "Sweden"}, {v:2, f:""}], [{v: "Pakistan", f: "Pakistan"}, {v:3, f:""}]],
    "Answer": "Sweden"
  },
  {
    "Question": "https://restcountries.eu/data/bra.svg",
    "Options": [[{v: "Mexico", f: "Mexico"}, {v:0, f:""}], [{v: "Canada", f: "Canada"}, {v:1, f:""}], [{v: "Colombia", f: "Colombia"}, {v:2, f:""}], [{v: "Brazil", f: "Brazil"}, {v:3, f:""}]],
    "Answer": "Brazil"
  }]);
