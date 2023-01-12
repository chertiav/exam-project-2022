const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const catalogSchema = new Schema({
	userId: {
		type: 'Number',
		required: true,
	},
	catalogName: {
		type: 'String',
		required: true,
	},
	chats: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Conversation',
			required: false,
			unique: false,
		},
	],
});

const Catalog = mongoose.model('Catalogs', catalogSchema);
module.exports = Catalog;


