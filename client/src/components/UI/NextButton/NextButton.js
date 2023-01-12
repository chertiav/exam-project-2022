import React from 'react';
//=============================================
import styles from './NextButton.module.sass';

export const NextButton = ({ title, classes, ...rest }) => {
	return (
		<div {...rest} className={classes || styles.buttonContainer}>
			<span>{title}</span>
		</div>
	);
};
