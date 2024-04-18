"use strict";
/* ___________________ Brand Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* ________________ Sample Data ______________________ *
{
        "name": "Adidas",
        "image": "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
    }
/* ______________________________________________ */
const BrandSchema = new mongoose.Schema(
	{
	
        name:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },

        image:{
            type:String,
            trim:true
        }

	},
	{
		collection: "brands",
		timestamps: true,
	}
);

module.exports = mongoose.model("Brand", BrandSchema);
