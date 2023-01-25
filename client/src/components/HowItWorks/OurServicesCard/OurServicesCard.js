import React from 'react'
import { Box, Stack } from '@mui/material'
//==========================================
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const OurServicesCard = ({ cards }) => {
	return (
		cards.map((card) =>
			<Stack key={card.titleBlock}
				m={'0 0.9375rem 1.5rem'} p={'4rem 1rem'} alignItems={'center'} border={'1px solid #e7eaf3'} borderRadius={'0.3125rem'} >
				<Box boxSizing={'border-box'} width={'4.5rem'} mb={'1rem'}>
					<img
						src={CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH + card.image}
						alt={card.alt} />
				</Box>
				<Components.TitleBlock component={'h3'} title={card.titleBlock} />
				<Components.TextBlock textAlign={'center'} text={card.textBlock} />
				<Components.ButtonCard title={card.titleButton} linkTo={card.linkTo} />
			</Stack >
		)
	)
};
