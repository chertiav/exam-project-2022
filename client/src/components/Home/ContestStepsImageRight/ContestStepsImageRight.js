import React from 'react';
//==============================================
import styles from './ContestStepsImageRight.module.sass';
import * as CONSTANTS from '../../../constants';

export const ContestStepsImageRight = ({ stepData }) => {
	return (
		<div className={styles.stepReverse}>
			<div >
				<h3>{stepData.title}</h3>
				{stepData.text.map((item) =>
					<p key={item}><i className="fas fa-check" /><span>{item}</span></p>)
				}
			</div>
			< img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + stepData.image}`} alt={stepData.alt} />
		</div>
	)
};
