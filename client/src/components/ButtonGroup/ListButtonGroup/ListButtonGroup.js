import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
//===========================================
import styles from './ListButtonGroup.module.sass';
import { BUTTON_GROUP_CONSTANTS } from '../../../constants';

export const ListButtonGroup = () => {

	const [dataChoose, setDataChoose] = useState(BUTTON_GROUP_CONSTANTS[1].dataChoose);
	const [active, getActive] = useState(1);

	const handleClick = (index, data) => {
		setDataChoose(data);
		getActive(index);
	};

	return (
		<Stack
			direction={{ xs: 'column', md: 'row' }}
			m={'1.5rem 0'} justifyContent={'center'} boxSizing={'border-box'}
			fontFamily={'"Poppins",Helvetica,Arial,sans-serif'}

		>
			{BUTTON_GROUP_CONSTANTS.map((item, index) =>
				<Stack key={item.dataChoose}
					boxSizing={'border-box'} className={styles.item}
					m={'0 0.9375rem 2rem 0.9375rem'} p={'1rem'} borderRadius={'0.3125rem'}
					border={index !== active ? '1px solid #e7eaf3' : '3px solid rgba(44,185,183,.5)'}
					boxShadow={index === active && '0 0 5px rgba(44,185,183,.125)'}
					textAlign={{ xs: 'left', sm: 'center' }} width={'100%'}
					direction={{ xs: 'row', sm: 'column' }} alignItems={'center'}
					onClick={() => handleClick(index, item.dataChoose)}
				>
					<Box p={'0.4375rem 0.9375rem'}
						m={{ xs: '0 20px 0 0', sm: '0 auto 1rem' }}
						color={'#fff'} fontWeight={500}
						width={'max-content'} borderRadius={'10rem'} fontSize={'75%'}
						bgcolor={index !== active ? '#77838f' : '#2cb9b7'}
					>
						{item.title}
					</Box>
					<Box component={'h5'} color={'#555C6B'} fontSize={'75%'}
						mb={'0.25rem'} fontWeight={400}
					>
						{item.text}
					</Box>
				</Stack>
			)
			}
		</Stack >
	)
};
