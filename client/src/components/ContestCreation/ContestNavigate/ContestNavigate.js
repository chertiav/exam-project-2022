import React from 'react';
//==========================================
import styles from './ContestNavigate.module.sass';
import * as Components from '../../';

export const ContestNavigate = ({ submitForm }) => {
	return (
		<div className={styles.footerButtonsContainer} >
			<div className={styles.lastContainer}>
				<div className={styles.buttonsContainer}>
					<Components.UI.BackButton />
					<Components.UI.NextButton onClick={submitForm} title={'Next'} />
				</div>
			</div>
		</div >
	)
};
