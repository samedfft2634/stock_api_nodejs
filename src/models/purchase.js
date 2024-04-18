"use strict";
/* ___________________ Purchase Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* __________________ Sample Data __________________ *
{
    "userId": "65343222b67e9681f937f001",
    "firmId": "65343222b67e9681f937f304",
    "brandId": "65343222b67e9681f937f123",
    "productId": "65343222b67e9681f937f422",
    "quantity": 1000,
    "price": 20
}
/* ________________________________________________ */
const PurchaseSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		firmId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Firm",
			required: true,
		},

		brandId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Brand",
			required: true,
		},

		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},

        price:{
            type:Number,
            required:true,
        },

        quantity:{
            type:Number,
            default:1
        },

        amount:{
            type:Number,
            required:true,
            set:function(){ return this.price * this.quantity },
            default:function(){ return this.price * this.quantity },
            transform:function(){ return this.price * this.quantity },
        }

	},
	{
		collection: "purchases",
		timestamps: true,
	}
);

module.exports = mongoose.model("Purchase", PurchaseSchema);
