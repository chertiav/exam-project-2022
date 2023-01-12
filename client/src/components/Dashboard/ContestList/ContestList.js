import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//================================================
import * as  Components from '../..'

export const ContestList = ({ loadMore }) => {

	const { contestsList: { contests, isFetching, haveMore } } = useSelector(state => state);
	const navigate = useNavigate();

	const goToExtended = (contest_id) =>
		navigate(`/contest/${contest_id}`);

	const setContestList = () => {
		return (
			contests.map(contest =>
				<Components.ContestBox
					data={contest}
					key={contest.id}
					goToExtended={goToExtended}
				/>
			)
		)
	};

	return (
		<Components.ContestsContainer
			loadMore={loadMore}
			haveMore={haveMore}
			isFetching={isFetching}
			type={'contest'}
		>
			{setContestList()}
		</Components.ContestsContainer>
	)
};
