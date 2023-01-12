import React from 'react';
import { Link } from 'react-router-dom';
//======================================
import styles from './DashboardButton.module.sass';

export const DashboardButton = () => {
	return (
		<div className={styles.button}>
			<Link className={styles.button__link} to="/dashboard"> DASHBOARD</Link>
		</div>
	)
};