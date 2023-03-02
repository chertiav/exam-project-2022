import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, MenuList, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
//============================================
import * as Components from '../../../';

export const MenuItemListAuth = ({ menuList, classes, auth, logOut }) => {

	const { userStore: { data, isFetching } } = useSelector(state => state)

	const renderMenuItems = () => {
		return (
			menuList.items.map(menuItems =>
				<Link key={menuItems.title} to={menuItems.linkPage}>
					<MenuItem className={classes.menuItem} >{menuItems.title}</MenuItem>
				</Link>
			)
		)
	};

	return (
		<div className={classes.navbarItem}>
			{isFetching
				? <Components.UI.SceletonAuth />
				: <>
					<Link to={'/login'} className={classes.menuTitleGroup}>
						{!data || data?.avatar === 'anon.png'
							? <FaUser className={classes.icons} />
							: <Components.UI.Avatar avatar={data?.avatar} />}
						<div className={classes.menuTitle}>{menuList.title}</div>
					</Link>
					<Paper className={classes.menuListContainer}>
						<MenuList>
							{renderMenuItems()}
							{auth &&
								<MenuItem
									className={classes.menuItem}
									onClick={() => logOut(data.id)}
								>
									Logout
								</MenuItem>}
						</MenuList>
					</Paper>
				</>}
		</div>
	)
};

