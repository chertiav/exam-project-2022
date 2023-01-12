import React from 'react';
//=================================
import styles from './InfoContestSteps.module.sass';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const InfoContestSteps = () => {
	return (
		<>
			<h2>{CONSTANTS.HOME_PAGE_CONSTANTS.STEPS_WORK_CONTEST.TITLE}</h2>
			<div className={styles.whiteContainer}>
				<Components.ContestStepsImageRight
					stepData={CONSTANTS.HOME_PAGE_CONSTANTS.STEPS_WORK_CONTEST.whiteContainer}
				/>
			</div>
			<div className={styles.greenContainer}>
				<Components.ContestStepsImageLeft
					stepData={CONSTANTS.HOME_PAGE_CONSTANTS.STEPS_WORK_CONTEST.greenContainer}
				/>
			</div>
			<div className={styles.greyContainer}>
				<Components.ContestStepsImageRight
					stepData={CONSTANTS.HOME_PAGE_CONSTANTS.STEPS_WORK_CONTEST.greyContainer}
				/>
			</div>
		</>
	)
};
