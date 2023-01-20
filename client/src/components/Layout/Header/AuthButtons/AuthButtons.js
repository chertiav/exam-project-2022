import React from 'react';
import { Link } from 'react-router-dom';
//=======================================
import styles from './AuthButtons.module.sass';

export const AuthButtons = ({ classes, titleLogin, titleSignUp }) => {
	return (
		<>
			<Link to="/login" className={classes?.signInBtn || styles.btn}>
				<span>{titleLogin ?? 'LOGIN'}</span>
			</Link>
			<Link to="/registration" className={classes?.signUpBtn || styles.btn}>
				<span>{titleSignUp ?? 'SIGN UP'}</span>
			</Link>
		</>
	)
};

