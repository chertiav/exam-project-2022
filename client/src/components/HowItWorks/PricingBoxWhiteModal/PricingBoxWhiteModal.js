import React from 'react';
import { Box, Dialog, DialogActions, Stack } from '@mui/material';
import {
	FaHeart, FaSmile, FaStudiovinari,
	FaSteamSymbol, FaTableTennis
} from 'react-icons/fa';
//======================================
import styles from './PricingBoxWhiteModal.module.sass';
import { HOW_IT_WORKS_CONSTANTS } from '../../../constants';
import * as Components from '../../';

export const PricingBoxWhiteModal = ({ open, handleClose }) => {

	const { PRICING_BOX: { infoWhiteBoxModal } } = HOW_IT_WORKS_CONSTANTS;

	const getIconcs = (iconsTitle) => {
		switch (iconsTitle) {
			case 'FaHeart':
				return <FaHeart />;
			case 'FaSmile':
				return <FaSmile />;
			case 'FaStudiovinari':
				return <FaStudiovinari />;
			case 'FaSteamSymbol':
				return <FaSteamSymbol />;
			case 'FaTableTennis':
				return <FaTableTennis />;
			default:
				break;
		}
	};

	const getStyle = (type) => {
		switch (type) {
			case 0:
				return { bgcolor: 'rgba(222,68,55,.1)', color: 'rgba(222,68,55)' };
			case 1:
				return { bgcolor: 'rgba(55,125,255,.1)', color: 'rgba(55,125,255)' };
			case 2:
				return { bgcolor: 'rgba(0,201,167,.1);', color: 'rgba(0,201,167);' };
			default:
				break;
		}
	};

	const classesTextWidthLink = {
		linkWord: styles.linkWord
	};

	const renderModalList = () => {
		return (
			infoWhiteBoxModal.modaItems.map((item, index) => {
				return (
					<Box component={'li'} key={item.itemTextStart} p={'0.5rem 0'}>
						<Stack direction={'row'} >
							<Components.PricingBoxIcon
								bgcolor={getStyle(index % infoWhiteBoxModal.step).bgcolor}
								color={getStyle(index % infoWhiteBoxModal.step).color}
							>
								{getIconcs(item.icon)}
							</Components.PricingBoxIcon>
							<Box component={'span'} lineHeight={'1.5rem'}>
								<Components.TextWidthLink
									item={item}
									classes={classesTextWidthLink}
								/>
							</Box>
						</Stack>
					</Box>
				)
			})
		)
	};

	return (
		<Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<Box padding={'2rem'} fontFamily={'"Poppins",Helvetica,Arial,sans-serif'} maxWidth={'27rem'}>
					<Components.TitleBlock
						component={'h3'}
						color={'#377dff'}
						title={infoWhiteBoxModal.title}
						fontWeight={400} mb={'0.5rem'}
						textAlign={'left'} lineHeight={'1.5rem'}
					/>
					<Components.TextBlock
						textAlign={'left'}
						text={infoWhiteBoxModal.text}
					/>
					<Box component={'ul'}>
						{renderModalList()}
					</Box>
				</Box>
				< Components.UI.DemarcationLine borderTop={'1px solid #e7eaf3'} />
				<DialogActions>
					<Box
						color={'#77838f'} padding={'0.625rem 1.125rem'}
						fontSize={'.875rem'} borderRadius={'0.25rem'}
						bgcolor={'rgba(119,131,143,.1)'}
						fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}
						lineHeight={1.5} m={'1rem'}
						onClick={handleClose}
						className={styles.buttonModal}
					>
						Close
					</Box>
				</DialogActions>
			</Dialog>
		</Box>
	)
};
