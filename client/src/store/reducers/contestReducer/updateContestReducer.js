import ACTION_TYPES from '../../actions/actionsTypes';

const initialState = {
	isFetching: true,
	error: null,
};

const updateContestReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.UPDATE_CONTEST_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTION_TYPES.UPDATE_CONTEST_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		case ACTION_TYPES.CLEAR_UPDATE_CONTEST_STORE:
			return initialState;
		default:
			return state;
	}
}

export default updateContestReducer;