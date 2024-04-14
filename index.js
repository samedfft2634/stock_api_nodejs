'use strict'
/* ___________________ Stock API ___________________ */
const express = require('express')
const app = express()

require('dotenv').config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;

require('express-async-errors')

// Connection 
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

app.all("/", (req, res) => {
	res.send({
		error: false,
		message: "Welcome to STOCK API",
	});
});

/* ______________________________________________ */
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
// require('./src/helpers/sync'); 