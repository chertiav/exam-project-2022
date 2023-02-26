import ACTIONS_TYPES from './actionsTypes'

//GET CONTESTS
//getContest (contestsReducer)
export const getContestsCustomerAction = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTESTS_CUSTOMER_ACTION,
	payload,
});
export const getContestsCreativeAction = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTESTS_CREATIVE_ACTION,
	payload,
});
export const getContestsModeratorAction = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTESTS_MODERATOR_ACTION,
	payload,
});
export const getContestRequest = () => ({
	type: ACTIONS_TYPES.GET_CONTESTS_REQUEST,
});
export const getContestSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTESTS_SUCCESS,
	payload
});
export const getContestError = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTESTS_ERROR,
	payload
});
export const setNewCustomerFilter = (payload) => ({
	type: ACTIONS_TYPES.SET_NEW_CUSTOMER_FILTER,
	payload,
});
export const setNewCreatorFilter = (payload) => ({
	type: ACTIONS_TYPES.SET_NEW_CREATOR_FILTER,
	payload,
});
export const clearContestList = () => ({
	type: ACTIONS_TYPES.CLEAR_CONTESTS_LIST,
});

//GET DATA FOR CONTEST (dataForContestReducer)
export const getDataForContestAction = (payload) => ({
	type: ACTIONS_TYPES.GET_DATA_FOR_CONTEST_ACTION,
	payload,
});
export const getDataForContestRequest = () => ({
	type: ACTIONS_TYPES.GET_DATA_FOR_CONTEST_REQUEST,
});
export const getDataForContestSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_DATA_FOR_CONTEST_SUCCESS,
	payload
});
export const getDataForContestError = (payload) => ({
	type: ACTIONS_TYPES.GET_DATA_FOR_CONTEST_ERROR,
	payload
});
export const clearDataForContest = () => ({
	type: ACTIONS_TYPES.CLEAR_PREFERENCE,
});

//CREATE CONTEST
//bundle (bundleReducer)
export const selectBundle = (payload) => ({
	type: ACTIONS_TYPES.SELECT_BUNDLE_ACTION,
	payload,
});
export const clearBundle = () => ({
	type: ACTIONS_TYPES.CLEAR_BUNDLE_ACTION,
});
//saveContestToStore (storeContestReducer)
export const saveContestToStore = (payload) => ({
	type: ACTIONS_TYPES.SAVE_CONTEST_TO_STORE,
	payload,
});
export const clearContestStore = () => ({
	type: ACTIONS_TYPES.CLEAR_CONTEST_STORE,
});

//GET CONTEST BY ID (getContestByIdReducer)
//getContestById
export const getContestByIdAction = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTEST_BY_ID_ACTION,
	payload,
});
export const getContestByIdRequest = () => ({
	type: ACTIONS_TYPES.GET_CONTEST_BY_ID_REQUEST,
});
export const getContestByIdSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTEST_BY_ID_SUCCESS,
	payload
});
export const getContestByIdError = (payload) => ({
	type: ACTIONS_TYPES.GET_CONTEST_BY_ID_ERROR,
	payload
});
export const clearContestById = () => ({
	type: ACTIONS_TYPES.CLEAR_CONTEST_BY_ID,
});
//changeEditContest
export const changeEditContest = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_EDIT_CONTEST,
	payload,
});
//changeViewMode
export const changeContestViewMode = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CONTEST_VIEW_MODE,
	payload,
});
//changeShowImage
export const changeShowImage = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_SHOW_IMAGE,
	payload,
});
//updateStoreAfterUpdateContest
export const updateStoreAfterUpdateContest = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_STORE_AFTER_UPDATE_CONTEST,
	payload
});
//getCountOffersByContestId (getCountContestByIdReducer)
export const getCountOffersByContestdActions = (payload) => ({
	type: ACTIONS_TYPES.GET_COUNT_OFFERS_BY_CONTEST_ACTION,
	payload,
});
export const getCountOffersByContestdRequest = () => ({
	type: ACTIONS_TYPES.GET_COUNT_OFFERS_BY_CONTEST_REQUEST,
});
export const getCountOffersByContestdSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_COUNT_OFFERS_BY_CONTEST_SUCCESS,
	payload
});
export const getCountOffersByContestdError = (payload) => ({
	type: ACTIONS_TYPES.GET_COUNT_OFFERS_BY_CONTEST_ERROR,
	payload,
});

//updateContest (updateContestReducer)
export const updateContest = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_CONTEST_ACTION,
	payload,
});
export const updateContestRequest = () => ({
	type: ACTIONS_TYPES.UPDATE_CONTEST_REQUEST,
});
export const updateContestError = (payload) => ({
	type: ACTIONS_TYPES.UPDATE_CONTEST_ERROR,
	payload
});
export const clearUpdateContestStore = () => ({
	type: ACTIONS_TYPES.CLEAR_UPDATE_CONTEST_STORE,
});

