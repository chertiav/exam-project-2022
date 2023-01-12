import React from 'react';
//====================================
import styles from './ContestHeader.module.sass';
import * as Components from '../../';

export const ContestHeader = ({ title, text, currentStep }) => {
	return (
		<div className={styles.ContestHeader}>
			<div className={styles.ContestInfo}>
				<h2>{title}</h2>
				<span>{text}</span>
			</div>
			<Components.UI.ProgressBar currentStep={currentStep} />
		</div>
	)
};
