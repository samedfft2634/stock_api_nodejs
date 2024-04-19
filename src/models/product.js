"use strict";
/* ___________________ Product Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* __________________ Sample Data __________________ *
{
        "_id": "65343222b67e9681f937f421",
        "name": "Tommy",
        "categoryId": "65343222b67e9681f937f203",
        "brandId": "65343222b67e9681f937f107",
        "quantity": 0
}
/* _________________________________________________ */
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

		price:{
            type:Number,
            // required:true,
			default:0
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
