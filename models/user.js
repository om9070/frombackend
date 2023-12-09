const mongoose = require('mongoose');

//  firstName: '',
// lastName: '',
// email: '',
// gender: '',
// age:'',
// city:'',
// country:'',
// state:'',
// dateOfBirth: '',
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    minLength:2,
    maxLength:50
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    minLength:2,
    maxLength:50
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  },
  state:{
    type: String,
    required: true,
  },
  dateOfBirth:{
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
