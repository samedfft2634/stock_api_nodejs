"use strict";
/* ___________________ Product Model __________________ */
const { mongoose } = require("../configs/dbConnection");

const ProductSchema = new mongoose.Schema(
	{
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},

		brandId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Brand",
			required: true,
		},

		name: {
			type: String,
			trim: true,
			required: true,
			// different brands could have same product, so not unique.
		},

		quantity: {
			type: Number,
			default: 0,
		},
	},
	{
		collection: "products",
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", ProductSchema);
