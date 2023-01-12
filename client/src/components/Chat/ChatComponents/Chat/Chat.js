import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCallback } from 'react';
import classNames from 'classnames';
//=======================================
import styles from './Chat.module.sass';
import { chatController } from '../../../../api/ws/socketController';
import { chatActions } from '../../../../store/actions';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../../components';

export const Chat = () => {

	const {
		chatStore: {
			chatMode,
			isShowChatsInCatalog,
			isExpanded,
			isShow,
			isShowCatalogCreation,
			error,
		},
		userStore: { data: { id } }
	} = useSelector(state => state)
	const {
		CHAT_CONSTANTS: {
			CATALOG_PREVIEW_CHAT_MODE,
			CHAT_MENU,
		},
	} = CONSTANTS;
	const dispatch = useDispatch();

	const changeShow = () => dispatch(chatActions.changeChatShow());
	const getPreviewChat = useCallback(() =>
		dispatch(chatActions.getPreviewChatAction()
		), [dispatch]);

	const setChatPreviewMode = (mode) =>
		dispatch(chatActions.setPreviewChatMode(mode));

	useEffect(() => {
		chatController.subscribeChat(id);
		getPreviewChat();
		return () => {
			chatController.unsubscribeChat(id);
		};
	}, [id, getPreviewChat]);

	const renderChatMenu = () => {
		return (
			CHAT_MENU.map(chatMenuItem =>
				<span
					key={chatMenuItem}
					onClick={() => setChatPreviewMode(`${chatMenuItem.toUpperCase()}_PREVIEW_CHAT_MODE`)}
					className={classNames(styles.button, {
						[styles.activeButton]: chatMode === `${chatMenuItem.toUpperCase()}_PREVIEW_CHAT_MODE`
					})}
				>
					{chatMenuItem}
				</span>)
		)
	}

	const renderDialogList = () => {
		return (
			<div>
				{isShowChatsInCatalog && <Components.CatalogListHeader />}
				{!isShowChatsInCatalog && (
					<div className={styles.chatHeader}>
						<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
					</div>
				)}
				{!isShowChatsInCatalog && (
					<div className={styles.buttonsContainer}>
						{renderChatMenu()}
					</div>
				)}
				{chatMode === CATALOG_PREVIEW_CHAT_MODE
					? <Components.CatalogListContainer />
					: <Components.DialogListContainer userId={id} />
				}
			</div>
		);
	};

	return (
		<div className={classNames(styles.chatContainer, { [styles.showChat]: isShow })}>
			{error &&
				<Components.UI.ChatError getData={getPreviewChat} />}
			{isShowCatalogCreation && <Components.CatalogCreation />}
			{isExpanded
				? <Components.Dialog userId={id} />
				: renderDialogList()
			}
			<div
				className={styles.toggleChat}
				onClick={changeShow}
			>
				{isShow ? 'Hide Chat' : 'Show Chat'}
			</div>
		</div>
	);

};
