import { put } from 'redux-saga/effects';
//========================================
import * as restController from '../api/rest/restController';
import { controller } from '../api/ws/socketController';
import * as userActions from '../store/actions/userActions';

export function* getUserSaga() {
	yield put(userActions.getUserRequest());
	try {
		const { data } = yield restController.getUser();
		yield put(userActions.getUserSuccess(data));

		controller.subscribe(data.id);
	} catch (error) {
		yield put(userActions.getUserError(error.response));
	}
};

export function* updateUserDataSaga({ payload }) {
	yield put(userActions.updateUserRequest());
	try {
		const { data } = yield restController.updateUser(payload);
		yield put(userActions.updateUserSuccess(data));
		yield put(userActions.changeEditModeOnUserProfile(false));

	} catch (error) {
		yield put(userActions.updateUserError(error.response));
	}
}

