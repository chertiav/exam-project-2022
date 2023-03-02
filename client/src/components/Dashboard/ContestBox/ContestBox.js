import React from 'react';
import { useSelector } from 'react-redux';
//=============================================
import styles from './ContestBox.module.sass';
import * as Components from '../../'
import * as CONSTANTS from '../../../constants';
import * as utils from '../../../utils';

export const ContestBox = ({ data, goToExtended }) => {

	const { userStore: { data: { role } } } = useSelector(state => state);
	const { id, title, contestType, prize, count, createdAt, typeOfName, brandStyle, typeOfTagline } = data;

	const getPreferenceContest = () => {
		if (contestType === CONSTANTS.APP_CONSTANTS.NAME_CONTEST) return typeOfName;
		if (contestType === CONSTANTS.APP_CONSTANTS.LOGO_CONTEST) return brandStyle;
		return typeOfTagline;
	};

	return (
		<>
			<div className={styles.contestBoxContainer} onClick={() => goToExtended(id)}>
				<div className={styles.mainContestInfo}>
					<div className={styles.titleAndIdContainer}>
						<span className={styles.title}>{title}</span>
						<span className={styles.id}>{`(#${id})`}</span>
					</div>
					<div className={styles.contestType}>
						<span>{`${utils.function.ucFirstLetter(contestType)} / ${getPreferenceContest()}`}</span>
					</div>
					{role !== CONSTANTS.APP_CONSTANTS.MODERATOR &&
						<>
							<div className={styles.contestType}>
								<span>This is an Invitation Only Contest and is only open to those Creatives who have achieved a Tier A status.</span>
							</div>
							<div className={styles.prizeContainer}>
								<Components.ContestDescription
									classesStyle={styles.guaranteedContainer}
									image={'smallCheck.png'}
									alt='check'
									title='Guaranteed prize'
								/>
								<Components.ContestDescription
									classesStyle={styles.prize}
									image={'diamond.png'}
									alt='diamond'
									title={`$${prize}`}
								/>
							</div>
						</>
					}
				</div>
				<div className={styles.entryAndTimeContainer}>
					<div className={styles.entriesContainer}>
						<Components.ContestDescription
							classesStyle={styles.entriesCounter}
							image={'entrieImage.png'}
							alt='logo'
							title={count}
						/>
						<span>Entries</span>
					</div>
					<div className={styles.timeContainer}>
						<span className={styles.timeContest}>
							{utils.function.getTimeStr(createdAt)}
						</span>
						<span>Going</span>
					</div>
				</div>
			</div>
		</>
	);
};
