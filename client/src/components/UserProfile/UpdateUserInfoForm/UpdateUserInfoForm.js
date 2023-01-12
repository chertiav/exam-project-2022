import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button, Stack } from '@mui/material';
//===============================================
import styles from './UpdateUserInfoForm.module.sass';
import Schems from '../../../validators/validationSchems';
import { userActions } from '../../../store/actions';
import * as Components from '../../';

export const UpdateUserInfoForm = ({ onSubmit, setFile, setFlagDeleteAvatar }) => {

	const { userStore: { data, error } } = useSelector(state => state);
	const dispatch = useDispatch();

	const initialValues = {
		firstName: data.firstName,
		lastName: data.lastName,
		displayName: data.displayName,
	};

	const clearUserError = () => dispatch(
		userActions.clearUserError());

	const renderForm = (props) => {
		return (
			<Form className={styles.updateContainer}>
				{error && (
					<Components.UI.Error
						data={error.data}
						status={error.status}
						clearError={clearUserError}
					/>
				)}
				<Components.UI.ImageUpload
					name="file"
					setFile={setFile}
					setFlagDeleteAvatar={setFlagDeleteAvatar}
				/>
				<Components.UserInputList
					initialValues={initialValues}
					type='text'
				/>
				<Stack direction="row" spacing={2}>
					<Button type="submit" disabled={!props.isValid}>Submit</Button>
					<Button type="reset">Cancel</Button>
				</Stack>

			</Form >
		)
	};

	return (
		<Formik
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={Schems.UpdateUserSchema}
		>
			{renderForm}
		</Formik>
	)
};
