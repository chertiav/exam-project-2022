import React from 'react';
import { Box, Stack } from '@mui/material';
//=======================================
import styles from './HowContestWork.module.sass';
import { HOW_IT_WORKS_CONSTANTS, APP_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const HowContestWork = () => {

	const { title, icon, image, steps } = HOW_IT_WORKS_CONSTANTS.HOW_CONTEST_WORK;
	const { STATIC_IMAGES_PATH } = APP_CONSTANTS;

	const renderSteps = () => {
		return (
			<ul className={styles.stepsContainer}>
				{steps.map((step, index) =>
					<li key={step} className={styles.stepsItem}>
						<Stack
							p={'2rem'} direction={'row'} flexWrap={'nowrap'} border={'1px solid #e7eaf3'} borderRadius={'0.3125rem'} alignItems={'center'}>
							<Box
								component={'span'} fontWeight={500} color={' #377dff'} mr={'1rem'}
								lineHeight={1.2} fontSize={'3.5rem'} minWidth={'3rem'} >
								{index + 1}.
							</Box>
							<Box component={'span'} color={'#77838f'} lineHeight={1.7}>
								{step}
							</Box>
						</Stack>
					</li>
				)
				}
			</ul >
		)
	}

	return (
		<Box
			boxSizing={'border-box'} width={'100%'} p={'8rem 0.9375rem'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			className={styles.container} fontWeight={400} lineHeight={1.5}
		>
			<Stack alignItems={'center'} mb={'4rem'}>
				<Components.IconBox image={icon.title} alt={icon.alt} />
				<Components.TitleBlock component={'h2'} title={title} />
			</Stack>
			<Stack direction={'row-reverse'} mb={'1rem'} className={styles.containerImageText}>
				<Stack m={'0 1rem 1.5rem'} flex={'0 1 50%'} className={styles.item}>
					{renderSteps()}
				</Stack>
				<Stack m={'0 1rem 1.5rem'} pr={'3rem'} flex={'0 1 50%'}
					className={styles.item} justifyContent={'center'}>
					<img src={STATIC_IMAGES_PATH + image.title} alt={image.alt} />
				</Stack>
			</Stack>
		</Box>
	)
};
