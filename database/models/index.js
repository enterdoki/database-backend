const Airbnb = require('./airbnb');
const Services = require('./services');
const Report = require('./report');
const Complaint = require('./complaint');
const ComplaintLocation = require('./complaint_location');
const IncidentZip = require('./incident_zip');
const Respondent = require('./respondent');

Complaint.belongsTo(Respondent, {foreignKey: 'respondent_id'});
Respondent.hasMany(Complaint, {foreignKey: 'unique_id'});

Complaint.belongsTo(ComplaintLocation, {foreignKey: 'complaint_location_id'});
ComplaintLocation.hasMany(Complaint, {foreignKey: 'unique_id'});

IncidentZip.hasMany(ComplaintLocation, {foreignKey: 'complaint_location_id'});
ComplaintLocation.belongsTo(IncidentZip, {foreignKey: 'zip'});

module.exports = {
    Airbnb,
    Services,
    Report,
    Complaint,
    ComplaintLocation,
    IncidentZip,
    Respondent,
};