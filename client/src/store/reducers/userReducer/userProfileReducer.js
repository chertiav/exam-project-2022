import ACTIONS_TYPES from '../../actions/actionsTypes';
import * as CONSTANTS from '../../../constants';

const initialState = {
	profileModeView: CONSTANTS.USER_PROFILE.USER_INFO_MODE,
	isEdit: false,
};

const userProfileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS_TYPES.CHANGE_PROFILE_MODE_VIEW:
			return {
				...state,
				profileModeView: payload,
			};
		case ACTIONS_TYPES.CHANGE_EDIT_MODE_ON_USER_PROFILE:
			return {
				...state,
				isEdit: payload,
			};
		default:
			return state;
	}
}

export default userProfileReducer;