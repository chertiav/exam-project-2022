import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//=====================================================
import styles from './DialogList.module.sass';
import { chatActions } from '../../../../store/actions';
import * as utils from '../../../../utils';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';

export const DialogList = ({ userId, preview, removeChat }) => {

	const { chatStore: { chatMode } } = useSelector(state => state);
	const dispatch = useDispatch();

	const goToExpandedDialog = (data) =>
		dispatch(chatActions.goToExpandedDialog(data));

	const changeFavorite = (data, event) => {
		dispatch(chatActions.changeChatFavoriteAction(data));
		event.stopPropagation();
	};

	const changeBlackList = (data, event) => {
		dispatch(chatActions.changeChatBlockAction(data));
		event.stopPropagation();
	};

	const changeShowCatalogCreation = (event, chatId) => {
		dispatch(chatActions.changeShowAddChatToCatalogMenu(chatId));
		event.stopPropagation();
	};

	const onlyFavoriteDialogs = (chatPreview, userId) =>
		chatPreview.favoriteList[chatPreview.participants.indexOf(userId)];

	const onlyBlockDialogs = (chatPreview, userId) =>
		chatPreview.blackList[chatPreview.participants.indexOf(userId)];

	const renderPreview = (filterFunc) => {
		const arrayList = [];
		preview.forEach((chatPreview, index) => {
			const dialogNode = (
				<Components.DialogBox
					interlocutor={chatPreview.interlocutor}
					chatPreview={chatPreview}
					userId={userId}
					key={index}
					getTimeStr={utils.function.getTimeStrNewFormat}
					changeFavorite={changeFavorite}
					changeBlackList={changeBlackList}
					chatMode={chatMode}
					catalogOperation={chatMode === CONSTANTS.CHAT_CONSTANTS.CATALOG_PREVIEW_CHAT_MODE
						? removeChat
						: changeShowCatalogCreation
					}
					goToExpandedDialog={goToExpandedDialog}
				/>
			);
			if (filterFunc && filterFunc(chatPreview, userId)) {
				arrayList.push(dialogNode);
			} else if (!filterFunc) {
				arrayList.push(dialogNode);
			}
		});
		return (
			arrayList.length
				? arrayList
				: <span className={styles.notFound}>Not found</span>
		);
	};

	const renderChatPreview = () => {
		if (chatMode === CONSTANTS.CHAT_CONSTANTS.FAVORITE_PREVIEW_CHAT_MODE) return renderPreview(onlyFavoriteDialogs);
		if (chatMode === CONSTANTS.CHAT_CONSTANTS.BLOCKED_PREVIEW_CHAT_MODE) return renderPreview(onlyBlockDialogs);
		return renderPreview();
	};

	return (
		<div className={styles.previewContainer}>
			{renderChatPreview()}
		</div>
	);
};