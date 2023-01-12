import React from 'react';
import { toast } from 'react-toastify';
//============================================
import WebSocket from './WebSocket';
import * as CONTANTS from '../../../constants';
import * as Components from '../../../components';

class NotificationSocket extends WebSocket {

	anotherSubscribes = () => {
		this.onEntryCreated();
		this.onChangeMark();
		this.onChangeOfferStatus();
	};

	onChangeMark = () => {
		this.socket.on(CONTANTS.CHAT_CONSTANTS.NOTIFICATION_CHANGE_MARK, () => {
			toast('Someone liked your offer');
		});
	};

	onChangeOfferStatus = () => {
		this.socket.on(CONTANTS.CHAT_CONSTANTS.NOTIFICATION_CHANGE_OFFER_STATUS, (message) => {
			toast(
				<Components.UI.Notification
					message={message.message}
					contestId={message.contestId} />
			);
		});
	};

	onEntryCreated = () => {
		this.socket.on(CONTANTS.CHAT_CONSTANTS.NOTIFICATION_ENTRY_CREATED, () => {
			toast('New Entry');
		});
	};

	subscribe = (id) => {
		this.socket.emit(CONTANTS.CHAT_CONSTANTS.SOCKET_SUBSCRIBE, id);
	};

	unsubscribe = (id) => {
		this.socket.emit(CONTANTS.CHAT_CONSTANTS.SOCKET_UNSUBSCRIBE, id);
	}
}

export default NotificationSocket;
