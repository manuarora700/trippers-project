const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name!']
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Email is invalid']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE AND SAVE
      validator: function(el) {
        return el === this.password; // Password match confirmation
      },
      message: 'Passwords are not the same'
    }
  }
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;

  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
