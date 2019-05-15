import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Posting from './models/postings';
import User from './models/users';

const app = express();
const router = express.Router();

var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "wmc3v88r36cbxjjz",
  publicKey: "6shw5z43m37vntj8",
  privateKey: "701dd692aaf7a6959a43f9736ea9a4ff"
});

app.use(cors());
app.use(bodyParser.json());

//Establish MongoDB connection, default database is postings
mongoose.connect('mongodb://localhost:27017/postings');

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully!')
});

//Router information for braintree payments
router.route('/customers').get((req, res) => {
	gateway.transaction.search(function (search) {
	}, function (err, response) {
		console.log(response.searchResponse);
		response.each(function (err, customer) {
			console.log(customer);
		});
	});
});

router.route('/customers/add/:username').get((req, res) => {
	console.log(req.params.username);
	gateway.customer.create({
	username: req.params.username,
	}, function (err, result) {
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(result);
			User.findById(req.body._id, (err, user) => {
				if(!user)
					return next(new Error('Could not load'));
				else
				{
					user.name = req.body.name;
					user.username = req.body.username;
					user.address = req.body.address;
					user.birthdate = req.body.birthdate;
					user.email = req.body.email;
					user.gender = req.body.gender;
					user.phone_number = req.body.phone_number;
					user.rides_given = req.body.rides_given;
					user.rides_received = req.body.rides_received;
					user.payment_id = result.customer.id;


					user.save().then(user => {
						res.json('Update successful');
					}).catch(err => {
						res.status(400).send('Update failed');
					});
				}
			});
			result.cusomer.id;
		}
	});
});

//Router information for user database
router.route('/users').get((req, res) => {
	User.find((err, users) => {
		if(err)
			console.log(err);
		else
			res.json(users);
	});
});

router.route('/users/:id').get((req, res) => {
	User.findById(req.params.id, (err, users) => {
		if(err)
			console.log(err);
		else
			res.json(users);
	});
});

router.route('/users/add').post((req, res) => {
	let user = new User(req.body);
	user.save()
		.then(user => {
			res.status(200).json({'user': 'Added successfully'});
		})
		.catch(err => {
			res.status(400).send('Failed to create new user');
		});
});

router.route('/users/update/:id').post((req, res) => {
	User.findById(req.params.id, (err, user) => {
		if(!user)
			return next(new Error('Could not load'));
		else
		{
			user.name = req.body.name;
			user.username = req.body.username;
			user.address = req.body.address;
			user.birthdate = req.body.birthdate;
			user.email = req.body.email;
			user.gender = req.body.gender;
			user.phone_number = req.body.phone_number;
			user.rides_given = req.body.rides_given;
			user.rides_received = req.body.rides_received;
			user.payment_id = req.body.payment_id;

			user.save().then(user => {
				res.json('Update successful');
			}).catch(err => {
				res.status(400).send('Update failed');
			});
		}
	});
});

router.route('/users/delete/:id').get((req, res) => {
	User.findByIdAndRemove(req.params.id, (err, user) => {
		if(err)
		{
			console.log(_id);
			res.json(err);
		}
		else
			res.json('Remove successful');
	});
});

//Router information for postings database
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
		.then(posting => {
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

