"use strict";
/* ______________ Purchase Controller ______________ */
const Purchase = require("../models/purchase");
const Product = require("../models/product");

module.exports = {

	create: async (req, res) => {
		/*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Purchase 1"
                }
            }
        */

		req.body.userId = req.user._id

		const data = await Purchase.create(req.body);

		const updateProduct = await Product.updateOne({ _id: data.productId }, { $inc: { quantity: +data.quantity } } )

		res.status(201).send({
			error: false,
			data,
		});
	},

	read: async (req, res) => {
		/*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases or Get Single Purchase"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

		if (req.params?.id) {
            
            // Get Single Purchase
			const data = await Purchase.findOne({ _id: req.params.id }).populate([
				{path:'userId', select: 'username email'},
				{path:'firmId', select: 'name image'},
				'brandId',
				{path:'productId', select: 'name' ,populate:{path: 'categoryId'}},
			]);
			res.status(200).send({
				error: false,
				data,
			});
		} else {

            // List Purchases
			const data = await res.getModelList(Purchase, {}, [
				{path:'userId', select: 'username email'},
				{path:'firmId', select: 'name image'},
				'brandId',
				{path:'productId', select: 'name' ,populate:{path: 'categoryId'}},
			]);
			res.status(200).send({
				error: false,
				details: await res.getModelListDetails(Purchase),
				data,
			});
		}
	},

	update: async (req, res) => {
		/*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Purchase 1"
                }
            }
        */

		if(req.body?.quantity){
			const currentPurchase = await Purchase.findOne({ _id: req.params.id})

			const difference = req.body.quantity - currentPurchase.quantity

			const updateProduct = await Product.updateOne({ _id: currentPurchase.productId}, { $inc: { quantity: +difference}})
		}

		const data = await Purchase.updateOne(
			{ _id: req.params.id },
			req.body,
			{ runValidators: true }
		);
		res.status(202).send({
			error: false,
			data,
			new: await Purchase.findOne({ _id: req.params.id }),
		});
	},

	delete: async (req, res) => {
		/*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

		// Quantity, before deleting
		const currentPurchase = await Purchase.findOne({ _id: req.params.id})

		const data = await Purchase.deleteOne({ _id: req.params.id });

		const updateProduct = await Product.updateOne({ _id: currentPurchase.productId}, { $inc: { quantity: -currentPurchase.quantity}})

		res.status(data.deletedCount ? 204 : 404).send({
			error: !data.deletedCount,
			data,
		});
	},
};
