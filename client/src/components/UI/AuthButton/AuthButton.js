import React from 'react';

export const AuthButton = ({ isFetching, title, classes, ...rest }) => {
	return (
		<button
			{...rest}
			className={classes.submitContainer}
		>
			<span className={classes.inscription}>
				{isFetching ? 'Submitting...' : title}
			</span>
		</button>
	)
};
