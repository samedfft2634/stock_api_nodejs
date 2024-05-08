"use strict";
/* ___________________ STOCK API ___________________ */
const express = require("express");
const path = require("node:path");
const app = express();

require("dotenv").config({ path: __dirname + "/.env" });
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;

require("express-async-errors");

app.use(express.static(path.join(__dirname, "public")));


/* _________________ Connection _________________ */
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* __________________ Middlewares __________________ */

app.use(express.json());

app.use("/upload", express.static("./upload"));

app.use(require("cors")());

app.use(require("./src/middlewares/authentication"));

// app.use(require("./src/middlewares/logger"));

app.use(require("./src/middlewares/queryHandler"));

/* _____________________ Routes ____________________ */

app.all("/api/v1", (req, res) => {
	res.send({
		error: false,
		message: "Welcome to STOCK API",
		docs: {
			swagger: "/api/v1/documents/swagger",
			redoc: "/api/v1/documents/redoc",
			json: "/api/v1/documents/json",
		},
		user: req.user,
	});
});

app.use('/api/v1',require("./src/routes"));

/* _____________________ OTHERS ____________________ */

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));

// if (process.env.NODE_ENV == "development") {
// 	require("./src/configs/sync")();
// }
  
// require("./src/helpers/sync")();
// node swaggerAutogen.js => for swagger Documentations
