// models/User.js
const mongoose = require('mongoose');
const {model} = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['buyer', 'seller'], default: 'buyer' },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const User = model('User', userSchema);
module.exports = User;
