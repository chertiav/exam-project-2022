import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//========================================
import styles from './UserInfo.module.sass';
import { userActions } from '../../../store/actions'
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const UserInfo = () => {

	const {
		userStore: {
			data: {
				avatar, firstName, lastName, displayName, email, role, balance } },
		userProfile: { isEdit },
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const [file, setFile] = useState(null);
	const [flagDeleteAvatar, setFlagDeleteAvatar] = useState('');

	const dataForAllRole = { firstName, lastName, displayName, email, role };
	const dataAdditionForCreator = { balance };

	const changeEditMode = (data) => dispatch(
		userActions.changeEditModeOnUserProfile(data));

	const updateUserData = (values) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('firstName', values.firstName);
		formData.append('lastName', values.lastName);
		formData.append('displayName', values.displayName);
		formData.append('deleteAvatar', flagDeleteAvatar);
		dispatch(userActions.updateUserAction(formData))
	};

	const infoBlockClasses = {
		infoBlock: styles.infoBlock,
		label: styles.label,
		info: styles.info
	}
	return (
		<div className={styles.mainContainer}>
			{isEdit ?
				< Components.UpdateUserInfoForm
					onSubmit={updateUserData}
					setFile={setFile}
					setFlagDeleteAvatar={setFlagDeleteAvatar} />
				: (
					<div className={styles.infoContainer}>
						<Components.UI.Avatar
							avatar={avatar}
							className={styles.avatar}
							alt="user"
						/>
						<div className={styles.infoContainer}>
							<Components.UserInfoBlock
								dataInfoBlock={dataForAllRole}
								classes={infoBlockClasses}
							/>
							{role === CONSTANTS.APP_CONSTANTS.CREATOR &&
								< Components.UserInfoBlock
									dataInfoBlock={dataAdditionForCreator}
									classes={infoBlockClasses}
								/>}
						</div>
					</div>
				)}
			<div
				onClick={() => changeEditMode(!isEdit)}
				className={styles.buttonEdit}
			>
				{isEdit ? 'Back' : 'Edit'}
			</div>
		</div>
	)
};
