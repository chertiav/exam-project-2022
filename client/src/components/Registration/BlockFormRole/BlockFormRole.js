import React from 'react';
import { Field } from 'formik';
//===============================================
import styles from './BlockFormRole.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const BlockFormRole = () => {
	return (
		CONSTANTS.REGISTRATION_CONSTANTS.FORM_ROLE_DATA.map(itemRole =>
			<div className={styles.choseRoleContainer} key={itemRole.id}>
				<Field
					name={itemRole.name}
					type={itemRole.type}
					value={itemRole.value}
					strRole={itemRole.strRole}
					infoRole={itemRole.infoRole}
					component={Components.RoleInput}
					id={itemRole.id}
				/>
			</div>
		)
	)
}
