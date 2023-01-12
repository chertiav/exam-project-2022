import React from 'react';
//==============================
import styles from './InfoForSale.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const InfoForSale = () => {
	return (
		<>
			<div className={styles.headerBar}>
				<h3>{CONSTANTS.HOME_PAGE_CONSTANTS.HEAD_BAR_BLUE_UNDERLINE.title}</h3>
				<p className={styles.blueUnderline}>
					{CONSTANTS.HOME_PAGE_CONSTANTS.HEAD_BAR_BLUE_UNDERLINE.text}
				</p>
			</div>
			<Components.UI.SlideBar
				images={CONSTANTS.CAROUSEL_CONSTANTS.exampleSliderImages}
				carouselType={CONSTANTS.CAROUSEL_CONSTANTS.EXAMPLE_SLIDER}
			/>
		</>
	)
};
