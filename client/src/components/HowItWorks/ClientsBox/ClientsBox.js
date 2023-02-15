import React from 'react';
import { Box, Stack } from '@mui/material';
//====================================
import styles from './ClientsBox.module.sass';
import { HOW_IT_WORKS_CONSTANTS, APP_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const ClientsBox = () => {

	const { CLIENTS_BOX } = HOW_IT_WORKS_CONSTANTS;

	return (
		<Box
			boxSizing={'border-box'} width={'100%'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			lineHeight={1.5} className={styles.container}
		>
			<Stack
				direction={'row'} p={'0 0.9375rem'} flexWrap={'wrap'} mb={'1.5rem'}
			>
				<Stack flex={'1 1 33%'} pt={'2rem'}>
					<Components.TitleBlock
						component={'h3'}
						title={'Featured In'}
						fontSize={'1.75rem'}
						textAlign={'left'}
						fontWeight={400}
						pl={'1.5rem'}
					/>
				</Stack>
				<Stack className={styles.containerItems}
					flex={'1 1 67%'} borderTop={'1px solid #e7eaf3'} pt={'2rem'}
					direction={'row'} flexWrap={'wrap'} >
					{CLIENTS_BOX.map((item) =>
						<Box key={item.alt} p={'0 0.9375rem'}>
							<a href={item.linkTo} target={'blank'}>
								<Box component={'img'} maxWidth={'6rem'} height={'2.5rem'}
									src={`${APP_CONSTANTS.STATIC_IMAGES_PATH + item.image}`}
									alt={item.alt} />
							</a>
						</Box>
					)}
				</Stack>
			</Stack >
		</Box >
	)
};
