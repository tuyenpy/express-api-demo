const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    checkin: Array
});

const User = mongoose.model('User', UserSchema);

module.exports = User;