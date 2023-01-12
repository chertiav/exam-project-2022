import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
//====================================================
import styles from './StartContest.module.sass';
import { contestActions } from '../../store/actions';
import * as CONSTANTS from '../../constants';
import * as Components from '../../components';
import * as utils from '../../utils';

export const StartContest = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { userStore: { data } } = useSelector(state => state);

	useEffect(() => {
		dispatch(contestActions.clearContestStore())
	}, [dispatch]);

	const choseBundle = (bundle) => {
		dispatch(contestActions.selectBundle(bundle));
	}

	const setBundle = (bundleStr) => {
		const bundleList = utils.function.getBundle(bundleStr);
		choseBundle(bundleList);
		navigate(`${pathname}/${bundleList.first}Contest`);
	};


	if (data?.role !== CONSTANTS.APP_CONSTANTS.CUSTOMER) {
		return (
			<Navigate to={'/'} replace />
		);
	}
	return (
		<div className={styles.startContestContainer}>
			<Components.UI.ContestHeader
				title={CONSTANTS.START_CONTEST.HEADER_TITLE}
				text={CONSTANTS.START_CONTEST.HEADER_TEXT}
				currentStep={1}
			/>
			<Components.BaseBundles setBundle={setBundle} />
			<Components.CombinedBundles setBundle={setBundle} />
		</div>
	)
};
