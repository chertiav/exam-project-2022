import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//==========================================
import { chatActions } from '../../../../store/actions';
import * as Components from '../../../';

export const CatalogListContainer = () => {

	const { chatStore, userStore } = useSelector(state => state);
	const dispatch = useDispatch();
	const {
		messagesPreview,
		currentCatalog,
		catalogList,
		isShowChatsInCatalog,
	} = chatStore;
	const { id } = userStore.data;

	useEffect(() => {
		dispatch(chatActions.getCatalogListAction());//!!!
	}, [dispatch]);

	const removeChatFromCatalog = (event, chatId) => {
		const { _id } = chatStore.currentCatalog;
		dispatch(chatActions.removeChatFromCatalogAction({ chatId, catalogId: _id }));
		event.stopPropagation();
	};

	const getDialogsPreview = () => {
		const { chats } = currentCatalog;
		const dialogsInCatalog = [];
		for (let i = 0; i < messagesPreview.length; i++) {
			for (let j = 0; j < chats.length; j++) {
				if (chats[j] === messagesPreview[i]._id) {
					dialogsInCatalog.push(messagesPreview[i]);
				}
			}
		}
		return dialogsInCatalog;
	};

	return (
		<>
			{isShowChatsInCatalog ? (
				<Components.DialogList
					userId={id}
					preview={getDialogsPreview()}
					removeChat={removeChatFromCatalog}
				/>
			)
				: <Components.CatalogList catalogList={catalogList} />}
		</>
	);
};
