import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export const ButtonCard = ({ title, linkTo, classes, ...rest }) => {
	return (
		<Link to={linkTo}>
			<Box color={'#fff'} backgroundColor={'#377dff'} textAlign={'center'}
				fontFamily={'"Poppins",Helvetica,Arial,sans-serif'} minWidth={'9.6875rem'}
				border={'1px solid transparent'} borderRadius={'.3125rem'}
				padding={'0.75rem 1rem'} className={classes.btn} {...rest}
			>
				{title}
			</Box>
		</Link >
	)
};
