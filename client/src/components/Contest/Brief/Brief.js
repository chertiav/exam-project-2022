import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//=================================
import styles from './Brief.module.sass';
import * as Components from '../../';
import { contestActions } from '../../../store/actions';

export const Brief = ({ contestData, role, goChat }) => {

	const {
		contestByIdStore: { isEditContest },
		updateContestStore: { error },
		userStore: { data: { id } }
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const [fileUpdate, setFileUpdate] = useState('');
	const [deleteFile, setDeleteFile] = useState('');

	const changeEditContest = (data) =>
		dispatch(contestActions.changeEditContest(data));

	const clearUpdateContestStore = () =>
		dispatch(contestActions.clearUpdateContestStore());

	const update = (data) => dispatch(contestActions.updateContest(data));

	const getContestObjInfo = () => {
		const {
			focusOfWork, industry, nameVenture,
			styleName, targetCustomer, title,
			brandStyle, typeOfName, typeOfTagline,
			originalFileName, contestType,
		} = contestData;
		const data = {
			focusOfWork, industry, nameVenture,
			styleName, targetCustomer, title,
			brandStyle, typeOfName, typeOfTagline,
			originalFileName, contestType,
		};
		const defaultData = {};
		Object.keys(data).forEach((key) => {
			if (data[key]) {
				if (key === 'originalFileName') {
					defaultData.file = { name: data[key] };
				} else {
					defaultData[key] = data[key];
				}
			}
		});
		return defaultData;
	};

	const setNewContestData = (values) => {
		const data = new FormData();
		Object.keys(values).forEach((key) => {
			if (key !== 'file' && values[key]) {
				data.append(key, values[key])
			};
		});
		if (fileUpdate) {
			data.append('file', fileUpdate);
		}
		data.append('contestId', contestData.id);
		data.append('deleteFile', deleteFile);
		update(data);
	};

	if (!isEditContest) {
		return (
			<Components.ContestInfo
				userId={id}
				contestData={contestData}
				changeEditContest={changeEditContest}
				role={role}
				goChat={goChat}
			/>
		);
	}
	return (
		<div className={styles.contestForm}>
			{error &&
				<Components.UI.Error
					data={error.data}
					status={error.status}
					clearError={clearUpdateContestStore}
				/>}
			<Components.ContestForm
				contestType={contestData.contestType}
				defaultData={getContestObjInfo()}
				handleSubmit={setNewContestData}
				setFile={setFileUpdate}
				setDeleteFile={setDeleteFile}
			/>
		</div>
	);
};
