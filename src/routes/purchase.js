'use strict'
/* __________________ Purchase Router __________________ */
const router = require('express').Router();

const { isAdmin, isStaff } = require("../middlewares/permissions");
const { create, read, update, delete:deletePurchase} = require('../controllers/purchase')

// URL: /purchases

router.route('/(:id)?') 
.post(isAdmin, create)
.get(isStaff, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deletePurchase)

module.exports = router