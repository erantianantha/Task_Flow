const dotenv = require('dotenv');
const express = require('express');
const unless = require('express-unless');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('../server/Routes/userRoute');
const boardRoute = require('../server/Routes/boardRoute');
const listRoute = require('../server/Routes/listRoute');
const cardRoute = require('../server/Routes/cardRoute');
const auth = require('../server/Middlewares/auth');

dotenv.config();
const app = express();

app.use(cors({
	origin: [
		'http://localhost:3000', 
		'http://localhost:3001', 
		'https://task-flow-rose-nine.vercel.app',
		'https://*.vercel.app',
		'https://vercel.app'
	],
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// AUTH VERIFICATION AND UNLESS
auth.verifyToken.unless = unless;

app.use(
	auth.verifyToken.unless({
		path: [
			{ url: '/user/login', method: ['POST'] },
			{ url: '/user/register', method: ['POST'] },
		],
	})
);

//MONGODB CONNECTION
mongoose.Promise = global.Promise;
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Database connection is successful!');
	})
	.catch((err) => {
		console.log(`Database connection failed!`);
		console.log(`Details : ${err}`);
	});

// Health check endpoint
app.get('/', (req, res) => {
	res.json({ 
		message: 'TaskFlow Backend API is running!', 
		status: 'success',
		timestamp: new Date().toISOString()
	});
});

//ROUTES
app.use('/user', userRoute);
app.use('/board', boardRoute);
app.use('/list', listRoute);
app.use('/card', cardRoute);

// Export for Vercel
module.exports = app;
