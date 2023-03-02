import React from 'react';
import { Box, Stack } from '@mui/material';
//==================================================
import styles from './StatisticBlock.module.sass';
import { HOW_IT_WORKS_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const StatisticBlock = () => {

	const { STATISTIC_BLOCK } = HOW_IT_WORKS_CONSTANTS;

	const renderStatisticText = (statisticText) => {
		return (
			statisticText.map((item, index) =>
				<Box
					key={index} component={'span'}
					fontWeight={item.type === 'bold' && 600}
					color={item.type === 'bold' && '#1e2022'}
				>
					{item.text + ' '}
					{item.br && <br />}
				</Box>
			)
		)
	};

	return (
		<Stack className={styles.container} width={'100%'} fontWeight={400}
			boxSizing={'border-box'} lineHeight={1.7}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			direction={'row'} flexWrap={'wrap'}
			justifyContent={'space-between'}
		>
			{STATISTIC_BLOCK.map((statisticData, index) =>
				<Stack key={index} className={styles.card}
					flex={'0 0 33.33333%'} boxSizing={'border-box'} alignItems={'center'} position={'relative'}
				>
					<Components.UI.RenderImage
						className={styles.image}
						image={statisticData.icon} />
					<Box component={'p'} textAlign={'center'} color={'#77838f'}
						className={STATISTIC_BLOCK.length - 1 !== index && styles.p}>
						{renderStatisticText(statisticData.statisticText)}
					</Box>
				</Stack>
			)}
		</Stack >
	)
};
