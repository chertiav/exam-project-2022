import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
//========================================
import styles from './ChatInput.module.sass';
import Schems from '../../../../validators/validationSchems';
import { chatActions } from '../../../../store/actions';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';

export const ChatInput = () => {

	const {
		chatStore: { interlocutor },
	} = useSelector(state => state);
	const dispatch = useDispatch();

	const sendMessage = (data) => dispatch(chatActions.sendMessageAction(data));

	const submitHandler = (values, { resetForm }) => {
		sendMessage({
			messageBody: values.message,
			recipient: interlocutor.id,
			interlocutor: interlocutor,//!
		});
		resetForm();
	};

	return (
		<div className={styles.inputContainer}>
			<Formik
				onSubmit={submitHandler}
				initialValues={{ message: '' }}
				validationSchema={Schems.MessageSchema}
			>
				<Form className={styles.form}>
					<Components.UI.FormInput
						name="message"
						type="text"
						label="message"
						classes={{
							container: styles.container,
							input: styles.input,
							notValid: styles.notValid,
							warning: styles.fieldWarning
						}}
					/>
					<button type="submit">
						<img src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}send.png`} alt="send Message" />
					</button>
				</Form>
			</Formik>
		</div>
	)
};
