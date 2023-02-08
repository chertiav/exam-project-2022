import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
//==================================
import styles from './ReadyToGetStarted.module.sass';
import * as Components from '../../';
import { HOW_IT_WORKS_CONSTANTS } from '../../../constants';


export const ReadyToGetStarted = () => {

	const { READY_TO_GET_STARTED } = HOW_IT_WORKS_CONSTANTS;
	const navigate = useNavigate();
	const navigateTo = () => navigate('/startContest');

	return (
		<Box className={styles.mainContainmer}>
			<Components.ReadyToGetStartedImage
				className={styles.imageLeft}
				image={READY_TO_GET_STARTED.imageLeft} />
			<Box boxSizing={'border-box'} width={'100%'} m={'0 auto'}
				fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
				fontWeight={400} lineHeight={1.5} p={'2rem 0.9375rem'}
				textAlign={'center'} className={styles.container}
			>
				<Components.TitleBlock
					title={READY_TO_GET_STARTED.title} component={'h2'} color={'#00dffc'}
					fontSize={'2rem'} fontWeight={600} marginBottom={'0.5rem'}
					className={styles.h2} />
				<Components.TextBlock
					text={READY_TO_GET_STARTED.text} color={'#fff'} mb={'1rem'}
					fontWeight={300} fontSize={'1.25rem'}
				/>
				<Components.UI.StartButton
					classes={styles.startButton}
					title={'Start Contest'}
					navigateTo={navigateTo}
				/>
			</Box>
			<Components.ReadyToGetStartedImage
				className={styles.imageRight}
				image={READY_TO_GET_STARTED.imageRight} />
		</Box>
	)
};
