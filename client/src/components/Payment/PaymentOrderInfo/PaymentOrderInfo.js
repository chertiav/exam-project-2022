import React from 'react';
import { Link } from 'react-router-dom';
//=======================================
import styles from './PaymentOrderInfo.module.sass';
import * as CONSTANTS from '../../../constants';
import * as utils from '../../../utils';

export const PaymentOrderInfo = ({ totalPrice, contests }) => {

	const renderPackage = () => {
		return (
			Object.keys(contests).map((contestName) =>
				<div key={contestName} className={styles.packageInfoContainer}>
					<span className={styles.packageName}>
						Package {utils.function.ucFirstLetter(contestName)}: Standard
					</span>
					<span className={styles.packagePrice}>
						${CONSTANTS.PAYMENT_CONSTANTS.PRICE} USD
					</span>
				</div>
			)
		)
	}

	return (
		<div className={styles.orderInfoContainer}>
			<span className={styles.orderHeader}>Order Summary</span>
			{renderPackage()}
			<div className={styles.resultPriceContainer}>
				<span>Total:</span>
				<span>${totalPrice} USD</span>
			</div>
			<Link to={CONSTANTS.APP_CONSTANTS.PATH_NOTN_FOUND}>
				{CONSTANTS.PAYMENT_CONSTANTS.TEXT_LINK_PROMO_CODE}
			</Link>
		</div>
	)
};
