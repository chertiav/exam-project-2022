import React from 'react';
//==============================================
import styles from './ContestStepsImageLeft.module.sass';
import * as CONSTANTS from '../../../constants';

export const ContestStepsImageLeft = ({ stepData }) => {
	return (
		<div className={styles.step}>
			< img
				src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + stepData.image}`}
				alt={stepData.alt}
			/>
			<div className={styles.greenStep}>
				<h3>{stepData.title}</h3>
				{stepData.text.map((item) =>
					<p key={item}><i className="fas fa-check" /><span>{item}</span></p>
				)}
			</div>
		</div >
	)
};
