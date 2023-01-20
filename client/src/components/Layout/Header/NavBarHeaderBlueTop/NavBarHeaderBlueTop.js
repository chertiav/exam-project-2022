import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
//=====================================
import styles from './NavBarHeaderBlueTop.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../..';


export const NavBarHeaderBlueTop = ({ logOut, switchMenu }) => {

	return (
		<div className={styles.wraper}>
			<div className={styles.container} >
				<Components.UI.Logo className={styles.logo}
					to={'/'}
					src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}logo_white.svg`}
					alt="logo_white" />
				<div className={styles.search} >
					<input className={styles.inputHeder} type="text" placeholder="Search over 100,000 names" />
					<button className={styles.buttonSearch}>
						<SearchIcon className={styles.searchIcon} />
					</button>
				</div>
				<Components.NavBoxHeaderBlueTop logOut={logOut} switchMenu={switchMenu} />
			</div>
		</div>
	)
};
