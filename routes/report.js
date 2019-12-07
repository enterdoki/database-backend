const express = require('express');
const bodyParser = require('body-parser');
const report = express.Router();
const Report = require('../database/models/report');

report.use(bodyParser.json());

report.get('/', async (req, res, next) => {
    try {
        const data = await Report.findAll({
        });
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

report.post('/', async (req, res, next) => {
    try {
        if(req.body.description) {
            const data = await Report.create({
                severity: req.body.severity,
                description: req.body.description,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                date: Date.now()
            })
            res.status(201).send({'The following user report has been added: ': data});
        } else {
            const data = await Report.create({
                severity: req.body.severity,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                date: Date.now()
            })
            res.status(201).send({'The following user report has been added: ': data});
        } 
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = report;