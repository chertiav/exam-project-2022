import React from 'react';
//===============================
import styles from './UserInputList.module.sass';
import * as utils from '../../../utils'
import * as Components from '../../';

export const UserInputList = ({ initialValues, type }) => {

	const formInputClasses = {
		container: styles.inputContainer,
		input: styles.input,
		warning: styles.error,
		notValid: styles.notValid,
	};

	return (
		utils.function.getInputField(initialValues, type).map(inputData => (
			<div className={styles.container} key={inputData.name}>
				<span className={styles.label}>{inputData.label}</span>
				<Components.UI.FormInput
					name={inputData.name}
					type={inputData.type}
					label={inputData.label}
					classes={formInputClasses}
				/>
			</div>
		))
	)
};
