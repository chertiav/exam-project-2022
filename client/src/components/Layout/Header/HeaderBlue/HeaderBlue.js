import React, { useState } from 'react';
//==========================================
import * as Components from '../../..';
import styles from './HeaderBlue.module.sass';

export const HeaderBlue = ({ logOut }) => {

	const [menuActive, setMenuActive] = useState(false);
	const switchMenu = () => setMenuActive(!menuActive);

	return (
		<div className={styles.container}>
			<Components.NavBarHeaderBlueTop logOut={logOut} switchMenu={switchMenu} />
			<Components.NavBarHeaderBlueBottom menuActive={menuActive} />
		</div>
	)
};
