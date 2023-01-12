import ACTION_TYPES from '../../../store/actions/actionsTypes';

const initialState = {
	isFetching: true,
	data: null,
	error: null,
};

const dataForContestReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.GET_DATA_FOR_CONTEST_REQUEST:
			return {
				...state,
				isFetching: true,
				data: null,
				error: null,
			};
		case ACTION_TYPES.GET_DATA_FOR_CONTEST_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: payload,
				error: null,
			};
		case ACTION_TYPES.GET_DATA_FOR_CONTEST_ERROR:
			return {
				...state,
				isFetching: true,
				data: null,
				error: payload,
			};
		case ACTION_TYPES.CLEAR_PREFERENCE:
			return initialState;
		default:
			return state;
	}
}

export default dataForContestReducer;