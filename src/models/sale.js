"use strict";
/* ___________________ Sale Model __________________ */
const { mongoose } = require("../configs/dbConnection");
/* __________________ Sample Data __________________ *
{
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f422",
        "quantity": 100,
        "price": 30
}
/* ________________________________________________ */
const SaleSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
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
		collection: "sales",
		timestamps: true,
	}
);
/* _______________________ _ _______________________ */
SaleSchema.pre('init',function(document){

	document.__v = undefined
	document.createdAtStr = document.createdAt.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium'})
	document.updatedAtStr = document.createdAt.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium'})
	// document.createdAtStr = document.updatedAtStr = undefined

})
/* _______________________ _ _______________________ */
module.exports = mongoose.model("Sale", SaleSchema);
