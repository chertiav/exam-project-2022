import React from 'react';
import { Box } from '@mui/material';
//=============================================
import * as Components from '../../../';


export const FooterMainGrey = () => {
	return (
		<Box bgcolor={'#ebebeb'} fontFamily={'"Raleway", sans-serif'}
			color={'#4a4a4a'} lineHeight={1.5}>
			<Box maxWidth={'1188px'} margin={'0 auto'} padding={'0 1rem'}>
				<Components.FooterLinks />
				<Components.FooterTrendingSearches />
				<Components.FooterSocial />
			</Box>
		</Box>
	)
};
