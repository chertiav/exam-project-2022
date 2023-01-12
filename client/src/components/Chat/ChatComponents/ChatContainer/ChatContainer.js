import React from 'react';
import { useSelector } from 'react-redux';
//==========================================
import * as Components from '../../../'


export const ChatContainer = () => {

	const { data } = useSelector(state => state.userStore);

	return (
		<>
			{data ? <Components.Chat /> : null}
		</>
	);
}
