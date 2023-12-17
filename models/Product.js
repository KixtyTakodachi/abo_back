import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true
	},
	incomeCost: {
		type: Number,
		required: true
	},
	sellCost: {
		type: Number,
		required: true
	},
	profit: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Product', productSchema)
