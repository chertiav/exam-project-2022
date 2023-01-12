import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//===================================
import styles from './CustomerDashboard.module.sass';
import * as  Components from '../..'
import { contestActions } from '../../../store/actions';
import * as  CONSTANTS from '../../../constants'

export const CustomerDashboard = () => {

	const {
		contestsList: { error, customerFilter }
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const limit = CONSTANTS.DASHBOARD_CONSTANTS.LIST_LIMIT;

	const getContests = (data) =>
		dispatch(contestActions.getContestsCustomerAction(data));

	const tryToGetContest = () => {
		dispatch(contestActions.clearContestList());
		getContests();
	};

	const loadMore = (offset) => {
		getContests({ limit, offset, contestStatus: customerFilter });
	};

	useEffect(() => {
		dispatch(contestActions.getContestsCustomerAction(
			{ limit, contestStatus: customerFilter }));
		return () => dispatch(contestActions.clearContestList());
	}, [dispatch, customerFilter, limit])

	return (
		<div className={styles.mainContainer}>
			<Components.ContestStatusBlock />
			<div className={styles.contestsContainer}>
				{error
					? <Components.UI.TryAgain getData={tryToGetContest} />
					: <Components.ContestList loadMore={loadMore} />
				}
			</div>
		</div>
	)
};