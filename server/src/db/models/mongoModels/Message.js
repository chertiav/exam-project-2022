const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const messageSchema = new Schema({
	sender: {
		type: 'Number',
		required: true,
	},
	body: {
		type: 'String',
		required: true,
	},
	conversation: {
		type: Schema.Types.ObjectId,
		required: true,
	},
}, {
	timestamps: true,
});

const Message = mongoose.model('Messages', messageSchema);

module.exports = Message;
