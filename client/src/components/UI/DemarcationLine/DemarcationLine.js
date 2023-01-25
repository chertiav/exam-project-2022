import React from 'react';
import { Box } from '@mui/material';

export const DemarcationLine = (props) => {
	return (
		<Box component={'hr'} border={0} m={0} width={'100%'} {...props}></Box>
	)
};
