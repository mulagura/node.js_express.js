import express from "express";
// file data, data.json
import fs from 'fs';

// file 2 data, data2.json
import data2 from '../data2.json' assert {type: 'json'};

const router = express.Router();

// read data from data.json file
const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);
console.log(data);

// second data2
console.log(data2);

// read data from data2.json file in another way


// get all
router.get('/', (req, res) => {
    console.log('hello user');
    // res.send("Hello Users");
    res.send(data);
});


// get by id

router.post('/:id', (req, res) => {
    console.log('posting');
    const temp = req.body;
    res.send();
});

// post

router.post('/', (req, res) => {
    console.log('posting');
    res.send();
});

// patch

router.put('/', (req, res) => {
    console.log('posting');
    res.send();
});

// delete

router.delete('/', (req, res) => {
    console.log('posting');
    res.send();
});

export default router;
