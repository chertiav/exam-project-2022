import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//==========================================
import styles from './NavContainer.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';

export const NavContainer = ({ data }) => {

	const navigate = useNavigate();
	const startContests = () => navigate('/startContest');

	const menuItemsRender = (item) => (
		<li key={item.title}>
			<span>{item.title}</span>
			<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
			<ul>
				{item.items.map((item) =>
					<Link key={item.title} to={item.linkPage}>
						<li>{item.title.toUpperCase()}</li>
					</Link>
				)}
				<Link key={item.last.title} to={item.last.linkPage}>
					<li className={styles.last}>{item.last.title.toUpperCase()}</li>
				</Link>
			</ul>
		</li>
	);

	const menuRender = () =>
		CONSTANTS.HEADER_CONSTANTS.MENU_ITEMS.map((item) => menuItemsRender(item));

	return (
		<div className={styles.navContainer}>
			<Components.UI.Logo className={styles.logo}
				src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
				alt="blue_logo"
			/>
			<div className={styles.leftNav}>
				<div className={styles.nav}>
					<ul>{menuRender()}</ul>
				</div>
				{data
					&& data.role === CONSTANTS.APP_CONSTANTS.CUSTOMER
					&& <Components.UI.StartButton title={'START CONTEST'} navigateTo={startContests} />
				}
			</div>
		</div>
	)
};
