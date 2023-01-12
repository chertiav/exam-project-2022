import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
//=====================================================
import styles from './RegistrationForm.module.sass';
import Schems from '../../../validators/validationSchems';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';
import { authActions } from '../../../store/actions';

export const RegistrationForm = () => {

	const { auth: { error } } = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authClear = () => dispatch(authActions.authActionClear());

	const clicked = (values) => {
		const { agreeOfTerms, confirmPassword, ...data } = values;
		dispatch(authActions.authRegistrationAction({
			data,
			navigate
		}))
	};

	return (
		<div className={styles.signUpFormContainer}>
			{error && (
				<Components.UI.Error
					data={error.data}
					status={error.status}
					clearError={authClear}
				/>
			)}
			<div className={styles.headerFormContainer}>
				<h2> {CONSTANTS.REGISTRATION_CONSTANTS.TITLE_FORM}</h2>
				<h4>{CONSTANTS.REGISTRATION_CONSTANTS.DESCRIPTION_FORM}</h4>
			</div>
			<Formik
				initialValues={CONSTANTS.REGISTRATION_CONSTANTS.FORM_ININTIAL_VALUES}
				onSubmit={clicked}
				validationSchema={Schems.RegistrationSchem}
			>
				{Components.RenderRegistrationForm}
			</Formik>
		</div>
	)
};
