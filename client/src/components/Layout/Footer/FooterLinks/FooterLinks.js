import React from 'react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
//=============================================
import styles from './FooterLinks.module.sass';
import { FOOTER_CONSTANTS } from '../../../../constants';

export const FooterLinks = () => {

	const { LINKS_GREY_FOOTER: { linksGroup } } = FOOTER_CONSTANTS;

	const renderSubLink = (subMenuItems) => {
		return (
			subMenuItems.map((item) =>
				<Box key={item.title} pl={'1.5rem'}>
					<Link to={item.link} className={styles.subItem}>{item.title}</Link>
				</Box>
			)
		)
	};

	const renderlinks = (links) => {
		return (
			links.map((item, index) =>
				<Stack key={index} justifyContent={
					links.length - 1 !== index ? 'flex-start' : 'space-between'}
					mr={'5rem'}
				>
					{Array.isArray(item)
						? renderlinks(item)
						:
						<>
							<Box component={'h2'}
								pb={'1.25rem'} fontSize={'1.2rem'}
								lineHeight={'2rem'} color={'#333333'}
								margin={'0'} fontWeight={'700'}
							>
								{item.titleGroup}
							</Box>
							{item.itemsGroup.map((itemGroup) =>
								<Stack
									key={itemGroup.title} pb={'0.75rem'} pr={'0.25rem'}
								>
									<Link
										to={itemGroup.link}
										className={styles.item}
									>
										{itemGroup.title}
									</Link>
									{itemGroup.items && renderSubLink(itemGroup.items)}
								</Stack>
							)}
						</>
					}
				</Stack>
			)
		)
	};

	return (
		<Stack
			direction={'row'}
			flexWrap={'wrap'}
			justifyContent={'space-between'}
			padding={'5rem 0 3.75rem 0'}
		>
			{renderlinks(linksGroup)}
		</Stack >
	)
};
