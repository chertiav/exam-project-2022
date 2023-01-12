import ACTIONS_TYPES from './actionsTypes'

//getAllOffersByContestId
export const getAllOffersByContestIdActions = (payload) => ({
	type: ACTIONS_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_ACTION,
	payload,
});
export const getAllOffersByContestIdRequest = () => ({
	type: ACTIONS_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_REQUEST,
});
export const getAllOffersByContestIdSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_SUCCESS,
	payload
});
export const getAllOffersByContestIdError = (payload) => ({
	type: ACTIONS_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_ERROR,
	payload,
});
//setOfferStatus
export const setOfferStatusAction = (payload) => ({
	type: ACTIONS_TYPES.SET_OFFER_STATUS_ACTION,
	payload,
});
export const setOfferStatusRequest = () => ({
	type: ACTIONS_TYPES.SET_OFFER_STATUS_REQUEST,
});
export const setOfferStatusSuccess = (payload) => ({
	type: ACTIONS_TYPES.SET_OFFER_STATUS_SUCCESS,
	payload
});
export const setOfferStatusError = (payload) => ({
	type: ACTIONS_TYPES.SET_OFFER_STATUS_ERROR,
	payload,
});
//addOffer
export const addNewOfferActions = (payload) => ({
	type: ACTIONS_TYPES.ADD_NEW_OFFER_ACTION,
	payload,
});
export const addNewOfferRequest = () => ({
	type: ACTIONS_TYPES.ADD_NEW_OFFER_REQUEST,
});
export const addNewOfferSuccess = (payload) => ({
	type: ACTIONS_TYPES.ADD_NEW_OFFER_SUCCESS,
	payload
});
export const addNewOfferError = (payload) => ({
	type: ACTIONS_TYPES.ADD_NEW_OFFER_ERROR,
	payload,
});
//changeMark
export const changeMarkAction = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_MARK_ACTION,
	payload,
});
export const changeMarkRequest = () => ({
	type: ACTIONS_TYPES.CHANGE_MARK_REQUEST,
});
export const changeMarkSuccess = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_MARK_SUCCESS,
	payload
});
export const changeMarkError = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_MARK_ERROR,
	payload,
});
//offerStoreCleareError
export const offerStoreCleareError = () => ({
	type: ACTIONS_TYPES.OFFER_STORE_CLEARE_ERROR,
});
//offerStoreCleareOffersStore
export const offerStoreCleareOffersStore = () => ({
	type: ACTIONS_TYPES.OFFER_STORE_CLEARE_OFFERS_STORE,
});