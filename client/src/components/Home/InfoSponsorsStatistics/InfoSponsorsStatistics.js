import React from 'react';
//===========================================
import styles from './InfoSponsorsStatistics.module.sass';
import * as CONSTANTS from '../../../constants';

export const InfoSponsorsStatistics = () => {

	return (
		<div className={styles.greyContainer}>
			<div className={styles.adv}>
				{CONSTANTS.HOME_PAGE_CONSTANTS.SPONSORS.map((sponsor, index) =>
					<div key={index} className={styles.images}>
						<img
							src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + sponsor.imageInactive}`}
							alt={sponsor.alt} />
						<img
							src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + sponsor.imageActive}`}
							alt={sponsor.alt} />
					</div>
				)}
			</div>
			<div className={styles.stats}>
				{CONSTANTS.HOME_PAGE_CONSTANTS.STATISTICS_DATA.map((itemData) =>
					<div key={itemData.title} >
						<p>{itemData.data}</p>
						<span>{itemData.title}s</span>
					</div>
				)}
			</div>
		</div>
	)
};
