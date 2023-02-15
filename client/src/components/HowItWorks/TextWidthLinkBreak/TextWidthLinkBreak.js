import { Box } from '@mui/material';
import React from 'react';
//===========================================
import * as Components from '../..';

export const TextWidthLinkBreak = ({ item, classes }) => {
	return (
		<>
			{item.itemsText.map((itemText, index) =>
				item.itemsText.length - 1 !== index
					?
					<Box component={'p'} key={index}>
						{itemText.itemTextStart}
					</Box>
					:
					<Box component={'p'} key={index}>
						<Components.TextWidthLink
							item={itemText} classes={classes} />
					</Box>
			)}
		</>
	)
};
