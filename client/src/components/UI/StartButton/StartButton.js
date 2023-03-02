import React from 'react';
//===============================================
import styles from './StartButton.module.sass';

export const StartButton = ({ title, navigateTo, classes }) => {

	return (
		<div
			className={classes || styles.startBtn}
			onClick={navigateTo}>
			{title}
		</div>
	)
};
