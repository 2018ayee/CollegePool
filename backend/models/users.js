import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
	name: {
		type: String
	},
	username: {
		type: String
	},
	address: {
		type: String
	},
	birthdate: {
		type: String
	},
	email: {
		type: String
	},
	gender: {
		type: String
	},
	phone_number: {
		type: String
	},
	rides_given: {
		type: String
	},
	rides_received: {
		type: String
	},
	payment_id: {
		type: String
	}
});

const users = mongoose.connection.useDb('users');

export default users.model('User', User);