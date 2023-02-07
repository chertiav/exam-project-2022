import React from 'react';
//=============================
import styles from './HowItWorks.module.sass';
import * as Components from '../../components';

export const HowItWorks = () => {
	return (
		<div className={styles.wrapper}>
			<Components.HowDoesWork />
			<Components.OurServices />
			<Components.UI.DemarcationLine borderTop={'1px solid #e7eaf3'} />
			<Components.HowContestWork />
			<Components.UI.DemarcationLine borderTop={'1px solid #e7eaf3'} />
			<Components.FaqTopicsBlock />

		</div>
	)
};
