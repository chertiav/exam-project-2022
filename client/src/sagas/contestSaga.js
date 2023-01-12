import { put } from 'redux-saga/effects';
//===============================================
import * as restController from '../api/rest/restController';
import * as contestActions from '../store/actions/contestActions';

export function* getCustomerContestSaga({ payload }) {
	yield put(contestActions.getContestRequest());
	try {
		const { data } = yield restController.getCustomersContests(payload);
		yield put(contestActions.getContestSuccess(data));
	} catch (error) {
		yield put(contestActions.getContestError(error.response));
	}
};
export function* getActiveContestsSaga({ payload }) {
	yield put(contestActions.getContestRequest());
	try {
		const { data } = yield restController.getActiveContests(payload);
		yield put(contestActions.getContestSuccess(data));
	} catch (error) {
		yield put(contestActions.getContestError(error.response));
	}
}
export function* getDataForContestSaga({ payload }) {
	yield put(contestActions.getDataForContestRequest());
	try {
		const { data } = yield restController.getDataForContest(payload);
		yield put(contestActions.getDataForContestSuccess(data));
	} catch (error) {
		yield put(contestActions.getDataForContestError(error.response));
	}
}
export function* getContestByIdSaga({ payload }) {
	yield put(contestActions.getContestByIdRequest());
	try {
		const { data } = yield restController.getContestById(payload);
		yield put(contestActions.getContestByIdSuccess(data));
	} catch (error) {
		yield put(contestActions.getContestByIdError(error.response));
	}
}
export function* getCountOffersByContestSaga({ payload }) {
	yield put(contestActions.getCountOffersByContestdRequest());
	try {
		const { data } = yield restController.getCountOffersByContest(payload);
		yield put(contestActions.getCountOffersByContestdSuccess(data));
	} catch (error) {
		yield put(contestActions.getCountOffersByContestdError(error.response));
	}
}
export function* updateContestSaga({ payload }) {
	yield put(contestActions.updateContestRequest());
	try {
		const { data } = yield restController.updateContest(payload);
		yield put(contestActions.updateStoreAfterUpdateContest(data));
	} catch (error) {
		yield put(contestActions.updateContestError(error.response));
	}
}


