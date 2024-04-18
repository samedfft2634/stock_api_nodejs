'use strict'
/* __________________ Brand Router __________________ */
const router = require('express').Router();

const { isAdmin, isStaff } = require("../middlewares/permissions");
const { create, read, update, delete:deleteBrand} = require('../controllers/brand')

// URL: /brands

router.route('/(:id)?') 
.post(isAdmin, create)
.get(isStaff, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deleteBrand)

module.exports = router