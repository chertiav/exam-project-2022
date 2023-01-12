import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
//======================================
import styles from './UserOptionsBlock.module.sass';
import { userActions } from '../../../store/actions';
import * as CONSTANTS from '../../../constants';

export const UserOptionsBlock = () => {

	const {
		userStore: { data },
		userProfile: { profileModeView },
	} = useSelector(state => state);
	const dispatch = useDispatch();

	const renderOptions = (option, title) => {
		return (
			<div
				className={classNames(styles.optionContainer, {
					[styles.currentOption]: profileModeView === option
				})}
				onClick={() => dispatch(userActions.changeProfileModeView(option))}
			>{title}</div>
		)
	};

	return (
		<div className={styles.aside}>
			<span className={styles.headerAside}>Select Option</span>
			<div className={styles.optionsContainer}>
				{renderOptions(CONSTANTS.USER_PROFILE.USER_INFO_MODE, 'UserInfo')}
				{data.role === CONSTANTS.APP_CONSTANTS.CREATOR &&
					renderOptions(CONSTANTS.USER_PROFILE.CASHOUT_MODE, 'Cashout')}
			</div>
		</div >
	)
};
