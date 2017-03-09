var express = require('express');
var server = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//connect to the database
mongoose.connect(mongoURI);
//Create the mongoose schema
var animalSchema = mongoose.Schema({
  color: String,
  size: String,
  type: String,
  price: Number
});
//create the mongoose model - capitalized because it's a special case
var Animal = mongoose.model('Animal', animalSchema);
//testing database stuff
// var donkey = new Animal({
//   color: 'gray',
//   size: 'MED',
//   type: 'donkey',
//   price: 180
// });
// donkey.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// GET /animals
//GET /animals/:id
//POST /animals
//PUT /animals/:id
//DELET /animals/:id

server.listen(port, function(){
  console.log('now listening on port...', port);
});
