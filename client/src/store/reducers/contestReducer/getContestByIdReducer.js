import ACTION_TYPES from '../../actions/actionsTypes';

const initialState = {
	isFetching: true,
	contestData: null,
	error: null,
	isBrief: true,
	isEditContest: false,
	isShowOnFull: false,
	imagePath: null,
};

const getContestByIdReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//getContestById
		case ACTION_TYPES.GET_CONTEST_BY_ID_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTION_TYPES.GET_CONTEST_BY_ID_SUCCESS:
			return {
				...state,
				isFetching: false,
				contestData: payload,
				error: null,
			};
		case ACTION_TYPES.GET_CONTEST_BY_ID_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		//changeViewMode
		case ACTION_TYPES.CHANGE_CONTEST_VIEW_MODE:
			return {
				...state,
				isEditContest: false,
				isBrief: payload,
			};
		//changeEditContest
		case ACTION_TYPES.CHANGE_EDIT_CONTEST:
			return {
				...state,
				isEditContest: payload,
			};
		//changeShowImage
		case ACTION_TYPES.CHANGE_SHOW_IMAGE:
			return {
				...state,
				isShowOnFull: payload.isShowOnFull,
				imagePath: payload.imagePath,
			};
		//updateStoreAfterUpdateContest
		case ACTION_TYPES.UPDATE_STORE_AFTER_UPDATE_CONTEST:
			return {
				...state,
				error: null,
				isEditContest: false,
				contestData: { ...state.contestData, ...payload },
			};
		//=========================================
		case ACTION_TYPES.CLEAR_CONTEST_BY_ID:
			return initialState;
		default:
			return state;
	}
};

export default getContestByIdReducer;
