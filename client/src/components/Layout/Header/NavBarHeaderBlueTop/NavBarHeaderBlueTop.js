import React from 'react';
//=====================================
import styles from './NavBarHeaderBlueTop.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../..';


export const NavBarHeaderBlueTop = ({ logOut, switchMenu }) => {

	const classesSearchBlock = {
		search: styles.search,
		input: styles.inputHeder,
		buttonSearch: styles.buttonSearch,
		searchIcon: styles.searchIcon,
	}

	return (
		<div className={styles.wraper}>
			<div className={styles.container} >
				<Components.UI.Logo className={styles.logo}
					to={'/'}
					src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}logo_white.svg`}
					alt="logo_white" />
				<Components.UI.SearchBlock
					classes={classesSearchBlock}
					inputText={'Search over 100,000 names'}
				/>
				<Components.NavBoxHeaderBlueTop logOut={logOut} switchMenu={switchMenu} />
			</div>
		</div>
	)
};
