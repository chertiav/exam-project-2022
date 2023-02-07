import React from 'react';
import { Box, Stack } from '@mui/material';
//===================================
import styles from './FaqTopicsBlock.module.sass';
import { HOW_IT_WORKS_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const FaqTopicsBlock = () => {

	const { FAQ_TOPICS_BLOCK } = HOW_IT_WORKS_CONSTANTS;

	const stylesBlockNav = {
		blockLeft: styles.blockLeft
	};

	const stylesTopixBox = {
		blockRight: styles.blockRight,
		h3: styles.h3,
		topicItemHeader: styles.topicItemHeader,
		itemsTitle: styles.itemsTitle,
		arrowRight: styles.arrowRight,
		arrowDown: styles.arrowDown,
		downCard: styles.downCard,
		upCard: styles.upCard,
		ul: styles.ul,
		linkWord: styles.linkWord
	};

	return (
		<Box boxSizing={'border-box'} width={'100%'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
			fontWeight={400} lineHeight={1.5} p={'4rem 0.9375rem'} className={styles.container}
		>
			<Stack direction={'row'} className={styles.blockContainer}>
				<Components.FaqTopicsBlockNav navItems={FAQ_TOPICS_BLOCK} classes={stylesBlockNav} />
				<Components.FaqTopicsBlockTopicsBox topicItems={FAQ_TOPICS_BLOCK} classes={stylesTopixBox} />
			</Stack>
		</Box>
	)
};
