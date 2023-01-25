import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
//=======================================
import styles from './ChatHeader.module.sass';
import { chatActions } from '../../../../store/actions';
import * as CONSTANTS from '../../../../constants';
import * as utils from '../../../../utils';

export const ChatHeader = ({ userId }) => {

	const { interlocutor, chatData } = useSelector(state => state.chatStore);
	const { avatar, firstName } = interlocutor;
	const dispatch = useDispatch();

	const backToDialogList = () => dispatch(chatActions.backToDialogList());
	const changeChatFavorite = (data) =>
		dispatch(chatActions.changeChatFavoriteAction(data));
	const changeChatBlock = (data) =>
		dispatch(chatActions.changeChatBlockAction(data));

	const changeFavorite = (data, event) => {
		changeChatFavorite(data);
		event.stopPropagation();
	};
	const changeBlackList = (data, event) => {
		changeChatBlock(data);
		event.stopPropagation();
	};

	const isFavorite = (userId) => {
		const { favoriteList, participants } = chatData;
		if (favoriteList) return favoriteList[participants.indexOf(userId)];
	};
	const isBlocked = (userId) => {
		const { blackList, participants } = chatData;
		if (blackList) return blackList[participants.indexOf(userId)];
	}

	return (
		<div className={styles.chatHeader}>
			<div className={styles.buttonContainer} onClick={backToDialogList}>
				<img
					src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}arrow-left-thick.png`}
					alt="back" />
			</div>
			<div className={styles.infoContainer}>
				<div>
					<img
						src={utils.function.getAvar(avatar)}
						alt="user"
					/>
					<span>{firstName}</span>
				</div>
				{chatData
					&& (
						<div className={styles.buttonContainer}>
							<i
								onClick={(event) => changeFavorite({
									participants: chatData.participants,
									favoriteFlag: !isFavorite(userId),
								}, event)}
								className={classNames({
									'far fa-heart': !isFavorite(userId),
									'fas fa-heart': isFavorite(userId),
								})}
							/>
							<i
								onClick={(event) => changeBlackList({
									participants: chatData.participants,
									blackListFlag: !isBlocked(userId),
								}, event)}
								className={classNames({
									'fas fa-unlock': !isBlocked(userId),
									'fas fa-user-lock': isBlocked(userId),
								})}
							/>
						</div>
					)}
			</div>
		</div>
	)
};
