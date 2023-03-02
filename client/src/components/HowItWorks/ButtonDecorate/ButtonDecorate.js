import React from 'react';
import { Box } from '@mui/material';

export const ButtonDecorate = ({ title }) => {
	return (
		<Box
			component={'span'}
			display={'inline-block'}
			width={'max-content'}
			boxSizing={'border-box'}
			fontSize={'.6875rem'}
			fontWeight={400}
			padding={'0.4375rem 0.9375rem'}
			border={'1px solid transparent'}
			borderColor={'transparent'}
			borderRadius={'6.1875rem'}
			color={'#377dff'}
			backgroundColor={'rgba(55,125,255,.1)'}
			mb={'0.5rem'}
			lineHeight={1.5}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
		>
			{title}
		</Box >
	)
};
