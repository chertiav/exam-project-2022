import React from 'react';
//=================================================
import styles from './LoginSignnUpHeaders.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';


export const LoginSignnUpHeaders = ({ data, logOut }) => {

	return (
		<div className={styles.loginSignnUpHeaders}>
			<div className={styles.numberContainer}>
				<a href={`tel:${CONSTANTS.HEADER_CONSTANTS.CONTACTS.TEL}`}>
					<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
					{CONSTANTS.HEADER_CONSTANTS.CONTACTS.TEL}
				</a>
			</div>
			<div className={styles.userButtonsContainer}>
				{data
					? <Components.UserInfoMenuButtons data={data} logOut={logOut} />
					: <Components.AuthButtons />}
			</div>
		</div>
	)
};
