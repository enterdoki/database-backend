const express = require('express');
const bodyParser = require('body-parser');
const report = express.Router();
const db = require('../database');

report.use(bodyParser.json());

report.get('/', async (req, res, next) => {
    try {
        const data = await db.query(`SELECT * FROM reports`);
        if (data) {
            res.status(200).json(data[0]);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

report.post('/', async (req, res, next) => {
    try {
        if (req.body.description) {
            await db.query(`INSERT INTO reports VALUES (DEFAULT, "${req.body.severity}", "${req.body.description}", ${req.body.latitude}, ${req.body.longitude}, DEFAULT)`)

            res.status(201).send('The following user report has been added.')
        } else {
            await db.query(`INSERT INTO reports VALUES (DEFAULT, "${req.body.severity}", ${req.body.latitude}, ${req.body.longitude}, DEFAULT)`)

            res.status(201).send('The following user report has been added.');
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = report;