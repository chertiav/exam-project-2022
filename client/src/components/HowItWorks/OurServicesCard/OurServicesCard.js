import React from 'react'
import { Stack } from '@mui/material'
//==========================================
import styles from './OurServicesCard.module.sass';
import * as Components from '../../';

export const OurServicesCard = ({ cards }) => {

	const classesButton = { btn: styles.btn }

	return (
		cards.map((card) =>
			<Stack key={card.titleBlock}
				m={'0 0.9375rem 1.5rem'} p={'4rem 1rem'} alignItems={'center'} border={'1px solid #e7eaf3'} borderRadius={'0.3125rem'} flex={'1 1 100%'}
			>
				<Components.IconBox image={card.image} alt={card.alt} />
				<Components.TitleBlock component={'h3'} title={card.titleBlock} />
				<Components.TextBlock textAlign={'center'} text={card.textBlock} />
				<Components.ButtonCard title={card.titleButton} linkTo={card.linkTo} classes={classesButton} />
			</Stack >
		)
	)
};
