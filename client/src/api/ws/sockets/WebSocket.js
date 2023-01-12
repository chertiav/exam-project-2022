import socketIoClient from 'socket.io-client';
//=============================================
import * as CONSTANTS from '../../../constants';

class WebSocket {
	constructor(dispatch, getState, room) {
		this.dispatch = dispatch;
		this.getState = getState;
		this.socket = socketIoClient(`${CONSTANTS.APP_CONSTANTS.BASE_URL}${room}`, { origins: 'localhost:*' });
		this.listen();
	}
	listen = () => {
		this.socket.on(CONSTANTS.CHAT_CONSTANTS.SOCKET_CONNECT, () => {
			this.anotherSubscribes();
		});
	};

	anotherSubscribes = () => { };

}

export default WebSocket;
