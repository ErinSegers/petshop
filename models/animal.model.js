var mongoose = require('mongoose');

var animalSchema = mongoose.Schema({
  color: String,
  size: String,
  type: String,
  price: Number
});
//create the mongoose model - capitalized because it's a special case
var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal; //now able to import elsewhere
