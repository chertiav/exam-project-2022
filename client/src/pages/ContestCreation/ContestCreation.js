import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
//==================================================
import styles from './ContestCreationPage.module.sass';
import { contestActions } from '../../store/actions';
import * as Components from '../../components';
import * as CONSTANTS from '../../constants';

export const ContestCreation = ({ title, contestType }) => {

	const {
		userStore: { data },
		contestStore,
		bundleStore
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [file, setFile] = useState('');
	const formRef = useRef();


	useEffect(() => {
		!bundleStore.bundle && navigate('/startContest');
	}, [bundleStore, navigate])

	const saveContest = (data) => {
		dispatch(contestActions.saveContestToStore(data));
	}

	const contestData = contestStore.contests[contestType]
		? contestStore.contests[contestType]
		: { contestType: contestType };

	const handleSubmit = (values) => {
		saveContest({
			type: contestType,
			info: { ...values, file }
		});
		const route = bundleStore.bundle[contestType] === 'payment'
			? '/payment'
			: `/startContest/${bundleStore.bundle[contestType]}Contest`;
		navigate(route);
	};

	const submitForm = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	if (data?.role !== CONSTANTS.APP_CONSTANTS.CUSTOMER) {
		return (
			<Navigate to={'/'} replace />
		);
	}
	return (
		<div className={styles.contestCreationContainer}>
			<Components.UI.ContestHeader
				title={title}
				text={CONSTANTS.CREATION_CONTEST.HEADER_TEXT}
				currentStep={2}
			/>
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<Components.ContestForm
						contestType={contestType}
						handleSubmit={handleSubmit}
						formRef={formRef}
						defaultData={contestData}
						setFile={setFile}
					/>
				</div>
			</div>
			<Components.ContestNavigate submitForm={submitForm} />
		</div>
	)
};
