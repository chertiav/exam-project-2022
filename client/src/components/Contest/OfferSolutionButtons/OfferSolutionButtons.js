import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
//============================================
import styles from './OfferSolutionButtons.module.sass';
import * as CONSTANTS from '../../../constants';
import './confirmStyle.css';

export const OfferSolutionButtons = ({ setOfferStatus, data, role }) => {

	const dataResolve = role === CONSTANTS.APP_CONSTANTS.MODERATOR
		? 'active' : 'resolve';

	const dataReject = role === CONSTANTS.APP_CONSTANTS.MODERATOR
		? 'delete' : 'reject';

	const solutionForOffer = (solution) => {
		confirmAlert({
			title: 'confirm',
			message: 'Are u sure?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => setOfferStatus({ offerId: data.id, command: solution, userData: data.User })
				},
				{ label: 'No' },
			],
		});
	};

	return (
		<div className={styles.btnsContainer}>
			<div
				onClick={() => solutionForOffer(dataResolve)}
				className={styles.resolveBtn}
			>
				Resolve
			</div>
			<div
				onClick={() => solutionForOffer(dataReject)}
				className={styles.rejectBtn}
			>
				Reject
			</div>
		</div>
	)
};
