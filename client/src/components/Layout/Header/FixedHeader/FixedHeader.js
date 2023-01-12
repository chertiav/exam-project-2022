import React from 'react';
import { Link } from 'react-router-dom';
//==================================================
import styles from './FixedHeader.module.sass';
import * as CONSTANTS from '../../../../constants';


export const FixedHeader = () => {
	return (
		<div className={styles.fixedHeader}>
			<span className={styles.info}>
				{CONSTANTS.HEADER_CONSTANTS.FIXED_HEADER.text}
			</span>
			<Link to={CONSTANTS.APP_CONSTANTS.PATH_NOTN_FOUND}>
				{CONSTANTS.HEADER_CONSTANTS.FIXED_HEADER.textLink}
			</Link>
		</div>
	)
};
