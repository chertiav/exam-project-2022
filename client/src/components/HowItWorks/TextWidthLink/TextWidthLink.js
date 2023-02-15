import React from 'react';
import { Link } from 'react-router-dom';

export const TextWidthLink = ({ item, classes, ...rest }) => {
	return (
		<>
			{item.itemTextStart}
			<Link to={item.linkTo} className={classes.linkWord} {...rest}>
				{item.linkWord}
			</Link>
			{item.itemTextEnd}
		</>
	)
};
