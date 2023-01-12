import React from 'react';
import Rating from 'react-rating';
//==================================
import * as CONSTANTS from '../../../constants';

export const RatingComponent = (props) => {
	return (
		<Rating
			{...props}
			fractions={2}
			fullSymbol={
				<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />
			}
			placeholderSymbol={
				<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />
			}
			emptySymbol={(
				<img
					src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`}
					alt="star-outline"
				/>
			)}
		/>
	)
};

