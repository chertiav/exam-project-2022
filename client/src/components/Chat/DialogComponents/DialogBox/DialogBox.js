import React from 'react';
import classNames from 'classnames';
//============================================
import styles from './DialogBox.module.sass';
import * as CONSTANTS from '../../../../constants';

export const DialogBox = (props) => {
	const {
		chatPreview,
		userId,
		getTimeStr,
		changeFavorite,
		changeBlackList,
		catalogOperation,
		goToExpandedDialog,
		chatMode,
		interlocutor,
	} = props;
	const {
		favoriteList, participants, blackList, _id, text, createAt,
	} = chatPreview;
	const isFavorite = favoriteList[participants.indexOf(userId)];
	const isBlocked = blackList[participants.indexOf(userId)];
	return (
		<div
			className={styles.previewChatBox}
			onClick={() => goToExpandedDialog({
				interlocutor,
				conversationData: {
					participants,
					_id,
					blackList,
					favoriteList,
				},
			})}
		>
			<img
				src={interlocutor.avatar === 'anon.png'
					? CONSTANTS.APP_CONSTANTS.ANONYM_IMAGE_PATH
					: `${CONSTANTS.APP_CONSTANTS.PUBLIC_URL}${interlocutor.avatar}`}
				alt="user"
			/>
			<div className={styles.infoContainer}>
				<div className={styles.interlocutorInfo}>
					<span className={styles.interlocutorName}>{interlocutor.firstName}</span>
					<span className={styles.interlocutorMessage}>{text}</span>
				</div>
				<div className={styles.buttonsContainer}>
					<span className={styles.time}>{getTimeStr(createAt)}</span>
					<i
						onClick={(event) => changeFavorite({
							participants,
							favoriteFlag: !isFavorite,
						}, event)}
						className={classNames({
							'far fa-heart': !isFavorite,
							'fas fa-heart': isFavorite
						})}
					/>
					<i
						onClick={(event) => changeBlackList({
							participants,
							blackListFlag: !isBlocked,
						}, event)}
						className={classNames({
							'fas fa-unlock': !isBlocked,
							'fas fa-user-lock': isBlocked
						})}
					/>
					<i
						onClick={(event) => catalogOperation(event, _id)}
						className={classNames({
							'far fa-plus-square': chatMode !== CONSTANTS.CHAT_CONSTANTS.CATALOG_PREVIEW_CHAT_MODE,
							'fas fa-minus-circle': chatMode === CONSTANTS.CHAT_CONSTANTS.CATALOG_PREVIEW_CHAT_MODE,
						})}
					/>
				</div>
			</div>
		</div>
	);
};
