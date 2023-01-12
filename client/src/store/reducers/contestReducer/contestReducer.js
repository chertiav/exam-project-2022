import ACTIONS_TYPES from '../../actions/actionsTypes';
import * as CONSTANTS from '../../../constants';

const initialState = {
	isFetching: false,
	error: null,
	contests: [],
	customerFilter: CONSTANTS.APP_CONSTANTS.CONTEST_STATUS_ACTIVE,
	creatorFilter: {
		typeIndex: 1,
		contestId: '',
		industry: '',
		awardSort: 'asc',
		ownEntries: false,
	},
	haveMore: true,
};

const contestsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//getContest
		case ACTIONS_TYPES.GET_CONTESTS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case ACTIONS_TYPES.GET_CONTESTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				contests: [...state.contests, ...payload.contests],
				haveMore: payload.haveMore,
			};
		case ACTIONS_TYPES.GET_CONTESTS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
				contests: [],
			};
		case ACTIONS_TYPES.SET_NEW_CUSTOMER_FILTER:
			return {
				...state,
				isFetching: false,
				customerFilter: payload,
			};
		case ACTIONS_TYPES.SET_NEW_CREATOR_FILTER:
			return {
				...state,
				isFetching: false,
				creatorFilter: { ...state.creatorFilter, ...payload },
			};
		case ACTIONS_TYPES.CLEAR_CONTESTS_LIST:
			return {
				...state,
				error: null,
				contests: [],
			};
		default: return state;
	}
};

export default contestsReducer;
