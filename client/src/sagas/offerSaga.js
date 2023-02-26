import { put } from 'redux-saga/effects';
//===============================================
import * as restController from '../api/rest/restController';
import { contestActions, offerActions } from '../store/actions';

export function* getAllOffersByContestIdSaga({ payload }) {
	yield put(offerActions.getAllOffersByContestIdRequest());
	try {
		const { data } = yield restController.getAllOffersByContestId(payload);
		yield put(offerActions.getAllOffersByContestIdSuccess(data));
	} catch (error) {
		yield put(offerActions.getAllOffersByContestIdError(error.response));
	}
}

export function* addOfferSaga({ payload }) {
	yield put(offerActions.addNewOfferRequest());
	try {
		const { data } = yield restController.addNewOffer(payload.data);
		yield put(contestActions.getCountOffersByContestdActions(payload.id));
		yield put(offerActions.addNewOfferSuccess(data));
	} catch (error) {
		yield put(offerActions.addNewOfferError(error.response));
	}
}

export function* deleteOfferSaga({ payload }) {
	yield put(offerActions.deleteOffersRequest());
	try {
		yield restController.deleteOffer(payload);
		yield put(offerActions.deleteOffersSuccess(payload));
	} catch (error) {
		yield put(offerActions.deleteOffersError(error.response));
	}
}

export function* setOfferStatusSaga({ payload }) {
	yield put(offerActions.setOfferStatusRequest());
	try {
		const { data } = yield restController.setOfferStatus(payload);
		yield put(offerActions.setOfferStatusSuccess(data));
	} catch (error) {
		yield put(offerActions.setOfferStatusError(error.response));
	}
}

export function* setOfferStatusModeratorSaga({ payload }) {
	yield put(offerActions.setOfferStatusRequest());
	try {
		const { data } = yield restController.setOfferStatusModerator(payload);
		yield put(offerActions.setOfferStatusModeratorSuccess(data));
	} catch (error) {
		yield put(offerActions.setOfferStatusError(error.response));
	}
}

export function* changeMarkSaga({ payload }) {
	yield put(offerActions.changeMarkRequest());
	try {
		const { data } = yield restController.changeMark(payload);
		yield put(offerActions.changeMarkSuccess({
			...data,
			offerId: payload.offerId,
			mark: payload.mark
		}));
	} catch (error) {
		yield put(offerActions.changeMarkError(error.response));
	}
}
