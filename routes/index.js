// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/mongodb', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//**************************************************************************
//***** mongodb get all of the Routes in Routes collection where frequence>=1
//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs
router.get('/db', function (request, response) {


  mongodb.MongoClient.connect('mongodb+srv://Basudha:Basudha@admin-basudha.72sjm.mongodb.net/', function(err, client) {
    // mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, db) {  // works with mongodb v2 but not v3
    if(err) throw err;
    //get collection of routes
    var db = client.db('Basudha');  // in v3 we need to get the db from the client
    var Routes = db.collection('FirstCollection');
    //get all Routes with frequency >=1
    Routes.find({}).toArray(function (err, docs) {
      if(err) throw err;

      response.render('index', {results: docs});

    });

    //close connection when your app is terminating.
    // db.close(function (err) {
    // client.close(function (err) {
    //   if(err) throw err;
    // });
  });//end of connect
});//end app.get

module.exports = router;

