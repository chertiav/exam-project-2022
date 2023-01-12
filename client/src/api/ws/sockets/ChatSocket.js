import isEqual from 'lodash/isEqual';
//======================================
import WebSocket from './WebSocket';
import * as CONTANTS from '../../../constants';
import { chatActions } from '../../../store/actions';

class ChatSocket extends WebSocket {

	anotherSubscribes = () => {
		this.onNewMessage();
		this.onChangeBlockStatus();
	};

	onChangeBlockStatus = () => {
		this.socket.on(CONTANTS.CHAT_CONSTANTS.CHANGE_BLOCK_STATUS, (data) => {
			const { message } = data;
			const { messagesPreview } = this.getState().chatStore;
			messagesPreview.forEach((preview) => {
				if (isEqual(preview.participants, message.participants)) preview.blackList = message.blackList;
			});
			this.dispatch(chatActions.changeChatBlockSuccess({ chatData: message, messagesPreview }));
		});
	};

	onNewMessage = () => {
		this.socket.on(CONTANTS.CHAT_CONSTANTS.NEW_MESSAGE, (data) => {
			const { messagesPreview } = this.getState().chatStore;
			const { message, preview } = data.message;
			let isNew = true;
			messagesPreview.forEach((preview) => {
				if (isEqual(preview.participants, message.participants)) {
					preview.text = message.body;
					preview.sender = message.sender;
					preview.createAt = message.createdAt;
					isNew = false;
				}
			});
			if (isNew) {
				messagesPreview.push(preview);
			}
			this.dispatch(chatActions.sendMessageSuccess({
				message, messagesPreview
			}));
		});
	};

	subscribeChat = (id) => {
		this.socket.emit(CONTANTS.CHAT_CONSTANTS.SOCKET_SUBSCRIBE_CHAT, id);
	};

	unsubscribeChat = (id) => {
		this.socket.emit(CONTANTS.CHAT_CONSTANTS.SOCKET_UNSUBSCRIBE_CHAT, id);
	};
}

export default ChatSocket;
