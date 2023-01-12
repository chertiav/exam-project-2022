import React from 'react';
import { Link } from 'react-router-dom';
//=======================================
import styles from './AuthButtons.module.sass';

export const AuthButtons = () => {
	return (
		<>
			<Link to="/login" className={styles.btn}>
				<span>LOGIN</span>
			</Link>
			<Link to="/registration" className={styles.btn}>
				<span>SIGN UP</span>
			</Link>
		</>
	)
};

