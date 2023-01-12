import ACTIONS_TYPES from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS_TYPES.AUTH_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case ACTIONS_TYPES.AUTH_SUCCESS:
			return {
				...state,
				isFetching: false,
			};
		case ACTIONS_TYPES.AUTH_ERROR:
			return {
				...state,
				error: payload,
				isFetching: false,
			};
		case ACTIONS_TYPES.AUTH_CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		case ACTIONS_TYPES.AUTH_ACTION_CLEAR:
			return initialState;
		default: return state;
	}
};
export default authReducer;
