'use strict'
/* __________________ Firm Router __________________ */
const router = require('express').Router();

const { isAdmin, isStaff } = require("../middlewares/permissions");
const { create, read, update, delete:deleteFirm} = require('../controllers/firm')

// URL: /firms

router.route('/(:id)?') 
.post(isAdmin, create)
.get(isStaff, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deleteFirm)

module.exports = router