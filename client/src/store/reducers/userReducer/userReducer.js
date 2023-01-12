import ACTIONS_TYPES from '../../actions/actionsTypes';

const initialState = {
	isFetching: false,
	error: null,
	data: null,
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//getUser
		case ACTIONS_TYPES.GET_USER_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null,
				data: null,
			};
		case ACTIONS_TYPES.GET_USER_SUCCESS:
			return {
				...state,
				error: null,
				isFetching: false,
				data: payload,
			};
		case ACTIONS_TYPES.GET_USER_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
				data: null,
			};
		//userStore
		case ACTIONS_TYPES.CLEAR_USER_STORE:
			return {
				...state,
				data: null,
				error: null,
			};
		//updateUser
		case ACTIONS_TYPES.UPDATE_USER_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTIONS_TYPES.UPDATE_USER_SUCCESS:
			return {
				...state,
				data: { ...state.data, ...payload },
				error: null,
				isFetching: false,
			};
		case ACTIONS_TYPES.UPDATE_USER_ERROR:
			return {
				...state,
				error: payload,
			};
		//clearErrorUpdateUser
		case ACTIONS_TYPES.CLEAR_USER_ERROR:
			return {
				...state,
				error: null,
			};
		default: return state;
	}
};

export default userReducer;