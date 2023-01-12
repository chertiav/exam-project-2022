import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
//============================================
import styles from './OfferSolutionButtons.module.sass';
import './confirmStyle.css';

export const OfferSolutionButtons = ({ setOfferStatus, data }) => {

	const solutionForOffer = (solution) => {
		confirmAlert({
			title: 'confirm',
			message: 'Are u sure?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => setOfferStatus(data.User.id, data.id, solution)
				},
				{ label: 'No' },
			],
		});
	};

	return (
		<div className={styles.btnsContainer}>
			<div
				onClick={() => solutionForOffer('resolve')}
				className={styles.resolveBtn}
			>
				Resolve
			</div>
			<div
				onClick={() => solutionForOffer('reject')}
				className={styles.rejectBtn}
			>
				Reject
			</div>
		</div>
	)
};
