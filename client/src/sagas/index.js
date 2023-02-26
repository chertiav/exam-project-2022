import { takeLatest } from "redux-saga/effects";
//==============================================
import ACTIONS_TYPES from '../store/actions/actionsTypes';
import * as authSagas from './authSaga';
import * as userSaga from './userSaga';
import * as contestSagas from './contestSaga';
import * as paymentSaga from './paymentSaga';
import * as offerSaga from './offerSaga';
import * as chatSagas from './chatSagas';

function* rootSaga() {
	//auth
	yield takeLatest(ACTIONS_TYPES.AUTH_LOGIN_ACTION, authSagas.authLoginSaga);
	yield takeLatest(ACTIONS_TYPES.AUTH_REGISTRATION_ACTION, authSagas.registerSaga);

	//user
	yield takeLatest(ACTIONS_TYPES.GET_USER_ACTION, userSaga.getUserSaga);
	yield takeLatest(ACTIONS_TYPES.UPDATE_USER_ACTION, userSaga.updateUserDataSaga);

	//contest
	yield takeLatest(ACTIONS_TYPES.GET_CONTESTS_CUSTOMER_ACTION, contestSagas.getCustomerContestSaga);
	yield takeLatest(ACTIONS_TYPES.GET_CONTESTS_CREATIVE_ACTION, contestSagas.getActiveContestsSaga);
	yield takeLatest(ACTIONS_TYPES.GET_CONTESTS_MODERATOR_ACTION, contestSagas.getModeratorContestSaga);
	yield takeLatest(ACTIONS_TYPES.GET_COUNT_OFFERS_BY_CONTEST_ACTION, contestSagas.getCountOffersByContestSaga);
	yield takeLatest(ACTIONS_TYPES.GET_DATA_FOR_CONTEST_ACTION, contestSagas.getDataForContestSaga);
	yield takeLatest(ACTIONS_TYPES.GET_CONTEST_BY_ID_ACTION, contestSagas.getContestByIdSaga);
	yield takeLatest(ACTIONS_TYPES.UPDATE_CONTEST_ACTION, contestSagas.updateContestSaga);

	//payment
	yield takeLatest(ACTIONS_TYPES.PAYMENT_ACTION, paymentSaga.paymentSaga);
	yield takeLatest(ACTIONS_TYPES.CASHOUT_ACTION, paymentSaga.cashoutSaga);

	//offer
	yield takeLatest(ACTIONS_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_ACTION, offerSaga.getAllOffersByContestIdSaga);
	yield takeLatest(ACTIONS_TYPES.ADD_NEW_OFFER_ACTION, offerSaga.addOfferSaga);
	yield takeLatest(ACTIONS_TYPES.SET_OFFER_STATUS_ACTION, offerSaga.setOfferStatusSaga);
	yield takeLatest(ACTIONS_TYPES.CHANGE_MARK_ACTION, offerSaga.changeMarkSaga);

	//CHAT
	yield takeLatest(ACTIONS_TYPES.GET_PREVIEW_CHAT_ACTION, chatSagas.previewSaga);
	yield takeLatest(ACTIONS_TYPES.SEND_MESSAGE_ACTION, chatSagas.sendMessageSaga);
	//CHAT CATALOG
	yield takeLatest(ACTIONS_TYPES.CREATE_CATALOG_ACTION, chatSagas.createCatalogSaga);
	yield takeLatest(ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_ACTION, chatSagas.addChatToCatalogSaga);
	yield takeLatest(ACTIONS_TYPES.GET_CATALOG_LIST_ACTION, chatSagas.getCatalogListSaga);
	yield takeLatest(ACTIONS_TYPES.CHANGE_CATALOG_NAME_ACTION, chatSagas.changeCatalogNameSaga);
	yield takeLatest(ACTIONS_TYPES.DELETE_CATALOG_ACTION, chatSagas.deleteCatalogSaga);
	yield takeLatest(ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_ACTION, chatSagas.removeChatFromCatalogSaga);
	//CHAT DIALOG
	yield takeLatest(ACTIONS_TYPES.GET_DIALOG_MESSAGES_ACTION, chatSagas.getDialogMessagesSaga);
	//CHAT MANAGMENT OPERATIONS
	yield takeLatest(ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_ACTION, chatSagas.changeChatFavoriteSaga);
	yield takeLatest(ACTIONS_TYPES.CHANGE_CHAT_BLOCK_ACTION, chatSagas.changeChatBlockSaga);

};

export default rootSaga;