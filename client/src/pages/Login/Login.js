import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//================================================
import styles from './Login.module.sass';
import * as CONSTANTS from '../../constants';
import * as Components from '../../components';
import { authActions } from '../../store/actions';

export const Login = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		return () => dispatch(authActions.authClearErrorSignUpAndLogin());
	}, [dispatch])

	return (
		<div className={styles.mainContainer}>
			<div className={styles.loginContainer}>
				<div className={styles.headerSignUpPage}>
					<Components.UI.Logo
						src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}logo.png`}
						alt="logo" />
					<Link to="/registration">
						<div className={styles.linkLoginContainer}>
							<span>Signup</span>
						</div>
					</Link>
				</div>
				<div className={styles.loginFormContainer}>
					<Components.LoginForm />
				</div>
			</div>
		</div>
	)
};
