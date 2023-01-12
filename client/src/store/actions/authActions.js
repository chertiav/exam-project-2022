import ACTIONS_TYPES from './actionsTypes'

//auth
export const authLoginAction = (payload) => ({
	type: ACTIONS_TYPES.AUTH_LOGIN_ACTION,
	data: payload.data,
	navigate: payload.navigate,
});
export const authRegistrationAction = (payload) => ({
	type: ACTIONS_TYPES.AUTH_REGISTRATION_ACTION,
	data: payload.data,
	navigate: payload.navigate,
});
export const authRequest = () => ({
	type: ACTIONS_TYPES.AUTH_REQUEST
});
export const authSuccess = () => ({
	type: ACTIONS_TYPES.AUTH_SUCCESS,
});
export const authError = (payload) => ({
	type: ACTIONS_TYPES.AUTH_ERROR,
	payload
});
export const authActionClear = () => ({
	type: ACTIONS_TYPES.AUTH_ACTION_CLEAR,
});
export const authClearErrorSignUpAndLogin = () => ({
	type: ACTIONS_TYPES.AUTH_CLEAR_ERROR,
});