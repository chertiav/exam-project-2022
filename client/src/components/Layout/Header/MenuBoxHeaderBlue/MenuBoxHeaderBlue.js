import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatTextFill, BsHeartFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { ImSpinner4 } from "react-icons/im";
import { Link } from 'react-router-dom';
import { MenuItem, MenuList, Paper } from '@mui/material';
//===================================================
import * as CONSTANTS from '../../../../constants';

export const MenuBoxHeaderBlue = ({ classes }) => {

	const menuList = CONSTANTS.HEADER_CONSTANTS.MENU_BOX_BLUE_HEADER;

	const getIconst = (iconsTitle, classesIcons) => {
		switch (iconsTitle) {
			case 'FaPhoneAlt':
				return <FaPhoneAlt className={classesIcons} />;
			case 'BsChatTextFill':
				return <BsChatTextFill className={classesIcons} />;
			case 'TfiEmail':
				return <TfiEmail className={classesIcons} />;
			case 'BsHeartFill':
				return <BsHeartFill className={classesIcons} />;
			case 'ImSpinner4':
				return <ImSpinner4 className={classesIcons} />;
			default:
				break;
		}
	};

	const renderMenuItems = (menuItems) =>
		menuItems.map(menuItem =>
			<a key={menuItem.title} href={menuItem.link} className={classes.ItemGroup}>
				{getIconst(menuItem.icons, classes.iconsItemGroup)}
				<MenuItem className={classes.menuItem} >{menuItem.title}</MenuItem>
			</a>
		);

	return (
		menuList.map((menuListItem) =>
			<div key={menuListItem.titleGroup} className={classes.navbarItem}>
				<Link to={menuListItem.linkTo} className={classes.menuTitleGroup}>
					{getIconst(menuListItem.iconsTitle)}
					<div className={classes.menuTitle}>{menuListItem.titleGroup}</div>
				</Link>
				{menuListItem?.items &&
					<Paper className={classes.menuListContainer}>
						<MenuList>
							{renderMenuItems(menuListItem.items, classes.icons)}
						</MenuList>
					</Paper>
				}
			</div >
		)
	)
};
