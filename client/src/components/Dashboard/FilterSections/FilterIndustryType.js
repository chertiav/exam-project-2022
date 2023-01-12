import React from 'react';
import { useSelector } from 'react-redux';

export const FilterIndustryType = ({ classes, changePredicate }) => {

	const {
		dataForContest: { data },
		contestsList: { creatorFilter }
	} = useSelector(state => state);

	const renderIndustryType = () => {

		const array = [];
		const { industry } = data;
		array.push(<option key={0} value={null}>Choose industry</option>);
		industry.forEach((industry, i) => array.push(<option key={i + 1} value={industry}>{industry}</option>));
		return (
			<select
				onChange={({ target }) =>
					changePredicate({
						name: 'industry',
						value: target.value,
					})}
				value={creatorFilter.industry}
				className={classes.input}
			>
				{array}
			</select>
		);
	};

	return (
		<div className={classes.inputContainer}>
			<span>By industry</span>
			{renderIndustryType()}
		</div>
	)
};
