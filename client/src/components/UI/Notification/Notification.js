import React from 'react';
import { useNavigate } from 'react-router-dom';
//==============================================
import styles from './Notification.module.sass';

export const Notification = (props) => {

	const navigate = useNavigate();
	const onClick = () => navigate(`/contest/${props.contestId}`);

	return (
		<div>
			<br />
			<span>{props.message}</span>
			<br />
			{props.contestId &&
				<span
					onClick={onClick}
					className={styles.goToContest}
				>
					Go to contest
				</span>}
		</div>
	);
}

