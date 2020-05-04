const mongoose = require('mongoose');

const userDreamSchema = new mongoose.Schema({
	id_user: Integer,
	id_dream: Integer,
	id_post: Integer
});

module.exports = mongoose.model('user_dream', userDreamSchema);