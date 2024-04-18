"use strict";
/* ___________________ Firm Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* ________________ Sample Data ______________________ *
{
        "name": "BOYNER",
        "phone": "0212 444 00 54",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boyner_Logo.jpg/800px-Boyner_Logo.jpg",
        "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye"
}
/* ______________________________________________ */
const FirmSchema = new mongoose.Schema(
	{
        name:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },

        phone:String,

        address:String,

        image:String,
	},
	{
		collection: "firms",
		timestamps: true,
	}
);

module.exports = mongoose.model("Firm", FirmSchema);
