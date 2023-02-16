import React from 'react';
import { Box, Stack } from '@mui/material';
//===================================
import styles from './FooterTrendingSearches.module.sass';
import { FOOTER_CONSTANTS } from '../../../../constants';
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
							<Link to={item.linkTo} className={styles.link} >
								<Box component={'svg'} viewBox={"0 0 16 18"} xmlns={"http://www.w3.org/2000/svg"} fill={"currentColor"} color={'#cccccc'} width={'1rem'}
									height={'1.25rem'}>
									<path d="M0.638561 17.1763C1.01663 17.6366 1.69945 17.6901 2.1596 17.3122L11.343 9.76043L8.09228 8.8894L12.8506 4.67007L14.3768 6.23776L15.5419 0.668153L9.94505 1.71596L11.3407 3.12636L3.6682 9.93647L6.73144 10.7573L0.79109 15.6457C0.330826 16.0236 0.260593 16.7161 0.638561 17.1763Z" fill="currentColor"></path>
								</Box>
								<Box component={'span'} ml={'0.875rem'} fontWeight={600}>{item.title}</Box>
							</Link>
						</Stack>
					)}
				</Stack>
			</Stack>
		</Box >
	)
};
