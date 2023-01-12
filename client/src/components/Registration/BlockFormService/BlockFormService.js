import React from 'react';
//==========================================
import styles from './BlockFormService.module.sass';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants'

export const BlockFormService = () => {

	const serviceInputClasses = {
		container: styles.termsOfService,
		warning: styles.fieldWarning,
	};

	return (
		<div className={styles.termsOfService}>
			{CONSTANTS.REGISTRATION_CONSTANTS.FORM_SERVICE_INPUT_DATA.map(itemInput =>
				< Components.AgreeTermOfServiceInput
					key={itemInput.id}
					name={itemInput.name}
					classes={serviceInputClasses}
					id={itemInput.id}
					type={itemInput.type}
					title={itemInput.title}
					linkTo={itemInput.linkTo}
					linkTitle={itemInput.linkTitle}
				/>
			)}
		</div>
	)
}
