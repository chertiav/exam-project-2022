import React from 'react';
//===============================
import styles from './ContestInfo.module.sass';
import * as CONSTANTS from '../../../constants';
import * as Components from '../../';

export const ContestInfo = ({
	changeEditContest, userId, contestData, role, goChat }) => {

	const {
		typeOfTagline, brandStyle, typeOfName, styleName, contestType,
		title, focusOfWork, targetCustomer, industry, originalFileName,
		fileName, User, status,
	} = contestData;

	const specialInfoClasses = {
		dataContainer: styles.dataContainer,
		label: styles.label,
		data: styles.data,
	}

	return (
		<div className={styles.mainContestInfoContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.contestTypeContainer}>
					<Components.ContestData
						title={'Contest Type'}
						data={focusOfWork}
						classes={specialInfoClasses}
					/>
					{(User.id === userId && status !== CONSTANTS.APP_CONSTANTS.CONTEST_STATUS_FINISHED) &&
						<div
							onClick={() => changeEditContest(true)}
							className={styles.editBtn}
						>	Edit
						</div>}
					{role === CONSTANTS.APP_CONSTANTS.CREATOR &&
						< i onClick={goChat} className="fas fa-comments" />}
				</div>
				<Components.ContestData
					title={'Title of the Project'}
					data={title}
					classes={specialInfoClasses}
				/>
				{
					contestType === CONSTANTS.APP_CONSTANTS.NAME_CONTEST
						? <Components.ContestSpecialInfo
							titleName={'Type of Name'}
							titleType={'Style of Name'}
							name={styleName}
							type={typeOfName}
							classes={specialInfoClasses}
						/>
						: (
							contestType === CONSTANTS.APP_CONSTANTS.TAGLINE_CONTEST
								? (
									<Components.ContestSpecialInfo
										titleName={'Name ventrure'}
										titleType={'Type of Taglinee'}
										type={typeOfTagline}
										name={contestData.nameVenture}
										classes={specialInfoClasses}
									/>
								)
								: <Components.ContestSpecialInfo
									titleName={'Name ventrure'}
									titleType={'Brand Style'}
									type={brandStyle}
									name={contestData.nameVenture}
									classes={specialInfoClasses}
								/>
						)
				}
				<Components.ContestData
					title={'What is your Business/ Brand about?'}
					data={focusOfWork}
					classes={specialInfoClasses}
				/>
				<Components.ContestData
					title={'Description target customers of company'}
					data={targetCustomer}
					classes={specialInfoClasses}
				/>
				<Components.ContestData
					title={'Industry  of company'}
					data={industry}
					classes={specialInfoClasses}
				/>
				{originalFileName && (
					<div className={styles.dataContainer}>
						<span className={styles.label}>Additional File</span>
						<a
							target="_blank"
							className={styles.file}
							href={`${CONSTANTS.APP_CONSTANTS.PUBLIC_URL}${fileName}`}
							download={originalFileName}
							rel="noreferrer"
						>
							{originalFileName}
						</a>
					</div>
				)}
			</div>
		</div>
	);
};
