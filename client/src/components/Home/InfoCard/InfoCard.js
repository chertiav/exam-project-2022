import React from 'react';
//============================================
import styles from './InfoCard.module.sass';
import * as CONSTANTS from '../../../constants';

export const InfoCard = () => {

	return (
		<div className={styles.container}>
			<h2 className={styles.blueUnderline}>{CONSTANTS.HOME_PAGE_CONSTANTS.CARD.title}</h2>
			<div className={styles.cardContainer}>
				{CONSTANTS.HOME_PAGE_CONSTANTS.CARD.cards.map((item) =>
					<div key={item.title} className={styles.card}>
						<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + item.image}`} alt={item.alt} />
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
				)}
			</div>
		</div>
	)
};
