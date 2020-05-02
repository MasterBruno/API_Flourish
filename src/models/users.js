const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	birth_date: Date,
	created_at: Date,
	id_role: Integer
});

module.exports = mongoose.model('users', userSchema);