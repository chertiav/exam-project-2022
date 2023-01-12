import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
//===========================================
import styles from './NotFoundBlock.module.sass';

export const NotFoundBlock = () => {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<div className={styles.container}>
			<span>&#x1F615;</span>
			<span>Nothing found</span>
			<span>Sorry, this page is not available</span>
			<Button
				type="button"
				variant="contained"
				color="inherit"
				size="large"
				startIcon={<KeyboardReturnIcon />}
				onClick={goBack}
			> Return
			</Button>
		</div>
	)
};
