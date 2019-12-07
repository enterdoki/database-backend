const express = require('express');
const bodyParser = require('body-parser');
const service = express.Router();
const Services = require('../database/models/services');
const db = require('../database/db');

service.use(bodyParser.json());

service.get('/', async (req, res, next) => {
    try {
        const data = await Services.findAll({
        });
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

service.get('/count', async (req, res, next) => {
    try {
        const data = await db.query(
    `SELECT
        city AS neighbourhood,
        count(city) AS count
    FROM
        services
    WHERE
        city <> ' '
        AND city <> 'BROOKLYN'
        AND city <> 'QUEENS'
        AND city <> 'STATEN ISLAND'
        AND city <> 'MANHATTAN'
        AND city <> 'BRONX'
        AND city <> 'NEW YORK'
    GROUP BY
        neighbourhood
    ORDER BY
        count DESC
        LIMIT 8;
    `);
        if (data) {
            res.status(200).json(data[0]);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})
service.get('/:borough', async (req, res, next) => {
    try {
        const data = await Services.findAll({
            where: { borough: req.params.borough }
        })
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = service;