import React from 'react';
import { useSelector } from 'react-redux';

export const FilterSort = ({ classes, changePredicate }) => {

	const {
		contestsList: { creatorFilter }
	} = useSelector(state => state);

	return (
		<div className={classes.inputContainer}>
			<span>By amount award</span>
			<select
				onChange={({ target }) =>
					changePredicate({
						name: 'awardSort',
						value: target.value,
					})}
				value={creatorFilter.awardSort}
				className={classes.input}
			>
				<option value="desc">Descending</option>
				<option value="asc">Ascending</option>
			</select>
		</div>
	)
};
