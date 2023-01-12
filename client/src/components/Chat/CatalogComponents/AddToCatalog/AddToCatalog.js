import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
//=======================================
import styles from './AddToCatalog.module.sass';
import * as Components from '../../../';
import { chatActions } from '../../../../store/actions';

export const AddToCatalog = () => {

	const { addChatId, catalogList } = useSelector(state => state.chatStore);
	const dispatch = useDispatch();

	const getCatalogsNames = () => catalogList.map((catalog) => catalog.catalogName);
	const getValueArray = () => catalogList.map((catalog) => catalog._id);

	const submitHandler = (values) => dispatch(
		chatActions.addChatToCatalogAction({
			chatId: addChatId,
			catalogId: values.catalogId,
		}));

	const selectArray = getCatalogsNames();

	return (
		<>
			{selectArray.length !== 0
				? (
					<Formik onSubmit={submitHandler} initialValues={{ catalogId: '' }}>
						<Form className={styles.form}>
							<Components.UI.SelectInputWrapper
								header="name of catalog"
								name="catalogId"
								classes={{
									inputContainer: styles.selectInputContainer,
									inputHeader: styles.selectHeader,
									selectInput: styles.select,
								}}
								optionsArray={selectArray}
								valueArray={getValueArray()}
							/>
							<button type="submit">Add</button>
						</Form>
					</Formik>
				)
				: <div className={styles.notFound}>
					You have not created any directories.
				</div>}

		</>
	);
};
