import React from 'react';
//===============================================
import styles from './StartButton.module.sass';

export const StartButton = ({ title, navigateTo }) => {

	return (
		<div
			className={styles.startBtn}
			onClick={navigateTo}>
			{title}
		</div>
	)
};
