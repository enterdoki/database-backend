const Sequelize = require('sequelize');
const db = require('../db');

const ComplaintLocation = db.define('complaint_location', {
    complaint_location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    location_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    incident_address: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    timestamps:false
})

module.exports = ComplaintLocation;