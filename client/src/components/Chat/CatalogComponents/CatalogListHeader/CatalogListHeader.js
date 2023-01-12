import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
//====================================================
import styles from './CatalogListHeader.module.sass';
import Schems from '../../../../validators/validationSchems';
import { chatActions } from '../../../../store/actions';
import * as Components from '../../../../components';

export const CatalogListHeader = () => {

	const {
		isRenameCatalog,
		currentCatalog: { catalogName, _id }
	} = useSelector(state => state.chatStore)
	const dispatch = useDispatch();
	const initialValues = { catalogName };

	const changeShowModeCatalog = () =>
		dispatch(chatActions.changeShowModeCatalog());

	const changeRenameCatalogMode = () =>
		dispatch(chatActions.changeRenameCatalogMode());

	const changeCatalogName = (data) =>
		dispatch(chatActions.changeCatalogNameAction({
			catalogName: data.catalogName,
			catalogId: _id
		}));


	return (
		<div className={styles.headerContainer}>
			<i className="fas fa-long-arrow-alt-left" onClick={changeShowModeCatalog} />
			{!isRenameCatalog && (
				<div className={styles.infoContainer}>
					<span>{catalogName}</span>
					<i className="fas fa-edit" onClick={changeRenameCatalogMode} />
				</div>
			)}
			{isRenameCatalog && (
				<div className={styles.changeContainer}>
					<Formik
						onSubmit={changeCatalogName}
						initialValues={initialValues}
						validationSchema={Schems.CatalogSchema}
					>
						<Form>
							<Components.UI.FormInput
								name="catalogName"
								classes={{
									container: styles.inputContainer,
									input: styles.input,
									warning: styles.fieldWarning,
									notValid: styles.notValid,
								}}
								type="text"
								label="Catalog Name"
							/>
							<button type="submit">Change</button>
						</Form>
					</Formik>
				</div>
			)}
		</div>
	)
};
