import React from 'react';
import { Box, Stack } from '@mui/material';
//===================================
import styles from './PricingBox.module.sass';
import * as Components from '../../';

export const PricingBox = () => {

	return (
		<Box boxSizing={'border-box'} width={'100%'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			fontWeight={400} lineHeight={1.5} p={'2rem 0.9375rem'}
			className={styles.container}>
			<Stack direction={'row'} mb={'5rem'} flexWrap={'wrap'}>
				<Components.PricingBoxWhite />
				<Components.PricingBoxBlue />
			</Stack >
		</Box >
	)
};
