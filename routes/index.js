const router = require('express').Router();
const boroughRoute = require('./borough');
const serviceRoute = require('./service');
const reportRoute = require('./report');

router.use('/borough', boroughRoute);
router.use('/service', serviceRoute);
router.use('/report', reportRoute);

router.use((req, res, next) => {
    res.status(200).send("Default API route.");
})


module.exports = router;