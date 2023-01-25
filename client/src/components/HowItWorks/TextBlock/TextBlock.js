import React from 'react';
import { Box } from '@mui/material';

export const TextBlock = ({ text, textAlign }) => {
	return (
		<Box component={'p'}
			boxSizing={'border-box'} mb={'1rem'}
			fontSize={'1rem'}
			lineHeight={1.7}
			color={'#77838f'}
			textAlign={textAlign}
		>
			{text}
		</Box>
	)
};
