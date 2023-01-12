import { put } from 'redux-saga/effects';
//==========================================
import * as restController from '../api/rest/restController';
import { authActions } from '../store/actions';

export function* authLoginSaga(payload) {
	yield put(authActions.authRequest());
	try {
		yield restController.loginRequest(payload.data);
		yield put(authActions.authSuccess());
		payload.navigate('/');
	} catch (error) {
		yield put(authActions.authError(error.response));
	}
};

export function* registerSaga(payload) {
	yield put(authActions.authRequest());
	try {
		yield restController.registerRequest(payload.data);
		yield put(authActions.authSuccess());
		payload.navigate('/');
	} catch (error) {
		yield put(authActions.authError(error.response));
	}
};
