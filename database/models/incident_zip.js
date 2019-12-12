const Sequelize = require('sequelize');
const db = require('../db');

const IncidentZip = db.define('incident_zip', {
    incident_zip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    zip: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    borough: {
        type: Sequelize.STRING,
        allowNull: true,
    }
},{
    timestamps:false
})

module.exports = IncidentZip;