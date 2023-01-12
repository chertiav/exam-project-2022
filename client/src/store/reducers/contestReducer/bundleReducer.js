import ACTIONS_TYPES from '../../actions/actionsTypes';

const initialState = {
	bundle: null,
};

const bundleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS_TYPES.SELECT_BUNDLE_ACTION:
			return {
				...state,
				bundle: payload,
			};
		case ACTIONS_TYPES.CLEAR_BUNDLE_ACTION:
			return {
				...state,
				bundle: null,
			};
		default:
			return state;
	}
}

export default bundleReducer;
