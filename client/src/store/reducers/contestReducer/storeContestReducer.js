import ACTION_TYPES from '../../actions/actionsTypes';

const initialState = {
	contests: {},
};

const storeContestReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPES.SAVE_CONTEST_TO_STORE:
			return {
				...state,
				contests: {
					...state.contests,
					...{ [payload.type]: payload.info }
				},
			};
		case ACTION_TYPES.CLEAR_CONTEST_STORE:
			return initialState;
		default:
			return state;
	}
}

export default storeContestReducer;
