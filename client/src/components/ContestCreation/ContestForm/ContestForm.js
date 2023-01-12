import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
//===========================================
import styles from './ContestForm.module.sass';
import Schems from '../../../validators/validationSchems';
import { contestActions } from '../../../store/actions';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const ContestForm = ({
	contestType, handleSubmit, formRef, defaultData, setFile, setDeleteFile }) => {

	const {
		contestByIdStore: { isEditContest },
		dataForContest: { isFetching, error, data },
	} = useSelector(state => state);
	const dispatch = useDispatch();

	const getData = useCallback((data) => {
		dispatch(contestActions.getDataForContestAction(data))
	}, [dispatch]);

	const clearData = useCallback(() => {
		dispatch(contestActions.clearDataForContest())
	}, [dispatch]);

	const getPreference = useCallback(
		() => {
			switch (contestType) {
				case CONSTANTS.APP_CONSTANTS.NAME_CONTEST: {
					getData({
						characteristic1: 'nameStyle',
						characteristic2: 'typeOfName'
					});
					break;
				}
				case CONSTANTS.APP_CONSTANTS.TAGLINE_CONTEST: {
					getData({ characteristic1: 'typeOfTagline' });
					break;
				}
				case CONSTANTS.APP_CONSTANTS.LOGO_CONTEST: {
					getData({ characteristic1: 'brandStyle' });
					break;
				}
				default: break;
			}
		}, [contestType, getData])

	useEffect(() => {
		getPreference();
		return () => { clearData(); }
	}, [clearData, getPreference]);

	const initialValues = {
		title: '',
		industry: '',
		focusOfWork: '',
		targetCustomer: '',
		file: '',
		...CONSTANTS.CREATION_CONTEST.VARIABLE_OPTIONNS[contestType],
		...defaultData,
	};

	const textAreaClasses = {
		inputContainer: styles.inputContainer,
		inputHeader: styles.inputHeader,
		container: styles.componentInputContainer,
		inputStyle: styles.textArea,
		warning: styles.warning,
	}

	const selectInputClasses = {
		inputContainer: styles.selectInputContainer,
		inputHeader: styles.selectHeader,
		selectInput: styles.select,
		warning: styles.warning,
	}
	const formInputClasses = {
		container: styles.componentInputContainer,
		input: styles.input,
		warning: styles.warning,
	}

	const fileUploadClasses = {
		fileContainer: styles.fileContainer,
		fileUploadContainer: styles.fileUploadContainer,
		labelClass: styles.label,
		fileNameClass: styles.fileName,
		fileInput: styles.fileInput,
		warning: styles.warning,
	}

	const renderForm = () => {
		return (
			<Form>
				<div className={styles.inputContainer}>
					<span className={styles.inputHeader}>
						{CONSTANTS.CREATION_CONTEST.FORM_INPUT_TITLE}
					</span>
					<Components.UI.FormInput
						name="title"
						type="text"
						label="Title"
						classes={formInputClasses}
					/>
				</div>
				<div className={styles.inputContainer}>
					<Components.UI.SelectInputWrapper
						name="industry"
						classes={selectInputClasses}
						header="Describe industry associated with your venture"
						optionsArray={data.industry}
					/>
				</div>
				<Components.FormTextAreaBlock
					classes={textAreaClasses}
					textAreaData={CONSTANTS.CREATION_CONTEST.DATA_TEXT_AREA}
				/>
				<Components.UI.OptionalSelects
					contestType={contestType}
					isFetching={isFetching}
					data={data}
					selectInputClasses={selectInputClasses}
					formInputClasses={formInputClasses}
				/>
				<Components.UI.FieldFileInput
					name="file"
					classes={fileUploadClasses}
					type="file"
					contestType={contestType}
					setFile={setFile}
					setDeleteFile={setDeleteFile}
				/>
				{isEditContest
					? <button type="submit" className={styles.changeData}>Set Data</button>
					: null}
			</Form>
		)
	}
	return (
		<div className={styles.formContainer}>
			{(error) && < Components.UI.TryAgain getData={getPreference} />}
			{(isFetching) && <Components.UI.SpinnerLoader />}
			{(!error) && (!isFetching) &&
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={Schems.ContestSchem}
					innerRef={formRef}
					enableReinitialize
				>
					{renderForm}
				</Formik>
			}
		</div	>
	)
};
