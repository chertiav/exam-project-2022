import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//==================================
import styles from './UserProfile.module.sass';
import * as Components from '../../components';
import * as CONSTANTS from '../../constants';
import { paymentActions } from '../../store/actions';

export const UserProfile = () => {

	const {
		userStore: { data },
		userProfile: { profileModeView },
		payment: { error }
	} = useSelector(state => state);
	const dispatch = useDispatch();

	const cashOut = (data) =>
		dispatch(paymentActions.getCashOutActions(data));

	const clearPaymentStore = () =>
		dispatch(paymentActions.clearPaymentStore());

	const pay = (values) => {
		const { number, expiry, cvc, sum } = values;
		cashOut({ number, expiry, cvc, sum });
	};

	return (
		<div className={styles.mainContainer}>
			< Components.UserOptionsBlock />
			{profileModeView === CONSTANTS.USER_PROFILE.USER_INFO_MODE
				? < Components.UserInfo />
				: (
					<div className={styles.container}>
						{parseInt(data.balance) === 0
							? <span className={styles.notMoney}>There is no money on your balance</span>
							: (<div>
								{error &&
									<Components.UI.Error
										data={error.data}
										status={error.status}
										clearError={clearPaymentStore} />}
								<Components.PayForm sendRequest={pay} />
							</div>)
						}
					</div>
				)
			}
		</div >
	);
};
