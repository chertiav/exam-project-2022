import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'formik';
//=========================================
import styles from './RenderRegistrationForm.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const RenderRegistrationForm = () => {

	const { auth: { isFetching } } = useSelector(state => state);
	const buttonStyle = {
		submitContainer: styles.submitContainer,
		inscription: styles.inscription
	};
	const formInputClasses = {
		container: styles.inputContainer,
		input: styles.input,
		warning: styles.fieldWarning,
		notValid: styles.notValid,
		valid: styles.valid,
	};
	const renderFormInput = () =>
		CONSTANTS.REGISTRATION_CONSTANTS.FORM_INPUT_DATA.map((rowInput, index) =>
			< div className={styles.row} key={index}>
				<Components.UI.BlockInput
					formInputClasses={formInputClasses}
					inputs={rowInput}
				/>
			</ div>
		);
	return (
		<Form>
			{renderFormInput()}
			<Components.BlockFormRole />
			<Components.BlockFormService />
			<Components.UI.AuthButton
				isFetching={isFetching}
				type="submit"
				classes={buttonStyle}
				title='Create Account'
			/>
		</Form>
	)
};
