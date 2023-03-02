import React from 'react';
import { Box, Stack } from '@mui/material';
//==================================================
import styles from './OurServices.module.sass';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';


export const OurServices = () => {

	const { titleButtonDecorate, title, text, cards } = CONSTANTS.HOW_IT_WORKS_CONSTANTS.OUR_SERVICES_BLOCK;

	return (
		<Box boxSizing={'border-box'} width={'100%'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			fontWeight={400} lineHeight={1.5}
			p={'2rem 0.9375rem'} className={styles.container}
		>
			<Stack alignItems={'center'} mb={'4rem'}>
				<Components.ButtonDecorate title={titleButtonDecorate} />
				<Components.TitleBlock component={'h2'} title={title} />
				<Components.TextBlock textAlign={'center'} text={text} />
			</Stack>
			<Stack flexDirection={'row'} flexWrap={'nowrap'} className={styles.cardContainer} >
				<Components.OurServicesCard cards={cards} />
			</Stack>
		</Box>
	)
};
