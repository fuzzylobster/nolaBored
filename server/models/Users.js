const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// could have other auth types later, e.g. Gmail, Twitter
const User = new Schema({
  facebook: {
    facebookId: String,
    displayName: String,
    email: String,
    firstName: String,
    lastName: String, 
  }
});

module.exports = mongoose.model('User', User);
