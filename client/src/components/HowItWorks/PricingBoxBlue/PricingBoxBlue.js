import React from 'react';
import { Box } from '@mui/material';
//====================================
import styles from './PricingBoxBlue.module.sass';
import { HOW_IT_WORKS_CONSTANTS, APP_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const PricingBoxBlue = () => {

	const { PRICING_BOX: { infoBlueBox } } = HOW_IT_WORKS_CONSTANTS;
	const classesButton = { btn: styles.btn }

	return (
		<Box
			className={styles.blockWithoutShadow}
			boxSizing={'border-box'} bgcolor={'#377dff'}
		>
			<Components.TitleBlock
				title={infoBlueBox.title}
				component={'h4'} boxSizing={'border-box'}
				mb={'0.25rem'} textAlign={'left'}
				fontSize={'2rem'} color={'#fff'}
			/>
			<Components.TextBlock
				text={infoBlueBox.text}
				fontSize={'0.875rem'}
				color={'#fff'}
			/>
			<Components.ButtonCard
				title={infoBlueBox.titleButton}
				linkTo={infoBlueBox.linkTo}
				classes={classesButton}
				borderRadius={'6.1875rem'}
				backgroundColor={'#fff'}
				color={'#377dff'}
				mb={'1rem'}
				width={'max-content'}
			/>
			<Box>
				<Box
					component={'a'}
					href={`tel:${infoBlueBox.phone.title}`}
					color={'#fff'}
					className={styles.phoneBlock}
				>
					<img
						src={APP_CONSTANTS.STATIC_IMAGES_PATH + infoBlueBox.phone.image} alt={infoBlueBox.phone.image} />
					<Box
						component={'span'}
						ml={'0.875rem'}
						fontSize={'0.875rem'}
					>
						{infoBlueBox.phone.title}
					</Box>
				</Box>
			</Box>
			<Components.TextBlock
				text={infoBlueBox.textPhone}
				fontSize={'0.875rem'}
				color={'#fff'}
				mt={'0.5rem'}
			/>
		</Box>
	)
};
