import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//====================================
import { chatActions } from '../../../../store/actions';
import * as Components from '../../../';

export const DialogListContainer = ({ userId }) => {

	const { messagesPreview } = useSelector((state) => state.chatStore);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(chatActions.getPreviewChatAction())
	}, [dispatch])

	return (
		<Components.DialogList preview={messagesPreview} userId={userId} />
	)
};
