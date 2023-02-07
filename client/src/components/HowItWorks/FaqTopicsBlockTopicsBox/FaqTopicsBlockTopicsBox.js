import React from 'react';
import { Stack } from '@mui/material';
//===============================================
import * as Components from '../..';

export const FaqTopicsBlockTopicsBox = ({ topicItems, classes }) => {

	const lengthTopicsBlock = topicItems.length;

	return (
		<Stack className={classes.blockRight}
			flex={'0 0 75%'} pr={'0.9375rem'} pl={'0.9375rem'}
		>
			{topicItems.map((topicItem, index) =>
				<React.Fragment key={topicItem.link}>
					<Stack
						padding={(index !== 0 && index !== lengthTopicsBlock - 1)
							? '4rem 0'
							: index === 0 ? '0 0 4rem 0' : '4rem 0 0 0'}
					>
						<Components.TitleBlock
							id={topicItem.link} className={classes.h3} title={topicItem.title}
							component={'h3'} textAlign={'left'} color={'#377dff'}
							fontSize={'1.75rem'} fontWeight={600} marginBottom={'1.5rem'}
						/>
						<Components.FaqTopicsBlockTopicsCard topicItems={topicItem.items} classes={classes} />
					</Stack>
					{lengthTopicsBlock - 1 !== index &&
						<Components.UI.DemarcationLine borderTop={'1px solid #e7eaf3'} />
					}
				</React.Fragment>
			)}
		</Stack >
	)
};
