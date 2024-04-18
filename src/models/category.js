"use strict";
/* ___________________ Category Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* ______________________________________________ *
 {
     "name": "Food",
 }
/* ______________________________________________ */
const CategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			unique: true,
            set: name => name.toUpperCase()
		},
	},
	{
		collection: "categories",
		timestamps: true,
	}
);

module.exports = mongoose.model("Category", CategorySchema);
