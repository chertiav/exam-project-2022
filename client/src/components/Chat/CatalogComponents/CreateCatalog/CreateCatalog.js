import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
//================================================
import styles from './CreateCatalog.module.sass';
import Schems from '../../../../validators/validationSchems';
import * as Components from '../../../';
import { chatActions } from '../../../../store/actions';

export const CreateCatalog = () => {

	const { addChatId } = useSelector(state => state.chatStore);
	const dispatch = useDispatch();

	const submitHandler = (values) => dispatch(chatActions.createCatalogAction({
		catalogName: values.catalogName,
		chatId: addChatId
	}));

	return (
		<Formik
			onSubmit={submitHandler}
			initialValues={{ catalogName: '' }}
			validationSchema={Schems.CatalogSchema}
		>
			<Form className={styles.form}>
				<Components.UI.FormInput
					name="catalogName"
					type="text"
					label="name of catalog"
					classes={{
						container: styles.inputContainer,
						input: styles.input,
						warning: styles.fieldWarning,
						notValid: styles.notValid,
					}}
				/>
				<button type="submit">Create Catalog</button>
			</Form>
		</Formik>
	);
};