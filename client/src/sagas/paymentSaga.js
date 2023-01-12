import { put } from 'redux-saga/effects';
//========================================
import * as restController from '../api/rest/restController';
import * as actions from '../store/actions';
import * as CONSTANTS from '../constants';

export function* paymentSaga(payload) {
	yield put(actions.paymentActions.getPaymentRequest());
	try {
		yield restController.payMent(payload.data);
		payload.navigate('/dashboard');
		yield put(actions.contestActions.clearContestStore());
		yield put(actions.contestActions.clearBundle());
		yield put(actions.paymentActions.clearPaymentStore());
	} catch (error) {
		yield put(actions.paymentActions.getPaymentError(error.response));
	}
}
export function* cashoutSaga({ payload }) {
	yield put(actions.paymentActions.getPaymentRequest());
	try {
		const { data } = yield restController.cashOut(payload);
		yield put(actions.userActions.updateUserSuccess(data));
		yield put(actions.paymentActions.clearPaymentStore());
		yield put(actions.userActions
			.changeProfileModeView(CONSTANTS.USER_PROFILE.USER_INFO_MODE));
	} catch (error) {
		yield put(actions.paymentActions.getPaymentError(error.response));
	}
};