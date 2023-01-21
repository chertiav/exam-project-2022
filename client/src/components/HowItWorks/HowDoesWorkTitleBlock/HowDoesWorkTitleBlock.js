import React from 'react';
import { Box } from '@mui/material';

export const HowDoesWorkTitleBlock = ({ title, component }) => {
	return (
		<Box component={component}
			boxSizing={'border-box'} mb={'0.5rem'}
			fontSize={'2.5rem'}
			fontWeight={600}
		>
			{title}
		</Box>
	)
};
