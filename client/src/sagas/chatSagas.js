import { put, select } from 'redux-saga/effects';
import isEqual from 'lodash/isEqual';
//====================================================
import * as restController from '../api/rest/restController';
import { chatActions } from '../store/actions';

//CHAT
export function* previewSaga() {
	try {
		const { data } = yield restController.getPreviewChat();
		yield put(chatActions.getPreviewChatSuccess(data));
	} catch (error) {
		yield put(chatActions.getPreviewChatError(error.response));
	}
};

export function* sendMessageSaga({ payload }) {
	try {
		const { data } = yield restController.newMessage(payload);
		const { messagesPreview } = yield select((state) => state.chatStore);
		let isNew = true;
		messagesPreview.forEach((preview) => {
			if (isEqual(preview.participants, data.message.participants)) {
				preview.text = data.message.body;
				preview.sender = data.message.sender;
				preview.createAt = data.message.createdAt;
				isNew = false;
			}
		});
		if (isNew) {
			messagesPreview.push(data.preview);
		}
		const messageData = {
			message: data.message,
			messagesPreview,
			chatData: {
				_id: data.preview._id,
				participants: data.preview.participants,
				favoriteList: data.preview.favoriteList,
				blackList: data.preview.blackList,
			}
		}
		yield put(chatActions.sendMessageSuccess(messageData));
	} catch (error) {
		yield put(chatActions.sendMessageError(error.response));
	}
}


//CHAT CATALOG
export function* getCatalogListSaga({ payload }) {
	try {
		const { data } = yield restController.getCatalogList(payload);
		yield put(chatActions.getCatalogListSuccess(data));
	} catch (error) {
		yield put(chatActions.getCatalogListError(error.response));
	}
}
export function* createCatalogSaga({ payload }) {
	try {
		const { data } = yield restController.createCatalog(payload);
		yield put(chatActions.createCatalogSuccess(data));
	} catch (error) {
		yield put(chatActions.createCatalogError(error.response));
	}
};
export function* addChatToCatalogSaga({ payload }) {
	try {
		const { data } = yield restController.addChatToCatalog(payload);
		const { catalogList } = yield select((state) => state.chatStore);
		for (let i = 0; i < catalogList.length; i++) {
			if (catalogList[i]._id === data._id) {
				catalogList[i].chats = data.chats;
				break;
			}
		}
		yield put(chatActions.addChatToCatalogSuccess(catalogList));
	} catch (error) {
		yield put(chatActions.addChatToCatalogError(error.response));
	}
}
export function* changeCatalogNameSaga({ payload }) {
	try {
		const { data } = yield restController.changeCatalogName(payload);
		const { catalogList } = yield select((state) => state.chatStore);
		for (let i = 0; i < catalogList.length; i++) {
			if (catalogList[i]._id === data._id) {
				catalogList[i].catalogName = data.catalogName;
				break;
			}
		}
		const catalogName = {
			catalogList,
			currentCatalog: data
		}
		yield put(chatActions.changeCatalogNameSuccess(catalogName));
	} catch (error) {
		yield put(chatActions.changeCatalogNameError(error.response));
	}
}
export function* deleteCatalogSaga({ payload }) {
	try {
		yield restController.deleteCatalog(payload);
		yield put(chatActions.deleteCatalogSuccess(payload));
	} catch (error) {
		yield put(chatActions.deleteCatalogError(error.response));
	}
}
export function* removeChatFromCatalogSaga({ payload }) {
	try {
		const { data } = yield restController.removeChatFromCatalog(payload);
		const { catalogList } = yield select((state) => state.chatStore);
		for (let i = 0; i < catalogList.length; i++) {
			if (catalogList[i]._id === data._id) {
				catalogList[i].chats = data.chats;
				break;
			}
		}
		const removeChat = { catalogList, currentCatalog: data }
		yield put(chatActions.removeChatFromCatalogSuccess(removeChat));
	} catch (error) {
		yield put(chatActions.removeChatFromCatalogError(error.response));
	}
}

//CHAT DIALOG
export function* getDialogMessagesSaga({ payload }) {
	try {
		const { data } = yield restController.getDialogMessages(payload);
		yield put(chatActions.getDialogMessagesSuccess(data));
	} catch (error) {
		yield put(chatActions.getDialogMessagesError(error.response));
	}
}

//CHAT MANAGMENT OPERATIONS
export function* changeChatFavoriteSaga({ payload }) {
	try {
		const { data } = yield restController.changeChatFavorite(payload);
		const { messagesPreview } = yield select((state) => state.chatStore);
		messagesPreview.forEach((preview) => {
			if (isEqual(preview.participants, data.participants)) preview.favoriteList = data.favoriteList;
		});
		const chatFavorite = {
			changedPreview: data,
			messagesPreview
		}
		yield put(chatActions.changeChatFavoriteSuccess(chatFavorite));
	} catch (error) {
		yield put(chatActions.changeChatFavoriteError(error.response));
	}
}
export function* changeChatBlockSaga({ payload }) {
	try {
		const { data } = yield restController.changeChatBlock(payload);
		const { messagesPreview } = yield select((state) => state.chatStore);
		messagesPreview.forEach((preview) => {
			if (isEqual(preview.participants, data.participants)) preview.blackList = data.blackList;
		});
		const chatBlock = {
			messagesPreview,
			chatData: data
		}
		yield put(chatActions.changeChatBlockSuccess(chatBlock));
	} catch (error) {
		yield put(chatActions.changeChatBlockError(error.response));
	}
}
