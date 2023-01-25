import React from 'react';
import { Box, Stack } from '@mui/material';
import { FaPlay } from 'react-icons/fa';
//==========================
import styles from './HowDoesWork.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const HowDoesWork = () => {

	const { title, text, buttonData } = CONSTANTS.HOW_IT_WORKS_CONSTANTS.HOW_DOES_WORK_BLOCK;

	return (
		<div className={styles.container}>
			<Stack
				direction={'row'} flexWrap={'wrap'} mr={-1.875} ml={-1.875}
				alignItems={'center'} justifyContent={'space-between'}>
				<Stack
					direction={'column'} flex={'1 0 58.33333%'}
					position={'relative'} width={'100%'} mb={0}
					boxSizing={'border-box'} pr={1.875} pl={1.875}
					className={styles.sectionContainer}
				>
					<Components.ButtonDecorate title={`World's #1 Naming Platform`} />
					<Box boxSizing={'border-box'} mb={'1.5rem'}
						fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
						fontWeight={400} lineHeight={1.5} textAlign={'left'}
					>
						<Components.TitleBlock component={'h1'} title={title} />
						<Components.TextBlock text={text} />
					</Box>
					<Box boxSizing={'border-box'} width={'max-content'}
						backgroundColor={'#377dff'} display={'flex'}
						fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
						fontWeight={400} lineHeight={1.5} textAlign={'left'}
						border={'1px solid transparent'} borderRadius={'6.1875rem'}
						className={styles.buttonBlock}
					>
						<a data-fancybox href={buttonData.link}>
							<Stack direction={'row'} alignItems={'center'}
								padding={'0.75rem 1rem'} color={'#fff'}
								m={'0 0.5rem'}
							>
								<FaPlay color={'#fff'} fontSize={'14px'} />
								<Box component={'span'} ml={'0.7rem'}>{buttonData.title}</Box>
							</Stack>
						</a>
					</Box>
				</Stack>
				<Stack
					position={'relative'} width={'100%'} mb={'1.5rem'}
					boxSizing={'border-box'} pr={1.875} pl={1.875}
					flex={'0 0 41.66667%'} className={styles.hiden}
				>
					<img
						src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}app-user.svg`}
						alt="app-user"
					/>
				</Stack>

			</Stack>
		</div >
	)
};
