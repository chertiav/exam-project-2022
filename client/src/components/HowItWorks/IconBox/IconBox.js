import React from 'react';
import { Box } from '@mui/material';
//======================================
import * as CONSTANTS from '../../../constants';

export const IconBox = ({ image, alt }) => {
	return (
		<Box boxSizing={'border-box'} width={'4.5rem'} mb={'1rem'}>
			<img
				src={CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + image}
				alt={alt} />
		</Box>
	)
};
