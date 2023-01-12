import React from 'react';
import { Link } from 'react-router-dom';
//==============================================
import styles from './FooterRegistration.module.sass';
import * as CONSTANTS from '../../../../constants';


export const FooterRegistration = () => {

	const renderFooterItemsLast = (footerItem) => {
		return (
			<div key={footerItem.lastTitle}>
				< div className={styles.headerArticle} >
					{footerItem.lastTitle}
				</ div>
				<div className={styles.article} >
					{footerItem.text.map((lastItem) =>
						<span key={lastItem.highlightedWord}>
							{lastItem.text}
							<span className={styles.orangeSpan} >
								<Link to={CONSTANTS.APP_CONSTANTS.PATH_NOTN_FOUND}>
									{lastItem.highlightedWord}
								</Link>
							</span>
						</span>
					)}
				</div>
			</div>
		)
	};
	const renderFooterItemsNotLast = (footerItem) => {
		return (
			<div key={footerItem.title}>
				<div className={styles.headerArticle} >
					{footerItem.title}
				</ div>
				<div className={styles.article}>
					{footerItem.text}
				</div>
			</div>
		)
	};
	const renderFooter = () =>
		CONSTANTS.FOOTER_CONSTANTS.FOOTER_REGISTRATION_ITEMS.map((footerItems, index) =>
			<div className={styles.ColumnContainer} key={index}>
				{footerItems.map(footerItem =>
					!footerItem.lastTitle
						? renderFooterItemsNotLast(footerItem)
						: renderFooterItemsLast(footerItem)
				)}
			</div>
		)
	return (
		<div className={styles.footer}>
			<div className={styles.articlesMainContainer}>
				{renderFooter()}
			</div>
		</div>
	)
};
