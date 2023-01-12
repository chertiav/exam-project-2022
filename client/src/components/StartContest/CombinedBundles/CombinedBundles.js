import React from 'react';
//=================================
import styles from './CombinedBundles.module.sass';
import * as Components from '../..';
import * as CONSTANTS from '../../../constants';

export const CombinedBundles = ({ setBundle }) => {

	return (
		<div className={styles.combinedBundles}>
			<div className={styles.infoCombinedBundles}>
				<span className={styles.headerInfo}>
					{CONSTANTS.START_CONTEST.COMBINE_BUNDLES.title}
				</span>
				<span className={styles.info}>
					{CONSTANTS.START_CONTEST.COMBINE_BUNDLES.info}
				</span>
				<hr />
			</div>
			<div className={styles.baseBundles}>
				<Components.BundleList
					bundles={CONSTANTS.START_CONTEST.COMBINE_BUNDLES.combinedBundles}
					setBundle={setBundle}
				/>
			</div>
		</div>
	)
};
