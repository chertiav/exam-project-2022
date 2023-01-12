import ACTION_TYPES from '../../actions/actionsTypes';

const initialState = {
	isFetching: true,
	errorCount: null,
	AllCountOffers: 0,
};

const getCountContestByIdReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//getCountOffersByContest
		case ACTION_TYPES.GET_COUNT_OFFERS_BY_CONTEST_REQUEST:
			return {
				...state,
				isFetching: true,
				errorCount: null,
			};
		case ACTION_TYPES.GET_COUNT_OFFERS_BY_CONTEST_SUCCESS:
			return {
				...state,
				AllCountOffers: payload.AllCountOffers
			};
		case ACTION_TYPES.GET_COUNT_OFFERS_BY_CONTEST_ERROR:
			return {
				...state,
				isFetching: false,
				errorGetCount: payload,
			};
		default:
			return state;
	}
};

export default getCountContestByIdReducer;
