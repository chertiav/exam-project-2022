import React from 'react';
import { Box, Stack } from '@mui/material';
//=============================================
import styles from './FooterSocial.module.sass';
import { FOOTER_CONSTANTS, APP_CONSTANTS } from '../../../../constants';


export const FooterSocial = () => {

	const { LINKS_GREY_FOOTER: { socialContact } } = FOOTER_CONSTANTS;

	return (
		<Stack sx={{ flexDirection: { xs: "column", md: "row" } }}
			flexWrap={'wrap'} p={'2.5rem'} fontWeight={600}
			alignItems={'center'} justifyContent={'space-between'}
		>
			<Box component={'span'} pb={'1.25rem'}>{socialContact.year}</Box>
			<Box
				component={'a'} href={socialContact.address.linkTo} target={'blank'}
				textAlign={'center'} fontSize={'0.875rem'} className={styles.link}
				pb={'1.25rem'}
			>
				<Box component={'span'}>{socialContact.address.textStart}</Box><br />
				<Box component={'span'}>{socialContact.address.textEnd}</Box>
			</Box>
			<Stack direction={'row'} pb={'1.25rem'}>
				{socialContact.social.map((item) =>
					<Box key={item.icons}
						component={'a'} href={item.linkTo} target={'blank'} mr={'1.5rem'}>
						<Box
							component={'img'}
							src={APP_CONSTANTS.STATIC_IMAGES_PATH + item.icons}
							alt={item.image}
							width={'1.5rem'} height={'1.5rem'}
						/>
					</Box>
				)}
			</Stack>
		</Stack>
	)
};
