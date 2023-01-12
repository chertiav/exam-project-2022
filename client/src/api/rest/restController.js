import http from '../interceptor';

//auth
export const loginRequest = (data) => http.post('/auth/login', data);
export const registerRequest = (data) => http.post('/auth/registration', data);

//users
export const getUser = () => http.get('/users/getUser');
export const updateUser = (data) => http.patch('/users/updateUser', data);

//contest
export const getCustomersContests = ({ limit, offset, contestStatus }) =>
	http.get(`/contests/getCustomersContests?status=${contestStatus}&limit=${limit}&offset=${offset}`);
export const getDataForContest = (data) =>
	http.get(`/contests/dataForContest?characteristic1=${data?.characteristic1 || ''}&characteristic2=${data?.characteristic2 || ''}`);
export const getActiveContests = ({
	offset, limit, typeIndex, contestId, industry, awardSort, ownEntries }) =>
	http.get(`/contests/getAllContests?offset=${offset}&limit=${limit}
	&typeIndex=${typeIndex}&contestId=${contestId}&industry=${industry}
	&awardSort=${awardSort}&ownEntries=${ownEntries}`);
export const getContestById = (id) => http.get(`/contests/getContestById/${id}`);
export const getCountOffersByContest = (id) => http.get(`/contests/getCountOffers/${id}`);
export const updateContest = (data) => http.patch('/contests/updateContest', data);

//payment
export const payMent = (data) => http.post('/payment/pay', data);
export const cashOut = (data) => http.patch('/payment/cashout', data);

//offer
export const getAllOffersByContestId = ({ id, limit, offset }) =>
	http.get(`/offers/getAllOffers?contestId=${id}&limit=${limit}&offset=${offset}`);
export const addNewOffer = (data) => http.post('/offers/addNewOffer', data);
export const setOfferStatus = (data) => http.patch('/offers/setOfferStatus', data);
export const changeMark = (data) => http.patch('/offers/changeMark', data);

//chat
export const getDialogMessages = (data) => http.get(`/chat/getChat?interlocutorId=${data}`);
export const newMessage = (data) => http.post('/chat/newMessage', data);
export const getPreviewChat = () => http.get('/chat/getPreview');
export const createCatalog = (data) => http.post('/chat/createCatalog', data);
export const addChatToCatalog = (data) => http.patch('/chat/addNewChatToCatalog', data);
export const getCatalogList = (data) => http.get('/chat/getCatalogs', data);
export const changeChatBlock = (data) => http.patch('/chat/blackList', data);
export const changeChatFavorite = (data) => http.patch('/chat/favorite', data);
export const changeCatalogName = (data) => http.patch('/chat/updateNameCatalog', data);
export const deleteCatalog = (data) => http.delete(`/chat/deleteCatalog/${data}`, data);
export const removeChatFromCatalog = (data) => http.patch('/chat/removeChatFromCatalog', data);