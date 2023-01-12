import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//=======================================
import styles from './Registration.module.sass';
import * as Components from '../../components/';
import * as CONSTANTS from '../../constants';
import { authActions } from '../../store/actions';

export const Registration = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		return () => dispatch(authActions.authClearErrorSignUpAndLogin());
	}, [dispatch]);

	return (
		<div className={styles.signUpPage}>
			<div className={styles.signUpContainer}>
				<div className={styles.headerSignUpPage}>
					<Components.UI.Logo
						src={`${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}logo.png`}
						alt="logo" />
					<Link to="/login">
						<div className={styles.linkLoginContainer}>
							<span>Login</span>
						</div>
					</Link>
				</div>
				<Components.RegistrationForm />
			</div>
		</div>
	)
};
