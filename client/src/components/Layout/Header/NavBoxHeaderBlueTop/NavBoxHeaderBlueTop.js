import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
//=============================
import styles from './NavBoxHeaderBlueTop.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as utils from '../../../../utils';
import * as Components from '../../..';

export const NavBoxHeaderBlueTop = ({ logOut, switchMenu }) => {

	const navigate = useNavigate();
	const navigateTo = () => navigate('/startContest');

	const auth = utils.function.useAuth();
	const menuListAuth = auth
		? CONSTANTS.HEADER_CONSTANTS.MENU_ITEMS_BLUE_AUTH.auth
		: CONSTANTS.HEADER_CONSTANTS.MENU_ITEMS_BLUE_AUTH.isNotAuth

	const classesMenuAuth = {
		navbarItem: styles.navbarItem,
		menuTitleGroup: styles.menuTitleGroup,
		icons: styles.icons,
		menuTitle: styles.menuTitle,
		menuListContainer: styles.menuListContainer,
		menuItem: styles.menuItem,
		ItemGroup: styles.ItemGroup,
		iconsItemGroup: styles.iconsItemGroup,
	};

	return (
		<div className={styles.container}>
			<Components.MenuItemListAuth
				menuList={menuListAuth}
				classes={classesMenuAuth}
				auth={auth}
				logOut={logOut}
			/>
			<Components.MenuBoxHeaderBlue classes={classesMenuAuth} />
			<div className={styles.navbarItem}>
				<Components.UI.StartButton
					classes={styles.startButton}
					title={'Start Contest'}
					navigateTo={navigateTo}
				/>
			</div>
			<div className={styles.containerBtn}>
				<GiHamburgerMenu
					className={styles.btn}
					onClick={switchMenu}
				/>
			</div>
		</div>
	)
};


