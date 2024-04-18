'use strict'
/* __________________ Product Router __________________ */
const router = require('express').Router();

const { isAdmin, isStaff } = require("../middlewares/permissions");
const { create, read, update, delete:deleteProduct} = require('../controllers/product')

// URL: /products

router.route('/(:id)?') 
.post(isAdmin, create)
.get(isStaff, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deleteProduct)

module.exports = router