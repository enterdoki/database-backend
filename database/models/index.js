const Airbnb = require('./airbnb');
const Services = require('./services');
const Report = require('./report');
const Complaint = require('./complaint');
const ComplaintLocation = require('./complaint_location');
const IncidentZip = require('./incident_zip');
const Respondent = require('./respondent');

Complaint.belongsTo(Respondent);
Respondent.hasMany(Complaint);

Complaint.belongsTo(ComplaintLocation);
ComplaintLocation.hasMany(Complaint);

IncidentZip.hasMany(ComplaintLocation);
ComplaintLocation.belongsTo(IncidentZip);

module.exports = {
    Airbnb,
    Services,
    Report,
    Complaint,
    ComplaintLocation,
    IncidentZip,
    Respondent
};