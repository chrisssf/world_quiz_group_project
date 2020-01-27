use quiz_questions;
db.dropDatabase();

db.countries.insertMany([

  {
    "Question": "Which one of the countries above is France",
    "Options": [[{v: "India", f: "?"}], [{v: "Ukraine", f: "?"}], [{v: "France", f: "?"}], [{v: "Algeria", f: "?"}]],
    "Answer": "France"
    //Should the answer be a string or the index of the array?
  },

  {
    "Question": "Which one of the countries above is Brazil?",
    "Options": [[{v: "Mexico", f: "?"}], [{v: "Canada", f: "?"}], [{v: "Argentina", f: "?"}], [{v: "Brazil", f: "?"}]],
    "Answer": "Brazil"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is China?",
    "Options": [[{v: "India", f: "?"}], [{v: "Australia", f: "?"}], [{v: "Mongolia", f: "?"}], [{v: "China", f: "?"}]],
    "Answer": "China"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is Canada?",
    "Options": [[{v: "Canada", f: "?"}], [{v: "United States", f: "?"}], [{v: "Mexico", f: "?"}], [{v: "Greenland", f: "?"}]],
    "Answer": "Canada"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is Italy?",
    "Options": [[{v: "Saudi Arabia", f: "?"}], [{v: "Ukraine", f: "?"}], [{v: "Italy", f: "?"}], [{v: "Sweden", f: "?"}]],
    "Answer": "Italy"
    //Should the answer be a string or the index of the array?
  }
]);

db.capitals.insertMany([
  {
    "Question": "Which country's capital city is Madrid?",
    "Options": ['India', 'Spain', 'France', 'Algeria'],
    "Answer": "Spain"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which country's capital city is Rio de Janeiro?",
    "Options": ["Mexico", "Canada", "Argentina", "Brazil"],
    "Answer": "Brazil"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which country's capital city is Canberra?",
    "Options": ["India", "Australia", "Mongolia", "China"],
    "Answer": "Australia"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which country's capital city is Berlin?",
    "Options": ["Canada", "USA", "Alaska", "Germany"],
    "Answer": "Germany"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which country's capital city is Stockholm?",
    "Options": ["Saudi Arabia", "Ukraine", "Italy", "Sweden"],
    "Answer": "Sweden"
    //Should the answer be a string or the index of the array?
  }
]);
