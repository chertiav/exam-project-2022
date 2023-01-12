import React from 'react';
//===========================
import * as Components from '../../';

export const ContestSpecialInfo = ({
	name, type, titleName, titleType, classes }) => {

	return (
		<>
			{name && (
				<Components.ContestData
					title={titleName}
					data={name}
					classes={classes}
				/>
			)}
			<Components.ContestData
				title={titleType}
				data={type}
				classes={classes}
			/>
		</>
	);
};
