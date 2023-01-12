import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//==============================================
import styles from './UserInfoMenuButtons.module.sass';
import { controller } from '../../../../api/ws/socketController';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';


export const UserInfoMenuButtons = ({ data }) => {

	const navigate = useNavigate();

	const logOut = () => {
		localStorage.removeItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN);
		controller.unsubscribe(data.id);
		navigate('/login');
	};

	const menuItem = () => {
		return (
			<ul>
				{CONSTANTS.HEADER_CONSTANTS.MENU_USER_INFO.mainElementMenu.map(menuItem =>
					<Link key={menuItem.title} to={menuItem.linkPage}>
						<li>{menuItem.title.toUpperCase()}</li>
					</Link>
				)}
				<li className={styles.last} onClick={logOut}>
					{CONSTANTS.HEADER_CONSTANTS.MENU_USER_INFO.lastElementMenu.toUpperCase()}
				</li>
			</ul>
		)
	};

	return (
		<>
			<div className={styles.userInfo}>
				<Components.UI.Avatar avatar={data.avatar} className={styles.userImage} alt="user" />
				<span>{`Hi, ${data.displayName}`}</span>
				<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
				{menuItem()}
			</div>
			<a href={`mailto:${CONSTANTS.HEADER_CONSTANTS.CONTACTS.EMAIL}`}>
				<img className={styles.emailIcon}
					src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}email.png`}
					alt="email" />
			</a>
		</>
	)
};
