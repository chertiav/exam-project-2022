import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//================================
import styles from './CreatorDashboard.module.sass';
import { contestActions } from '../../../store/actions';
import * as Components from '../../';
import * as  CONSTANTS from '../../../constants';
import * as utils from '../../../utils';

export const CreatorDashboard = () => {

	const {
		contestsList: { error, creatorFilter, contests }
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const limit = CONSTANTS.DASHBOARD_CONSTANTS.LIST_LIMIT;

	const getContests = (data) =>
		dispatch(contestActions.getContestsCreativeAction(data));

	const tryLoadAgain = () => {
		dispatch(contestActions.clearContestList());
		getContests({
			limit,
			offset: 0,
			...utils.function.getPredicateOfRequest(creatorFilter)
		});
	};

	const loadMore = (startFrom) => {
		getContests({
			limit,
			offset: startFrom,
			...utils.function.getPredicateOfRequest(creatorFilter),
		});
	};

	useEffect(() => {
		dispatch(contestActions.getContestsCreativeAction(
			{ limit, offset: 0, ...creatorFilter }));
		return () => {
			dispatch(contestActions.clearContestList());
		}
	}, [dispatch, creatorFilter, limit])

	return (
		<div className={styles.mainContainer}>
			<Components.FilterBlock />
			<div className={styles.contestsContainer}>
				{error || !contests.length
					? <Components.UI.TryAgain
						getData={tryLoadAgain}
						message={error ? 'error' : 'TryAgain'}
					/>
					: <Components.ContestList loadMore={loadMore} />
				}
			</div>
		</div>
	);
};
