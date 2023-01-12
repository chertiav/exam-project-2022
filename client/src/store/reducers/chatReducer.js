import ACTIONS_TYPES from '../actions/actionsTypes';
import * as CONSTANTS from '../../constants';

const initialState = {
	isFetching: true,
	error: null,
	catalogList: [],
	chatMode: CONSTANTS.APP_CONSTANTS.NORMAL_PREVIEW_CHAT_MODE,
	isShowChatsInCatalog: false,
	isExpanded: false,
	isShow: false,
	isShowCatalogCreation: false,
	addChatId: null,
	catalogCreationMode: CONSTANTS.APP_CONSTANTS.ADD_CHAT_TO_OLD_CATALOG,
	messages: [],
	interlocutor: {},
	chatData: null,
	messagesPreview: [],
	currentCatalog: null,
	isRenameCatalog: false,
};

const chatReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//CHAT
		//getPreviewChat
		case ACTIONS_TYPES.GET_PREVIEW_CHAT_SUCCESS:
			return {
				...state,
				messagesPreview: payload,
				error: null,
			};
		case ACTIONS_TYPES.GET_PREVIEW_CHAT_ERROR:
			return {
				...state,
				error: payload,
				messagesPreview: [],
			};
		//sendMessage
		case ACTIONS_TYPES.SEND_MESSAGE_SUCCESS:
			return {
				...state,
				chatData: { ...state.chatData, ...payload.chatData },
				messagesPreview: payload.messagesPreview,
				messages: [...state.messages, payload.message],
			};
		case ACTIONS_TYPES.SEND_MESSAGE_ERROR:
			return {
				...state,
				error: payload,
			};

		//CHAT CATALOG
		//getCatalogList
		case ACTIONS_TYPES.GET_CATALOG_LIST_SUCCESS:
			return {
				...state,
				isFetching: false,
				catalogList: [...payload],
			};
		case ACTIONS_TYPES.GET_CATALOG_LIST_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		//createCatalog
		case ACTIONS_TYPES.CREATE_CATALOG_SUCCESS:
			return {
				...state,
				catalogList: [...state.catalogList, payload],
				isShowCatalogCreation: false,
			};
		case ACTIONS_TYPES.CREATE_CATALOG_ERROR:
			return {
				...state,
				isShowCatalogCreation: false,
				error: payload,
			};
		//addChatToCatalog
		case ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_SUCCESS:
			return {
				...state,
				isShowCatalogCreation: false,
				catalogList: [...payload],
			};
		case ACTIONS_TYPES.ADD_CHAT_TO_CATALOG_ERROR:
			return {
				...state,
				error: payload,
				isShowCatalogCreation: false,
			};
		//changeCatalogName
		case ACTIONS_TYPES.CHANGE_CATALOG_NAME_SUCCESS:
			return {
				...state,
				catalogList: [...payload.catalogList],
				currentCatalog: payload.currentCatalog,
				isRenameCatalog: false,
			};
		case ACTIONS_TYPES.CHANGE_CATALOG_NAME_ERROR:
			return {
				...state,
				isRenameCatalog: false,
			};
		//deleteCatalog
		case ACTIONS_TYPES.DELETE_CATALOG_SUCCESS:
			return {
				...state,
				catalogList: [...state.catalogList.filter(catalog =>
					catalog._id !== payload)],
			};
		case ACTIONS_TYPES.DELETE_CATALOG_ERROR:
			return {
				...state,
				error: payload,
			};
		//removeChatFromCatalogSaga
		case ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_SUCCESS:
			return {
				...state,
				currentCatalog: payload.currentCatalog,
				catalogList: [...payload.catalogList],
			};
		case ACTIONS_TYPES.REMOVE_CHAT_FROM_CATALOG_ERROR:
			return {
				...state,
				error: payload,
			};

		//CHAT DIALOG
		//getDialog
		case ACTIONS_TYPES.GET_DIALOG_MESSAGES_SUCCESS:
			return {
				...state,
				messages: payload.messages,
				interlocutor: payload.interlocutor,
			};
		case ACTIONS_TYPES.GET_DIALOG_MESSAGES_ERROR:
			return {
				...state,
				messages: [],
				interlocutor: null,
				error: payload,
			};
		//clearMessageList
		case ACTIONS_TYPES.CLEAR_MESSAGE_LIST:
			return {
				...state,
				messages: [],
			};

		//CHAT MODE
		//changeChatShow
		case ACTIONS_TYPES.CHANGE_CHAT_SHOW: {
			return {
				...state,
				isShowCatalogCreation: false,
				isShow: !state.isShow,
			};
		}
		//changeTypeOfChatAdding
		case ACTIONS_TYPES.CHANGE_TYPE_ADDING_CHAT_IN_CATALOG: {
			return {
				...state,
				catalogCreationMode: payload,
			};
		}
		//changeShowAddChatToCatalogMenu
		case ACTIONS_TYPES.CHANGE_SHOW_ADD_CHAT_TO_CATALOG: {
			return {
				...state,
				addChatId: payload,
				isShowCatalogCreation: !state.isShowCatalogCreation,
			};
		}
		//setPreviewChatMode
		case ACTIONS_TYPES.SET_CHAT_PREVIEW_MODE:
			return {
				...state,
				chatMode: payload,
			};
		//changeShowModeCatalog
		case ACTIONS_TYPES.CHANGE_SHOW_MODE_CATALOG:
			return {
				...state,
				currentCatalog: { ...state.currentCatalog, ...payload },
				isShowChatsInCatalog: !state.isShowChatsInCatalog,
				isRenameCatalog: false,
			};
		//changeRenameCatalogMode
		case ACTIONS_TYPES.CHANGE_RENAME_CATALOG_MODE:
			return {
				...state,
				isRenameCatalog: !state.isRenameCatalog,
			};

		//CHAT MANAGMENT OPERATIONS
		//backToDialogList
		case ACTIONS_TYPES.BACK_TO_DIALOG_LIST:
			return {
				...state,
				isExpanded: false,
			};
		//changeChatFavorite
		case ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_SUCCESS:
			return {
				...state,
				chatData: payload.changedPreview,
				messagesPreview: payload.messagesPreview,
			};
		case ACTIONS_TYPES.CHANGE_CHAT_FAVORITE_ERROR:
			return {
				...state,
				error: payload,
			};
		//changeChatBlock
		case ACTIONS_TYPES.CHANGE_CHAT_BLOCK_SUCCESS:
			return {
				...state,
				chatData: payload.chatData,
				messagesPreview: payload.messagesPreview,
			};
		case ACTIONS_TYPES.CHANGE_CHAT_BLOCK_ERROR:
			return {
				...state,
				error: payload,
			};
		//goToExpandedDialog
		case ACTIONS_TYPES.GO_TO_EXPANDED_DIALOG:
			return {
				...state,
				interlocutor: { ...state.interlocutor, ...payload.interlocutor },
				chatData: payload.conversationData,
				isShow: true,
				isExpanded: !state.isExpanded,
				messages: [],
			};
		//clearChatError
		case ACTIONS_TYPES.CLEAR_CHAT_ERROR:
			return {
				...state,
				error: null,
			};
		case ACTIONS_TYPES.CLEAR_CHAT:
			return initialState;
		default:
			return state;
	}
};

export default chatReducer;
