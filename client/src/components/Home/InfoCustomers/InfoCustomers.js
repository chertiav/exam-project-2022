import React from 'react';
//=============================
import styles from './InfoCustomers.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const InfoCustomers = () => {
	return (
		<div className={styles.blueContainer}>
			<h2 className={styles.whiteUnderline}>
				{CONSTANTS.HOME_PAGE_CONSTANTS.INFO_CUSTOMERS}
			</h2>
			<Components.UI.SlideBar
				images={CONSTANTS.CAROUSEL_CONSTANTS.feedbackSliderImages}
				carouselType={CONSTANTS.CAROUSEL_CONSTANTS.FEEDBACK_SLIDER}
			/>
		</div>
	)
};
