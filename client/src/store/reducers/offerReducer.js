import ACTION_TYPES from '../actions/actionsTypes';
import * as CONSTANTS from '../../constants';

const initialState = {
	isFetching: false,
	offers: [],
	haveMore: false,
	errorOffersStore: null,
	errorGetAllOfers: null,
};

const offerReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//getAllOffersByContestId
		case ACTION_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTION_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_SUCCESS:
			return {
				...state,
				isFetching: false,
				errorGetAllOfers: null,
				offers: [...state.offers, ...payload.offers],
				haveMore: payload.haveMore,
			};
		case ACTION_TYPES.GET_ALL_OFFER_BY_CONTEST_ID_ERROR:
			return {
				...state,
				isFetching: false,
				errorGetAllOfers: payload,
			};
		//setOfferStatus
		case ACTION_TYPES.SET_OFFER_STATUS_REQUEST:
			return {
				...state,
			};
		case ACTION_TYPES.SET_OFFER_STATUS_SUCCESS:
			return {
				...state,
				offers: state.offers.map((offer) => ({
					...offer,
					status: payload.status === CONSTANTS.APP_CONSTANTS.OFFER_STATUS_WON
						? payload.id === offer.id
							? CONSTANTS.APP_CONSTANTS.OFFER_STATUS_WON
							: CONSTANTS.APP_CONSTANTS.OFFER_STATUS_REJECTED
						: payload.id === offer.id
							? CONSTANTS.APP_CONSTANTS.OFFER_STATUS_REJECTED
							: offer.status
				})),
				errorOffersStore: null,
				isFetching: false,
			};
		case ACTION_TYPES.SET_OFFER_STATUS_MODERATOR_SUCCESS:
			return {
				...state,
				offers: [...state.offers.filter(offer => offer.id !== payload.id)],
				errorOffersStore: null,
				isFetching: false,
			};
		case ACTION_TYPES.SET_OFFER_STATUS_ERROR:
			return {
				...state,
				isFetching: false,
				errorOffersStore: payload,
			};
		//addOffer
		case ACTION_TYPES.ADD_NEW_OFFER_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTION_TYPES.ADD_NEW_OFFER_SUCCESS:
			return {
				...state,
				offers: [payload, ...state.offers],
				errorOffersStore: null,
				isFetching: false,
			};
		case ACTION_TYPES.ADD_NEW_OFFER_ERROR:
			return {
				...state,
				isFetching: false,
				errorOffersStore: payload,
			};
		//deleteOffer
		case ACTION_TYPES.DELETE_OFFER_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case ACTION_TYPES.DELETE_OFFER_SUCCESS:
			return {
				...state,
				offers: [...state.offers.filter(offer => offer.id !== payload.offerId)],
				errorOffersStore: null,
				isFetching: false,
			};
		case ACTION_TYPES.DELETE_OFFER_ERROR:
			return {
				...state,
				isFetching: false,
				errorOffersStore: payload,
			};
		//changeMark
		case ACTION_TYPES.CHANGE_MARK_REQUEST:
			return {
				...state,
			};
		case ACTION_TYPES.CHANGE_MARK_SUCCESS:
			return {
				...state,
				offers: state.offers.map((offer) => ({
					...offer,
					User: {
						...offer.User,
						rating: offer.User.id === payload.userId
							? payload.rating
							: offer.User.rating
					},
					mark: offer.id === payload.offerId
						? payload.mark
						: offer.mark
				})),
				isFetching: false,
				errorOffersStore: null,
			};
		case ACTION_TYPES.CHANGE_MARK_ERROR:
			return {
				...state,
				errorOffersStore: payload,
			};
		//offerStoreCleareError
		case ACTION_TYPES.OFFER_STORE_CLEARE_ERROR:
			return {
				...state,
				errorOffersStore: null,
			};
		//offerStoreCleareOffersStore
		case ACTION_TYPES.OFFER_STORE_CLEARE_OFFERS_STORE:
			return initialState;
		default:
			return state;
	}
};

export default offerReducer;
