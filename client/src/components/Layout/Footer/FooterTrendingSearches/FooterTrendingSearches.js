import React from 'react';
import { Box, Stack } from '@mui/material';
//===================================
import styles from './FooterTrendingSearches.module.sass';
import { FOOTER_CONSTANTS, APP_CONSTANTS } from '../../../../constants';
import * as Components from '../../../';
import { Link } from 'react-router-dom';

export const FooterTrendingSearches = () => {

	const { LINKS_GREY_FOOTER: { searchesBlock } } = FOOTER_CONSTANTS;

	const classesSearchBlock = {
		search: styles.search,
		input: styles.input,
		buttonSearch: styles.buttonSearch,
		searchIcon: styles.searchIcon,
	}

	return (
		<Box
			borderTop={'1px solid #f8f8f8'}
			borderBottom={'1px solid #f8f8f8'}
			padding={'3.75rem 0'}
		>
			<Box component={'h2'} mb={'1.25rem'} fontSize={'1.2rem'} lineHeight={'2rem'}
				color={'#333333'} fontWeight={700} >
				{searchesBlock.title}
			</Box>
			<Stack direction={'row'} flexWrap={'wrap'} boxSizing={'border-box'}>
				<Stack
					boxSizing={'border-box'}
					mr={'2rem'} className={styles.item}>
					<Components.TextBlock
						text={searchesBlock.text}
						fontSize={'0.875rem'} lineHeight={'1.5rem'}
					/>
					<Components.UI.SearchBlock
						classes={classesSearchBlock}
						inputText={'Search over 75,000 Names'}
					/>
				</Stack>
				<Stack
					boxSizing={'border-box'}
					direction={'row'} flexWrap={'wrap'}
					alignContent={'flex-start'}
					className={styles.item}
				>
					{searchesBlock.searchTerms.map((item) =>
						<Stack key={item.title}
							direction={'row'} padding={'0.75rem 1rem'}
							border={'1px solid #ebebeb'} borderRadius={'8px'}
							backgroundColor={'#fbfcfe'} height={'max-content'}
							mr={'1rem'} mb={'1rem'}
						>
							<Link to={item.linkTo} className={styles.link}>
								<Box component={'img'}
									src={APP_CONSTANTS.STATIC_IMAGES_PATH + item.image}
									alt={item.image}
									width={'1rem'}
									height={'1.25rem'} color={'#cccccc'}
								/>
								<Box component={'span'} ml={'0.875rem'} fontWeight={600}>{item.title}</Box>
							</Link>
						</Stack>
					)}
				</Stack>
			</Stack>
		</Box >
	)
};
