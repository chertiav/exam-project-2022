import ACTIONS_TYPES from '../actions/actionsTypes';

//getUser
export const getUserAction = () => ({
	type: ACTIONS_TYPES.GET_USER_ACTION,
});
export const getUserRequest = () => ({
	type: ACTIONS_TYPES.GET_USER_REQUEST
});
export const getUserSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_USER_SUCCESS,
	payload
});
export const getUserError = (payload) => ({
	type: ACTIONS_TYPES.GET_USER_ERROR,
	payload
});
//userStore
export const clearUserStore = () => ({
	type: ACTIONS_TYPES.CLEAR_USER_STORE,
});

//updateUser
export const updateUserAction = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_USER_ACTION,
	payload,
});
export const updateUserRequest = () => ({
	type: ACTIONS_TYPES.UPDATE_USER_REQUEST
});
export const updateUserSuccess = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_USER_SUCCESS,
	payload
})
export const updateUserError = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_USER_ERROR,
	payload
});

//clearErrorUpdateUser
export const clearUserError = () => ({
	type: ACTIONS_TYPES.CLEAR_USER_ERROR,
});

//UserProfile
export const changeEditModeOnUserProfile = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_EDIT_MODE_ON_USER_PROFILE,
	payload,
});
export const changeProfileModeView = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_PROFILE_MODE_VIEW,
	payload,
});