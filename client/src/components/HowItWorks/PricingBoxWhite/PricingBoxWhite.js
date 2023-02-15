import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
//=================================
import styles from './PricingBoxWhite.module.sass';
import { HOW_IT_WORKS_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const PricingBoxWhite = () => {

	const [open, setOpen] = useState(false);
	const { PRICING_BOX: { infoWhiteBox } } = HOW_IT_WORKS_CONSTANTS;

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classesTextWidthLink = {
		linkWord: styles.linkWord
	}

	return (
		<Box
			boxSizing={'border-box'} borderRadius={'0.3125rem'}
			boxShadow={'0 10px 40px 10px rgba(140,152,164,.175)'}
			className={styles.blockWidthShadow}
		>
			{infoWhiteBox.map((itemInfoData, index) =>
				<Stack key={index} pb={infoWhiteBox.length - 1 !== index && '1rem'}>
					{(infoWhiteBox.length - 1 === index || index !== 0) &&
						< Components.UI.DemarcationLine borderTop={'1px solid #e7eaf3'} p={'1rem 0'} />
					}
					<Stack direction={'row'}>
						<Components.PricingBoxIcon
							bgcolor={'rgba(55,125,255,.1)'} color={'#377dff'}>
							<FaAngleRight />
						</Components.PricingBoxIcon>
						<Stack>
							<Components.TitleBlock component={'h5'} boxSizing={'border-box'}
								title={itemInfoData.itemsTitle} textAlign={'left'} mb={'0.25rem'}
								fontSize={infoWhiteBox.length - 1 === index ? '1.5rem' : '1.25rem'}
								color={'#1e2022'}
							/>
							<Box component={'p'} color={'#77838f'} lineHeight={'1.7'}
								fontSize={'0.875rem'} mb={'1rem'}>
								<Components.TextWidthLink
									item={itemInfoData}
									classes={classesTextWidthLink}
									onClick={handleClickOpen} />
							</Box>
						</Stack>
					</Stack>
				</Stack>
			)}
			<Components.PricingBoxWhiteModal
				open={open}
				handleClose={handleClose}
			/>
		</Box>
	)
};
