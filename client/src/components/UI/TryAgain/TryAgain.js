import React from 'react';
//=========================================
import styles from './TryAgain.module.sass';

export const TryAgain = ({ getData, message }) => {
	return (
		<div className={styles.container}>
			<span onClick={() => getData()}>
				{message === 'TryAgain'
					? 'Nothing not found. Try again'
					: 'Server Error. Try again'
				}
			</span>
			<i className="fas fa-redo" onClick={() => getData()} />
		</div>
	);
};

