import { Form } from 'formik';
import { useSelector } from 'react-redux';
//===========================
import styles from './RenderLoginForm.module.sass';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const RenderLoginForm = () => {

	const { auth: { isFetching } } = useSelector(state => state);

	const formInputClasses = {
		container: styles.inputContainer,
		input: styles.input,
		warning: styles.fieldWarning,
		notValid: styles.notValid,
		valid: styles.valid,
	};

	const buttonStyle = {
		submitContainer: styles.submitContainer,
		inscription: styles.inscription
	}

	return (
		<Form>
			<Components.UI.BlockInput
				formInputClasses={formInputClasses}
				inputs={CONSTANTS.LOGIN_CONSTANTS.FORM_INPUT_DATA}
			/>
			<Components.UI.AuthButton
				isFetching={isFetching}
				type="submit"
				classes={buttonStyle}
				title='LOGIN'
			/>
		</Form>
	)
};
