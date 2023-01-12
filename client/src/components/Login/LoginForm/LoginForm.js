import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//=============================================
import styles from './LoginForm.module.sass';
import Schems from '../../../validators/validationSchems';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';
import { authActions } from '../../../store/actions';

export const LoginForm = () => {

	const { auth: { error } } = useSelector(state => state);

	const dispatch = useDispatch();
	const navigate = useNavigate()

	const authClear = () => dispatch(authActions.authActionClear());

	const clicked = (values) =>
		dispatch(authActions.authLoginAction({
			data: values,
			navigate
		}));

	return (
		<div className={styles.loginForm}>
			{error && (
				<Components.UI.Error
					data={error.data}
					status={error.status}
					clearError={authClear}
				/>
			)}
			<h2>LOGIN TO YOUR ACCOUNT</h2>
			<Formik
				initialValues={CONSTANTS.LOGIN_CONSTANTS.FORM_ININTIAL_VALUES}
				onSubmit={clicked}
				validationSchema={Schems.LoginSchem}
			>
				{Components.RenderLoginForm}
			</Formik>
		</div >
	)
}
