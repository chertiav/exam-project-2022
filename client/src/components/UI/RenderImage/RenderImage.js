import React from 'react';
//======================================
import { APP_CONSTANTS } from '../../../constants';


export const RenderImage = ({ image, ...rest }) => {
	return (
		<img src={APP_CONSTANTS.STATIC_IMAGES_PATH + image.imageName} alt={image.alt} {...rest} />
	)
};
