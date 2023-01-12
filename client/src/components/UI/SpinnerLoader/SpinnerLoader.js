import React from 'react';
import { ClipLoader } from 'react-spinners';
//===========================================
import styles from './SpinnerLoader.module.sass';

export const SpinnerLoader = () => (
	<div className={styles.loaderContainer}>
		<ClipLoader
			sizeunit='px'
			size={50}
			color="#46568a"
			loading
		/>
	</div>
);
