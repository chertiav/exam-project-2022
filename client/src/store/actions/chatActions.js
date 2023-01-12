import ACTIONS_TYPES from './actionsTypes';

//CHAT MODE
//changeChatShow
export const changeChatShow = () => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_SHOW,
});
//changeTypeOfChatAdding
export const changeTypeOfChatAdding = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_TYPE_ADDING_CHAT_IN_CATALOG,
	payload,
});
//changeShowAddChatToCatalogMenu
export const changeShowAddChatToCatalogMenu = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_SHOW_ADD_CHAT_TO_CATALOG,
	payload,
});
//setPreviewChatMode
export const setPreviewChatMode = (payload) => ({
	type: ACTIONS_TYPES.SET_CHAT_PREVIEW_MODE,
	payload,
});
//changeShowModeCatalog
export const changeShowModeCatalog = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_SHOW_MODE_CATALOG,
	payload,
});
//changeRenameCatalogMode
export const changeRenameCatalogMode = () => ({
	type: ACTIONS_TYPES.CHANGE_RENAME_CATALOG_MODE,
});

//CHAT
//getPreviewChat
export const getPreviewChatAction = () => ({
	type: ACTIONS_TYPES.GET_PREVIEW_CHAT_ACTION,
});
export const getPreviewChatSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_PREVIEW_CHAT_SUCCESS,
	payload
});
export const getPreviewChatError = (payload) => ({
	type: ACTIONS_TYPES.GET_PREVIEW_CHAT_ERROR,
	payload
});
//sendMessage
export const sendMessageAction = (payload) => ({
	type: ACTIONS_TYPES.SEND_MESSAGE_ACTION,
	payload,
});
export const sendMessageSuccess = (payload) => ({
	type: ACTIONS_TYPES.SEND_MESSAGE_SUCCESS,
	payload
});
export const sendMessageError = (payload) => ({
	type: ACTIONS_TYPES.SEND_MESSAGE_ERROR,
	payload
});

//CHAT CATALOG
//getCatalogList
export const getCatalogListAction = (payload) => ({
	type: ACTIONS_TYPES.GET_CATALOG_LIST_ACTION,
	payload,
});
export const getCatalogListSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_CATALOG_LIST_SUCCESS,
	payload
});
export const getCatalogListError = (payload) => ({
	type: ACTIONS_TYPES.GET_CATALOG_LIST_ERROR,
	payload
});
//createCatalog
export const createCatalogAction = (payload) => ({
	type: ACTIONS_TYPES.CREATE_CATALOG_ACTION,
	payload,
});
export const createCatalogSuccess = (payload) => ({
	type: ACTIONS_TYPES.CREATE_CATALOG_SUCCESS,
	payload
});
export const createCatalogError = (payload) => ({
	type: ACTIONS_TYPES.CREATE_CATALOG_ERROR,
	payload
});
//addChatToCatalog
export const addChatToCatalogAction = (payload) => ({
	type: ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_ACTION,
	payload
});
export const addChatToCatalogSuccess = (payload) => ({
	type: ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_SUCCESS,
	payload
});
export const addChatToCatalogError = (payload) => ({
	type: ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_ERROR,
	payload
});
//changeCatalogName
export const changeCatalogNameAction = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CATALOG_NAME_ACTION,
	payload,
});
export const changeCatalogNameSuccess = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CATALOG_NAME_SUCCESS,
	payload
});
export const changeCatalogNameError = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CATALOG_NAME_ERROR,
	payload
});
//deleteCatalog
export const deleteCatalogAction = (payload) => ({
	type: ACTIONS_TYPES.DELETE_CATALOG_ACTION,
	payload,
});
export const deleteCatalogSuccess = (payload) => ({
	type: ACTIONS_TYPES.DELETE_CATALOG_SUCCESS,
	payload
});
export const deleteCatalogError = (payload) => ({
	type: ACTIONS_TYPES.DELETE_CATALOG_ERROR,
	payload
});
//removeChatFromCatalog
export const removeChatFromCatalogAction = (payload) => ({
	type: ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_ACTION,
	payload,
});
export const removeChatFromCatalogSuccess = (payload) => ({
	type: ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_SUCCESS,
	payload
});
export const removeChatFromCatalogError = (payload) => ({
	type: ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_ERROR,
	payload
});

//CHAT DIALOG
//getDialogMessages
export const getDialogMessagesAction = (payload) => ({
	type: ACTIONS_TYPES.GET_DIALOG_MESSAGES_ACTION,
	payload,
});
export const getDialogMessagesSuccess = (payload) => ({
	type: ACTIONS_TYPES.GET_DIALOG_MESSAGES_SUCCESS,
	payload
});
export const getDialogMessagesError = (payload) => ({
	type: ACTIONS_TYPES.GET_DIALOG_MESSAGES_ERROR,
	payload
});
//clearMessageList
export const clearMessageList = () => ({
	type: ACTIONS_TYPES.CLEAR_MESSAGE_LIST,
});

//CHAT MANAGMENT OPERATIONS
//backToDialogList
export const backToDialogList = () => ({
	type: ACTIONS_TYPES.BACK_TO_DIALOG_LIST,
});
//changeChatFavorite
export const changeChatFavoriteAction = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_ACTION,
	payload,
});
export const changeChatFavoriteSuccess = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_SUCCESS,
	payload
});
export const changeChatFavoriteError = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_ERROR,
	payload
});
//changeChatBlock
export const changeChatBlockAction = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_BLOCK_ACTION,
	payload,
});
export const changeChatBlockSuccess = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_BLOCK_SUCCESS,
	payload
});
export const changeChatBlockError = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_CHAT_BLOCK_ERROR,
	payload
});
//goToExpandedDialog
export const goToExpandedDialog = (payload) => ({
	type: ACTIONS_TYPES.GO_TO_EXPANDED_DIALOG,
	payload,
});

//clearChatError
export const clearChatError = () => ({
	type: ACTIONS_TYPES.CLEAR_CHAT_ERROR,
});

//clearChat
export const clearChat = () => ({
	type: ACTIONS_TYPES.CLEAR_CHAT,
});