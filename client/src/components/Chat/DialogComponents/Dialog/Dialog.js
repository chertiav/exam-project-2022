import React from 'react';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import moment from 'moment';
import className from 'classnames';
//=====================================
import styles from './Dialog.module.sass';
import { chatActions } from '../../../../store/actions';
import * as Components from '../../../../components';
import * as hooks from '../../../../hooks';


export const Dialog = ({ userId }) => {

	const { messages, chatData, interlocutor } = useSelector((state) =>
		state.chatStore)
	const dispatch = useDispatch();
	const messagesEnd = useRef();

	const getDialog = useCallback((data) => {
		dispatch(chatActions.getDialogMessagesAction(data))
	}, [dispatch]);

	const clearMessageList = useCallback(() => {
		dispatch(chatActions.clearMessageList())
	}, [dispatch]);

	const prevInterlocutor = hooks.usePrevious(interlocutor.id);

	const scrollToBottom = () => {
		messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		getDialog(interlocutor.id);
		scrollToBottom();
		return () => {
			clearMessageList()
		}
	}, [interlocutor.id, getDialog, clearMessageList])

	useEffect(() => {
		if (interlocutor.id !== prevInterlocutor) {
			getDialog(interlocutor.id)
		};
	}, [interlocutor, prevInterlocutor, getDialog]);

	useEffect(() => {
		if (messagesEnd.current) scrollToBottom();
	}, [messages]);

	const renderMainDialog = () => {
		const messagesArray = [];
		let currentTime = moment();
		messages.forEach((message, i) => {
			if (!currentTime.isSame(message.createdAt, 'date')) {
				messagesArray.push(
					<div key={message.createdAt} className={styles.date}>
						{moment(message.createdAt).format('MMMM DD, YYYY')}
					</div>,
				);
				currentTime = moment(message.createdAt);
			}
			messagesArray.push(
				<div
					key={i}
					className={className(
						userId === message.sender
							? styles.ownMessage
							: styles.message)}
				>
					<span>{message.body}</span>
					<span className={styles.messageTime}>
						{moment(message.createdAt).format('HH:mm')}
					</span>
					<div ref={messagesEnd} />
				</div>,
			);
		});
		return (
			<div className={styles.messageList}>
				{messagesArray}
			</div>
		);
	};

	const blockMessage = () => {
		const { blackList, participants } = chatData;
		const userIndex = participants.indexOf(userId);
		let message;
		if (chatData && blackList[userIndex]) {
			message = 'You block him';
		} else if (chatData && blackList.includes(true)) {
			message = 'He block you';
		}
		return (
			<span className={styles.messageBlock}>{message}</span>
		);
	};

	return (
		<>
			<Components.ChatHeader userId={userId} />
			{renderMainDialog()}
			<div ref={messagesEnd} />
			{(chatData && chatData?.blackList?.includes(true))
				? blockMessage()
				: < Components.ChatInput />
			}
		</>
	);
};
