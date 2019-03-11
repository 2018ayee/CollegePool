import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Posting = new Schema({
	user: {
		type: String
	},
	startadr: {
		type: String
	},
	endadr: {
		type: String
	},
	date: {
		type: String
	},
	cost: {
		type: String
	},
	capacity: {
		type: String
	},
	comments: {
		type: String
	}
});

export default mongoose.model('Posting', Posting);