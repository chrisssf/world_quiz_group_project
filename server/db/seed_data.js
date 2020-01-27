use quiz_questions;
db.dropDatabase();

db.countries.insertMany([

  {
    "Question": "Which one of the countries above is France",
    "Options": ['India', 'Ukraine', 'France', 'Algeria'],
    "Answer": "France"
    //Should the answer be a string or the index of the array?
  },

  {
    "Question": "Which one of the countries above is Brazil?",
    "Options": ["Mexico", "Canada", "Argentina", "Brazil"],
    "Answer": "Brazil"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is China?",
    "Options": ["India", "Australia", "Mongolia", "China"],
    "Answer": "China"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is Canada?",
    "Options": ["Canada", "USA", "Alaska", "Greenland"],
    "Answer": "Canada"
    //Should the answer be a string or the index of the array?
  },
  {
    "Question": "Which one of the countries above is Italy?",
    "Options": ["Saudi Arabia", "Ukraine", "Italy", "Sweden"],
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
