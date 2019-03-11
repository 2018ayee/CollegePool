import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Posting from './models/postings';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/postings');

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully!')
});

router.route('/postings').get((req, res) => {
	Posting.find((err, postings) => {
		if(err)
			console.log(err);
		else
			res.json(postings);
	});
});

router.route('/postings/:id').get((req, res) => {
	Posting.findById(req.params.id, (err, posting) => {
		if(err)
			console.log(err);
		else
			res.json(posting);
	});
});

router.route('/postings/add').post((req, res) => {
	let posting = new Posting(req.body);
	posting.save()
		.then(issue => {
			res.status(200).json({'posting': 'Added successfully'});
		})
		.catch(err => {
			res.status(400).send('Failed to create new posting');
		});
});

router.route('/postings/update/:id').post((req, res) => {
	Posting.findById(req.params.id, (err, posting) => {
		if(!posting)
			return next(new Error('Could not load'));
		else
		{
			posting.startadr = req.body.startadr;
			posting.endadr = req.body.endadr;
			posting.date = req.body.date;
			posting.cost = req.body.cost;
			posting.capacity = req.body.capacity;
			posting.comments = req.body.comments;

			posting.save().then(posting => {
				res.json('Update successful');
			}).catch(err => {
				res.status(400).send('Update failed');
			});
		}
	});
});

router.route('/postings/delete/:id').get((req, res) => {
	Posting.findByIdAndRemove(req.params.id, (err, posting) => {
		if(err)
		{
			console.log(_id);
			res.json(err);
		}
		else
			res.json('Remove successful');
	});
});

app.use('/', router);
//app.get('/', (req, res) => res.send('Hello World'));
app.listen(4000, () => console.log('Express server running on port 4000'));

