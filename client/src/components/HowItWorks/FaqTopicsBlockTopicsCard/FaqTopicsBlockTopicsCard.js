import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { FaArrowRight } from "react-icons/fa";
//===============================================
import * as Components from '../..';

export const FaqTopicsBlockTopicsCard = ({ topicItems, classes }) => {

	const [indexShowDescription, setIndexShowDescription] = useState(0);
	const [showDescription, setShowDescription] = useState(true);

	const handleShowDescription = (index) => {
		setIndexShowDescription(index);
		indexShowDescription === index
			? setShowDescription(!showDescription)
			: setShowDescription(true);
	};

	const classesTextListItem = {
		ul: classes.ul,
		linkWord: classes.linkWord
	}
	const classesTextWidthLink = {
		linkWord: classes.linkWord
	}

	const renderItemsDescrioption = (item) => {
		switch (item.typeDescrioption) {
			case 1: {
				return <Box p={'1rem'}>{item.descrioption}</Box>;
			}
			case 2: {
				return (
					<Box p={'1rem'}>
						<Components.TextListItem item={item} classes={classesTextListItem} />
					</Box>
				);
			}
			case 3: {
				return (
					<Box p={'1rem'}>
						<Components.TextWidthLink item={item} classes={classesTextWidthLink} />
					</Box>
				);
			}
			case 4: {
				return (
					<Box p={'1rem'} >
						<Components.TextWidthLinkBreak item={item} classes={classesTextWidthLink} />
					</Box >
				);
			}
			default: break;
		}
	};

	return (
		topicItems.map((item, index) =>
			<Stack mb={'1rem'} key={item.itemsTitle} border={'1px solid #e7eaf3'} borderRadius={'0.3125rem'}
			>
				<Stack
					className={classes.topicItemHeader} p={'1rem'}
					borderBottom={'1px solid #e7eaf3'}
					flexDirection={'row'} justifyContent={'space-between'}
					onClick={() => handleShowDescription(index)}
				>
					<Components.TitleBlock component={'h5'}
						title={item.itemsTitle} textAlign={'left'} mb={'0rem'}
						className={classes.itemsTitle}
					/>
					<FaArrowRight
						className={(indexShowDescription === index && showDescription)
							? classes.arrowDown
							: classes.arrowRight}
						color={'#377dff'}
					/>
				</Stack>
				<Stack
					className={(indexShowDescription === index && showDescription)
						? classes.downCard
						: classes.upCard}
				>
					{renderItemsDescrioption(item)}
				</Stack>
			</Stack >
		)
	)
}
