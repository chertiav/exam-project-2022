import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Cards from 'react-credit-cards-2';
//==========================================
import 'react-credit-cards-2/lib/styles.scss';
import styles from './PayForm.module.sass';
import Schems from '../../../validators/validationSchems';
import { paymentActions } from '../../../store/actions';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const PayForm = ({ isPayForOrder, sendRequest, totalPrice }) => {

	const { payment: { focusOnElement } } = useSelector(state => state);
	const dispatch = useDispatch();
	const formRef = useRef();

	const changeFocusOnCard = (data) =>
		dispatch(paymentActions.changeFocusOnCard(data));

	const handleSubmit = (values) => sendRequest(values);

	const submitForm = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	useEffect(() => {
		dispatch(paymentActions.clearPaymentError())
	}, [dispatch])

	const payInputClasses = {
		container: styles.inputContainer,
		input: styles.input,
		notValid: styles.notValid,
		error: styles.error,
	};

	const initialValues = {
		number: '',
		name: '',
		expiry: '',
		cvc: '',
		focusOnElement: '',
	};

	const validationSchema = isPayForOrder ? Schems.PaymentSchema : Schems.CashoutSchema;

	const renderForm = ({ values }) => {
		const { name, number, expiry, cvc } = values;
		return (
			<>
				<div className={styles.cardContainer}>
					<Cards
						number={number || ''}
						name={name || ''}
						expiry={expiry || ''}
						cvc={cvc || ''}
						focused={focusOnElement}
					/>
				</div>
				<Form id="myForm" className={styles.formContainer}>
					{!isPayForOrder && (
						<div className={styles.bigInput}>
							<span>Sum</span>
							<Components.UI.PayInput
								classes={payInputClasses}
								type="number"
								label="sum"
								name="sum"
							/>
						</div>
					)}
					<Components.SectionPayInput
						className={styles.bigInput}
						payInputs={CONSTANTS.PAYMENT_CONSTANTS.PAY_INPUT_DATA.bigInput}
						classes={payInputClasses}
						changeFocus={changeFocusOnCard}
					/>
					<div className={styles.smallInputContainer}>
						<Components.SectionPayInput
							className={styles.smallInput}
							payInputs={CONSTANTS.PAYMENT_CONSTANTS.PAY_INPUT_DATA.smallInput}
							classes={payInputClasses}
							changeFocus={changeFocusOnCard}
						/>
					</div>
				</Form>
			</>
		);
	};

	return (
		<div className={styles.payFormContainer}>
			<span className={styles.headerInfo}>Payment Information</span>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				innerRef={formRef}
				validationSchema={validationSchema}
			>
				{renderForm}
			</Formik>
			{isPayForOrder &&
				<div className={styles.totalSum}>
					<span>Total: ${totalPrice}</span>
				</div>}
			<div className={styles.buttonsContainer}>
				{isPayForOrder && <Components.UI.BackButton />}
				<Components.UI.NextButton
					classes={styles.payButton}
					title={isPayForOrder ? 'Pay Now' : 'CashOut'}
					onClick={submitForm}
					type="submit"
				/>
			</div>
		</div>
	)
};
