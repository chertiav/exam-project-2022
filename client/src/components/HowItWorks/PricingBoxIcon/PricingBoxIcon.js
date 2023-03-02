import React from 'react';
import { Stack } from '@mui/material';

export const PricingBoxIcon = ({ children, ...rest }) => {
	return (
		<Stack width={'2rem'} height={'2rem'} minWidth={'2rem'}
			mr={'1rem'} borderRadius={'50%'} position={'relative'}
			border={'1px solid transparent'} justifyContent={'center'}
			alignItems={'center'} {...rest}>
			{children}
		</Stack>
	)
};
