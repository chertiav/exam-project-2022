import React from 'react';

export const ContestData = ({ title, data, classes }) => {
	return (
		<div className={classes.dataContainer}>
			<span className={classes.label}>{title}</span>
			<span className={classes.data}>{data}</span>
		</div>
	)
};
