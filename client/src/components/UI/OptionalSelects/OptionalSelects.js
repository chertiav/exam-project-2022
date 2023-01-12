import React from 'react';
//===========================================
import styles from './OptionalSelects.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const OptionalSelects = (props) => {

	if (props.isFetching) {
		return <Components.UI.SpinnerLoader />;
	}
	switch (props.contestType) {
		case CONSTANTS.APP_CONSTANTS.NAME_CONTEST: {
			return (
				<>
					<Components.UI.SelectInputWrapper
						name="typeOfName"
						header="type of company"
						classes={props.selectInputClasses}
						optionsArray={props.data.typeOfName}
					/>
					<Components.UI.SelectInputWrapper
						name="styleName"
						header="Style name"
						classes={props.selectInputClasses}
						optionsArray={props.data.nameStyle}
					/>
				</>
			);
		}
		case CONSTANTS.APP_CONSTANTS.LOGO_CONTEST: {
			return (
				<>
					<div className={styles.inputContainer}>
						<span className={styles.inputHeader}>
							What name of your venture?
						</span>
						<Components.UI.FormInput
							name="nameVenture"
							type="text"
							label="name of venture"
							classes={props.formInputClasses}
						/>
					</div>
					<Components.UI.SelectInputWrapper
						name="brandStyle"
						header="Brand Style"
						classes={props.selectInputClasses}
						optionsArray={props.data.brandStyle}
					/>
				</>
			);
		}
		case CONSTANTS.APP_CONSTANTS.TAGLINE_CONTEST: {
			return (
				<>
					<div className={styles.inputContainer}>
						<span className={styles.inputHeader}>
							What name of your venture?
						</span>
						<Components.UI.FormInput
							name="nameVenture"
							type="text"
							label="name of venture"
							classes={props.formInputClasses}
						/>
					</div>
					<Components.UI.SelectInputWrapper
						name="typeOfTagline"
						header="Type tagline"
						classes={props.selectInputClasses}
						optionsArray={props.data.typeOfTagline}
					/>
				</>
			);
		}
		default: break;
	}
};
