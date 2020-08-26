const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('quiz_questions');
    const countriesCollection = db.collection('countries');
    const capitalsCollection = db.collection('capitals');
    const flagsCollection = db.collection('flags'); //!!!!!!!!!!

  app.use( '/api/countries', createRouter( countriesCollection ));
  app.use( '/api/capitals', createRouter( capitalsCollection ));
  app.use( '/api/flags', createRouter( flagsCollection ));//!!!!!!!!!!
})
.catch( console.error );

app.listen( 3000, function() {
  console.log( `World Quiz server running on port ${this.address().port}` );
});
