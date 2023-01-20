import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const SceletonAuth = () => {
	return (
		<Stack direction={'row'} spacing={1} alignItems={'center'}>
			<Skeleton variant="circular" width={14} height={14} sx={{ bgcolor: "#cccccc", margin: '1rem 0 1rem 0.5rem' }} />
			<Skeleton variant="rectangular" width={66} height={16} sx={{ bgcolor: "#cccccc" }} />
		</Stack>
	);
};