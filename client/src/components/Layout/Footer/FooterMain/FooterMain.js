import React from 'react';
import { Link } from 'react-router-dom';
//=======================================
import styles from './FooterMain.module.sass';
import * as CONSTANTS from '../../../../constants';

export const FooterMain = () => {

	const topFooterItemsRender = (item) => (
		<div key={item.title}>
			<h4>{item.title}</h4>
			{item.items.map((footerItem) =>
				<Link
					key={footerItem}
					to={CONSTANTS.APP_CONSTANTS.PATH_NOTN_FOUND}
				>{footerItem}
				</Link>
			)}
		</div>
	);

	const topFooterRender = () =>
		CONSTANTS.FOOTER_CONSTANTS.FOOTER_ITEMS.map((item) =>
			topFooterItemsRender(item));

	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerTop}>
				<div>
					{topFooterRender()}
				</div>
			</div>
		</div>
	);
};
