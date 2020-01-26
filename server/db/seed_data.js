use quiz_questions;
db.dropDatabase();

db.countries.insertMany([
  //I have changed the seed data to more simpler data, copied across from the hotel example.

  {
    name: "Anselm Kermon",
    email: "akermon0@gnu.org",
    checked_in: true
  },
  {
    name: "Meriel Geeve",
    email: "mgeeve1@statcounter.com",
    checked_in: true
  }
  // {
  //   "Question": "Which one of the countries above is France",
  //   "Options": ['India', 'Ukraine', 'France', 'Algeria'],
  //   "Answer": "France"
  //   //Should the answer be a string or the index of the array?
  // }

  // {
  //   "Question": "Which one of the countries above is Brazil?",
  //   "Options": ["Mexico", "Canada", "Argentina", "Brazil"],
  //   "Answer": "Brazil"
  //   //Should the answer be a string or the index of the array?
  // },
  //
  // {
  //   "Question": "Which one of the countries above is China?",
  //   "Options": ["India", "Australia", "Mongolia", "China"],
  //   "Answer": "China"
  //   //Should the answer be a string or the index of the array?
  // },
  //
  // {
  //   "Question": "Which one of the countries above is Canada?",
  //   "Options": ["Canada", "USA", "Alaska", "Greenland"],
  //   "Answer": "Canada"
  //   //Should the answer be a string or the index of the array?
  // },
  //
  // {
  //   "Question": "Which one of the countries above is Italy?",
  //   "Options": ["Saudi Arabia", "Ukraine", "Italy", "Sweden"],
  //   "Answer": "Italy"
  //   //Should the answer be a string or the index of the array?
  // },


]);
