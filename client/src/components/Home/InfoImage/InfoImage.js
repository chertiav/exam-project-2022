import React from 'react';
//=====================================
import styles from './InfoImage.module.sass';
import * as CONATSNTS from '../../../constants'
import * as Components from '../../';

export const InfoImage = () => {
	return (
		<div className={styles.greyContainer}>
			<Components.UI.SlideBar
				images={CONATSNTS.CAROUSEL_CONSTANTS.mainSliderImages}
				carouselType={CONATSNTS.CAROUSEL_CONSTANTS.MAIN_SLIDER}
			/>
		</div>
	)
};
