import { combineReducers } from 'redux';
//=======================================
import authReducer from './authReducer';
import userReducer from './userReducer/userReducer';
import userProfileReducer from './userReducer/userProfileReducer';
import contestsReducer from './contestReducer/contestReducer';
import dataForContestReducer from './contestReducer/dataForContestReducer';
import bundleReducer from './contestReducer/bundleReducer';
import storeContestReducer from './contestReducer/storeContestReducer';
import getContestByIdReducer from './contestReducer/getContestByIdReducer';
import updateContestReducer from './contestReducer/updateContestReducer';
import getCountContestByIdReducer from './contestReducer/getCountContestByIdReducer';
import payReducer from './payReducer';
import offerReducer from './offerReducer';
import chatReducer from './chatReducer';

export default combineReducers({
	//auth
	auth: authReducer,
	//user
	userStore: userReducer,
	userProfile: userProfileReducer,
	//contest
	contestsList: contestsReducer,
	dataForContest: dataForContestReducer,
	bundleStore: bundleReducer,
	contestStore: storeContestReducer,
	contestByIdStore: getContestByIdReducer,
	contestCountByIdStore: getCountContestByIdReducer,
	updateContestStore: updateContestReducer,
	//offer
	offerStore: offerReducer,
	//payment
	payment: payReducer,
	//chat
	chatStore: chatReducer,
});