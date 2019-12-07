const Sequelize = require('sequelize');
const db = require('../db');

const IncidentZip = db.define('incident_zip', {
    zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    borough: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    timestamps:false
})

module.exports = IncidentZip;