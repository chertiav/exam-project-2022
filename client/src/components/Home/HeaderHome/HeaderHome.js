import React, { useEffect, useState } from 'react';
//===========================================
import styles from './HeaderHome.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';


export const HeaderHome = () => {

	const [index, setIndex] = useState(0);
	const [styleName, setStyle] = useState(styles.headline__static);

	useEffect(() => {
		const timeout = setInterval(() => {
			setIndex(index + 1);
			setStyle(styles.headline__isloading);
		}, 3000);
		return () => {
			setStyle(styles.headline__static);
			clearInterval(timeout);
		};
	});

	const text = CONSTANTS.HOME_PAGE_CONSTANTS.ANIMATION_TEXT[
		index % CONSTANTS.HOME_PAGE_CONSTANTS.ANIMATION_TEXT.length
	];

	return (
		<div className={styles.headerBar}>
			<div className={styles.headline}>
				<span>{CONSTANTS.HOME_PAGE_CONSTANTS.HEAD_BAR_HEAD_LINE.title}</span>
				<span className={styleName}>{text}</span>
			</div>
			<p>{CONSTANTS.HOME_PAGE_CONSTANTS.HEAD_BAR_HEAD_LINE.text}</p>
			<Components.DashboardButton />
		</div>
	)
};
