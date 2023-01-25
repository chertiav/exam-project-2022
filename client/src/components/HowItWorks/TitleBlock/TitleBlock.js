import React from 'react';
import { Box } from '@mui/material';

export const TitleBlock = ({ title, component }) => {

	const position = component !== 'h1' ? 'center' : 'left';

	const getFontSize = () => {
		switch (component) {
			case 'h1': return { xs: '2.5rem', sm: '2.5rem', md: '2.5rem', lg: '2.5rem', xl: '2.5rem' };
			case 'h2': return { xs: '1.55rem', sm: '1.55rem', md: '2rem', lg: '2rem', xl: '2rem' };
			case 'h3': return { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem' };
			default: break;
		}
	};

	const getFontWeight = () => {
		switch (component) {
			case 'h1': return 600;
			case 'h2': return 400;
			case 'h3': return 500;
			default: break;
		}
	};

	return (
		<Box component={component}
			boxSizing={'border-box'} mb={'0.5rem'}
			fontSize={getFontSize()}
			textAlign={position}
			fontWeight={getFontWeight()}
		>
			{title}
		</Box>
	)
};
