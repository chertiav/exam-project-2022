import React from 'react';
import { useNavigate } from 'react-router-dom';
//=============================================
import styles from './BackButton.module.sass';

export const BackButton = ({ classes, location }) => {

	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(location ?? -1);
	}

	return (
		<div onClick={clickHandler} className={classes || styles.buttonContainer}>
			<span>Back</span>
		</div>
	);
};
