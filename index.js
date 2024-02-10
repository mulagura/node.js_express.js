import express from 'express';
import bodyParser from 'body-parser';
// body-parser - extract the body content and exposes in req.body
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// telling we are going to use JSON data in whole app.

app.use('/users', userRoutes);

app.listen(PORT, () => {
console.log(`serer is running on port ${PORT}`);
});

// route
app.get('/', (req, res) => {
    console.log('Welcome to empty route, homepage');
    res.send('Hello, Server HomePage !!');
});

// get all

// get by id

// post

// patch

// delete
