const Sequelize = require('sequelize');
const db = require('../db');

const Respondent = db.define('respondent', {
    respondent_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    agency_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
},{
    timestamps:false
})

module.exports = Respondent;