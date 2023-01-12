import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
//====================================
import styles from './FilterBlock.module.sass';
import { contestActions } from '../../../store/actions';
import * as utils from '../../../utils';
import * as hooks from '../../../hooks';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const FilterBlock = () => {

	const {
		contestsList: { creatorFilter, contests },
		dataForContest: { isFetching }
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const limit = CONSTANTS.DASHBOARD_CONSTANTS.LIST_LIMIT;

	const prevLocation = hooks.usePrevious(location.search);
	const newFilter = (filter) => dispatch(contestActions.setNewCreatorFilter(filter));

	const parseParamsToUrl = (creatorFilter) => {
		const params = utils.function.paramsToUrl(creatorFilter);
		navigate(`/Dashboard?${queryString.stringify(params)}`);
	};

	const changePredicate = ({ name, value }) => {
		newFilter({ [name]: value === 'Choose industry' ? null : value });
		parseParamsToUrl({
			...creatorFilter, ...{ [name]: value === 'Choose industry' ? null : value }
		});
	};

	const parseUrlForParams = useCallback((search) => {
		const obj = queryString.parse(search);
		const filter = {
			typeIndex: obj.typeIndex || 1,
			contestId: obj.contestId ? obj.contestId : '',
			industry: obj.industry ? obj.industry : '',
			awardSort: obj.awardSort || 'asc',
			ownEntries: typeof obj.ownEntries === 'undefined' ? false : obj.ownEntries,
		};
		if (!isEqual(filter, creatorFilter)) {
			dispatch(contestActions.setNewCreatorFilter(filter));
			dispatch(contestActions.clearContestList());
			dispatch(contestActions.getContestsCreativeAction({ limit, offset: 0, ...filter }));
			return false;
		} return true;
	}, [dispatch, creatorFilter, limit]);

	useEffect(() => {
		dispatch(contestActions.getDataForContestAction());
		if (parseUrlForParams(location.search) && !contests.length) {
			dispatch(contestActions.getDataForContestAction(creatorFilter));
		}
		return () => { dispatch(contestActions.clearDataForContest()) };
	}, [dispatch, contests.length, location.search, parseUrlForParams, creatorFilter]);

	useEffect(() => {
		if (location.search !== prevLocation) parseUrlForParams(location.search);
	}, [dispatch, parseUrlForParams, prevLocation, location.search]);

	const filterSectionClasses = {
		inputContainer: styles.inputContainer,
		input: styles.input
	}

	return (
		<div className={styles.filterContainer}>
			<span className={styles.headerFilter}>Filter Results</span>
			<div className={styles.inputsContainer}>
				<div
					onClick={() =>
						changePredicate({
							name: 'ownEntries',
							value: !creatorFilter.ownEntries
						})}
					className={classNames(styles.myEntries, {
						[styles.activeMyEntries]: creatorFilter.ownEntries
					})}
				>
					MyEntries
				</div>
				<Components.FilterSelectType
					classes={filterSectionClasses}
					changePredicate={changePredicate}
				/>
				<Components.FilterContestId
					classes={filterSectionClasses}
					changePredicate={changePredicate}
				/>
				{!isFetching && (
					<Components.FilterIndustryType
						classes={filterSectionClasses}
						changePredicate={changePredicate}
					/>
				)}
				<Components.FilterSort
					classes={filterSectionClasses}
					changePredicate={changePredicate}
				/>
			</div>
		</div>
	)
};

