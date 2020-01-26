const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser' );

const cors = require( 'cors' );

app.use( cors() )
app.use( bodyParser.json() );

const MongoClient = require( 'mongodb' ).MongoClient;
const createRouter = require( './helpers/create_router.js' );

MongoClient.connect( 'mongodb://localhost:27017' )
  .then(( client ) => {
    const db = client.db( 'quiz_questions' );
    const countriesCollection = db.collection( 'countries' );
  //need to add in second collection 'capitals'
  app.use( 'api/countries', createRouter( countriesCollection ));
  //need to add in second url and createRouter 'capitals'
})

.catch( console.error );

app.listen( 3000, function() {
  console.log( `World Quiz server running on port ${this.address().port}`);
});
