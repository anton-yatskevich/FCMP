const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema ({
    username: {
		type: String,
		unique: true,
		index: true,
		required: true
	},
	password: {
		type: String,
    },
	email: {
		type: String
	}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', UserSchema);
