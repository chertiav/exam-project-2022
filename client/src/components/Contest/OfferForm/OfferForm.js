import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
//==================================
import styles from './OfferForm.module.sass';
import Schems from '../../../validators/validationSchems';
import { offerActions } from '../../../store/actions'
import * as Components from '../../'
import * as CONTANTS from '../../../constants';

export const OfferForm = ({ contestType, contestId, customerId }) => {

	const { errorOffersStore, isFetching } = useSelector(state => state.offerStore);
	const dispatch = useDispatch();
	const [file, setFile] = useState();
	const [isSubmit, setIsSubmit] = useState(true);
	const { id } = useParams();

	const initialValues = { offerData: '' };
	const validationSchema = contestType === CONTANTS.APP_CONSTANTS.LOGO_CONTEST
		? null
		: Schems.TextOfferSchema;

	const setNewOffer = (data) => {
		dispatch(offerActions.addNewOfferActions({ data, id }));
	}

	const clearOfferError = useCallback(() => {
		dispatch(offerActions.offerStoreCleareError())
	}, [dispatch]);

	useEffect(() => {
		return clearOfferError()
	}, [clearOfferError])

	const renderOfferInput = () => {
		if (contestType === CONTANTS.APP_CONSTANTS.LOGO_CONTEST) {
			return (
				<Components.UI.ImageUpload
					name="offerData"
					setFile={setFile}
					setIsSubmit={setIsSubmit}
					fileCheck={file}
					classes={{
						uploadContainer: styles.imageUploadContainer,
						inputContainer: styles.uploadInputContainer,
						imgStyle: styles.imgStyle,
					}}
				/>
			);
		};
		return (
			<Components.UI.FormInput
				name="offerData"
				classes={{
					container: styles.inputContainer,
					input: styles.input,
					warning: styles.fieldWarning,
					notValid: styles.notValid,
				}}
				type="text"
				label="your suggestion"
			/>
		);
	};

	const setOffer = (values, { resetForm }) => {
		clearOfferError();
		const data = new FormData();
		data.append('contestId', contestId);
		data.append('contestType', contestType);
		data.append('offerData', values.offerData);
		data.append('customerId', customerId);
		data.append('file', file);
		setNewOffer(data);
		resetForm();
		setFile('reset');
	};

	return (
		<div className={styles.offerContainer}>
			{errorOffersStore
				&& <Components.UI.Error
					data={errorOffersStore.data}
					status={errorOffersStore.status}
					clearError={clearOfferError}
				/>}
			<Formik
				onSubmit={setOffer}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				<Form className={styles.form}>
					{isFetching && <Components.UI.SpinnerLoader />}
					{renderOfferInput()}
					<button
						type="submit"
						className={styles.btnOffer}
						disabled={!validationSchema && isSubmit}
					>
						Send Offer
					</button>
				</Form>
			</Formik>
		</div >
	)
};
