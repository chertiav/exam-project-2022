import React from 'react';
import { useSelector } from 'react-redux';
//===========================================
import * as CONSTANTS from '../../../constants';

export const FilterSelectType = ({ classes, changePredicate }) => {

	const { contestsList: { creatorFilter } } = useSelector(state => state);
	const types = CONSTANTS.DASHBOARD_CONSTANTS.CONTEST_TYPE;

	const renderSelectType = () => {

		const renderTypeItems = () =>
			types.map((item, index) =>
				!item || <option key={index - 1} value={item}>{item}</option>)

		return (
			<select
				onChange={({ target }) =>
					changePredicate({
						name: 'typeIndex',
						value: types.indexOf(target.value),
					})}
				value={types[creatorFilter.typeIndex]}
				className={classes.input}
			>
				{renderTypeItems()}
			</select>
		);
	};

	return (
		<div className={classes.inputContainer}>
			<span>By contest type</span>
			{renderSelectType()}
		</div>

	)
};
