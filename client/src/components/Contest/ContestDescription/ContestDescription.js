import React from 'react';
//================================
import * as CONSTANTS from '../../../constants';

export const ContestDescription = ({ classesStyle, image, alt, title }) => {
	return (
		<div className={classesStyle}>
			<div>
				<img
					src={CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + image}
					alt={alt} />
			</div>
			<span>{title}</span>
		</div>
	)
};
