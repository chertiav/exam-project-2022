import React from 'react';
import { useSelector } from 'react-redux';

export const FilterContestId = ({ classes, changePredicate }) => {

	const { contestsList: { creatorFilter } } = useSelector(state => state);
	return (
		<div className={classes.inputContainer}>
			<span>By contest ID</span>
			<input
				type="text"
				onChange={({ target }) =>
					changePredicate({
						name: 'contestId',
						value: target.value,
					})}
				name="contestId"
				value={creatorFilter.contestId}
				className={classes.input}
			/>
		</div>
	)
};

