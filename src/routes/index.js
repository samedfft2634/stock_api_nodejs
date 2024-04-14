'use strict'
/* __________________ index Router _________________ */
const router = require('express').Router();
// URL: /


// user:
router.use('/users', require('./user'))


/* ______________________________________________ */
module.exports = router 