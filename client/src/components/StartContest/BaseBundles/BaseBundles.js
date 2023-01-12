import React from 'react';
//====================================
import styles from './BaseBundles.module.sass';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const BaseBundles = ({ setBundle }) => {

	return (
		<div className={styles.baseBundleContainer}>
			<div className={styles.infoBaseBundles}>
				<span className={styles.headerInfo}>
					{CONSTANTS.START_CONTEST.BASE_BUNDLES.title}
					<span>
						{CONSTANTS.START_CONTEST.BASE_BUNDLES.titleHighlightedWord}
					</span>
				</span>
				<span className={styles.info}>
					{CONSTANTS.START_CONTEST.BASE_BUNDLES.info}
				</span>
				<hr />
			</div>
			<div className={styles.baseBundles}>
				<Components.BundleList
					bundles={CONSTANTS.START_CONTEST.BASE_BUNDLES.baseBundles}
					setBundle={setBundle}
				/>
			</div>
		</div>
	)
};
