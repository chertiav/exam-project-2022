import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const TextListItem = ({ item, classes }) => {
	return (
		<>
			{item.descrioptionTitle}
			< Box component={'ul'} mb={'1rem'} pl={'2.5rem'} className={classes.ul} >
				{
					item.descrioptionItems.map((itemText, index) =>
						<Box component={'li'} key={index}>
							{itemText.itemTextStart}
							<Link to={itemText.linkTo} className={classes.linkWord}>
								{itemText.linkWord}
							</Link>
							{itemText.itemTextEnd}
						</Box>
					)
				}
			</ Box>
		</>
	)
};
