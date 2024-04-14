'use strict'
/* ___________________ STOCK API ___________________ */
const express = require('express')
const app = express()

require('dotenv').config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;

require('express-async-errors')

/* _________________ Connection _________________ */
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/* __________________ Middlewares __________________ */

app.use(express.json())

app.use(require('./src/middlewares/logger'))

app.use(require('./src/middlewares/queryHandler'))

/* _____________________ Routes ____________________ */

app.all("/", (req, res) => {
	res.send({
		error: false,
		message: "Welcome to STOCK API",
	});
});

app.use(require('./src/routes'))

/* _____________________ OTHERS ____________________ */

app.use(require('./src/middlewares/errorHandler'));

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
// require('./src/helpers/sync'); 