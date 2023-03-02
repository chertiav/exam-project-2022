import React from 'react';
import { Box, Stack } from '@mui/material';

export const FaqTopicsBlockNav = ({ navItems, classes }) => {
	return (
		<Stack flex={'0 0 25%'} pr={'0.9375rem'} className={classes.blockLeft}>
			<Stack borderRadius={'0.3125rem'} backgroundColor={'#377dff'}>
				<Box component={'ul'} maxHeight={'720px'} padding={'1rem 2rem'}>
					{navItems.map((topicItem) =>
						<Box key={topicItem.link} component={'li'} padding={'1rem 0'}
							fontSize={'.875rem'} width={'100%'}>
							<Box component={'a'} display={'block'} href={`#${topicItem.link}`}>
								{topicItem.title}
							</Box>
						</Box>
					)}
				</Box>
			</Stack>
		</Stack >
	)
};
