"use strict";
/* _________________ Syncronization ________________ */

module.exports = async function () {
	return null;

	/* REMOVE DATABASE */
	const { mongoose } = require("../configs/dbConnection");
	await mongoose.connection.dropDatabase();
	console.log("- Database and all data DELETED!");
};
