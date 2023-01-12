import React from 'react';
import { useSelector } from 'react-redux';
//=================================
import styles from './ContestSideBar.module.sass';
import * as Components from '../../';
import * as utils from '../../../utils';

export const ContestSideBar = ({ contestData, totalEntries }) => {

	const { userStore: { data } } = useSelector(state => state);
	const { User, prize } = contestData;

	const customerInfoClasses = {
		info: styles.customerInfo,
		nameContainer: styles.customerNameContainer
	}

	return (
		<div className={styles.contestSideBarInfo}>
			<div className={styles.contestInfo}>
				<div className={styles.awardAndTimeContainer}>
					<Components.ContestDescription
						classesStyle={styles.prizeContainer}
						image={'big-diamond.png'}
						alt='diamond'
						title={`$ ${prize}`}
					/>
					<div className={styles.timeContainer}>
						<Components.ContestDescription
							classesStyle={styles.timeDesc}
							image={'clock.png'}
							alt='clock'
							title='Going'
						/>
						<span className={styles.time}>
							{utils.function.getTimeStr()}
						</span>
					</div>
					<Components.ContestDescription
						classesStyle={styles.guaranteedPrize}
						image={'smallCheck.png'}
						alt='check'
						title='Guaranteed prize'
					/>
				</div>
				<div className={styles.contestStats}>
					<span>Contest Stats</span>
					<div className={styles.totalEntrie}>
						<span className={styles.totalEntriesLabel}>Total Entries</span>
						<span>{totalEntries}</span>
					</div>
				</div>
			</div>
			{data.id !== User.id && (
				<div className={styles.infoCustomerContainer}>
					<span className={styles.labelCustomerInfo}>About Contest Holder</span>
					<Components.ContestUserInfo
						data={User}
						flagLogin={true}
						classes={customerInfoClasses}
					/>
				</div>
			)}
		</div>
	);
};