'use strict'
/* __________________ index Router _________________ */
const router = require('express').Router();
// URL: /


// auth:
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// token:
router.use('/tokens', require('./token'))

// brand:
router.use('/brands', require('./brand'))
// category:
router.use('/categories', require('./category'))
// firm:
router.use('/firms', require('./firm'))
// product:
router.use('/products', require('./product'))

//document:
router.use('/documents',require('./document'))


/* ______________________________________________ */
module.exports = router 