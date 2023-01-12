import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//===============================================
import styles from './Payment.module.sass';
import { paymentActions } from '../../store/actions';
import * as CONSTANTS from '../../constants';
import * as Components from '../../components'

export const Payment = () => {

	const {
		payment: { error },
		contestStore: { contests }
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const payment = (data) =>
		dispatch(paymentActions.getPaymentActions({ data, navigate }));

	const clearPaymentStore = () =>
		dispatch(paymentActions.clearPaymentStore());

	const totalPrice = contests
		? CONSTANTS.PAYMENT_CONSTANTS.PRICE * Object.keys(contests).length
		: CONSTANTS.PAYMENT_CONSTANTS.PRICE

	const pay = (values) => {
		const { number, expiry, cvc } = values;
		const data = new FormData();
		const contestArray = Object.keys(contests)
			.map((key) => contests[key]);
		contestArray.forEach(contest => {
			data.append('files', contest.file);
			contest.haveFile = !!contest.file;
		});
		data.append('number', number);
		data.append('expiry', expiry);
		data.append('cvc', cvc);
		data.append('contests', JSON.stringify(contestArray));
		data.append('price', totalPrice);
		payment(data);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.paymentContainer}>
				<span className={styles.headerLabel}>Checkout</span>
				{error &&
					<Components.UI.Error
						data={error.data}
						status={error.status}
						clearError={clearPaymentStore}
					/>}
				<Components.PayForm
					sendRequest={pay}
					isPayForOrder
					totalPrice={totalPrice}
				/>
			</div>
			<Components.PaymentOrderInfo
				totalPrice={totalPrice}
				contests={contests}
			/>
		</div>
	)
};

