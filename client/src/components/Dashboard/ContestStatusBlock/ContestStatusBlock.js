import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
//=======================================
import styles from './ContestStatusBlock.module.sass';
import * as CONSTANTS from '../../../constants';
import { contestActions } from '../../../store/actions';

export const ContestStatusBlock = () => {

	const { contestsList: { customerFilter } } = useSelector(state => state);
	const dispatch = useDispatch();

	const newFilter = (filter) =>
		dispatch(contestActions.setNewCustomerFilter(filter));

	return (
		<div className={styles.filterContainer}>
			{CONSTANTS.DASHBOARD_CONSTANTS.CONTEST_STATUS.map(statusItem =>
				<div key={statusItem.status} onClick={() => newFilter(statusItem.status)}
					className={classNames({
						[styles.activeFilter]: statusItem.status === customerFilter,
						[styles.filter]: statusItem.status !== customerFilter,
					})}
				>
					<span>{statusItem.displayName}</span>
				</div>
			)}
		</div>
	)
};
