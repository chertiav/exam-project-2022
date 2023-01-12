import React from 'react';
//========================================
import styles from './Error.module.sass';

export const Error = (props) => {

	const { clearError } = props;

	const getMessage = () => {
		const { status, data } = props;
		return data?.message
			? `${status}: ${data.message}`
			: '500: Server Error'
	};

	return (
		<div className={styles.errorContainer}>
			<span>{getMessage()}</span>
			<i className="far fa-times-circle" onClick={() => clearError()} />
		</div>
	);
};
