import React from 'react';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
//=====================================================
import styles from './OfferBox.module.sass';
import { contestActions, offerActions, chatActions } from '../../../store/actions';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const OfferBox = ({
	data, needButtons, setOfferStatus, contestType, date }) => {

	const {
		userStore: { data: { id, role } },
		chatStore: { messagesPreview },
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const { rating } = data.User;

	const changeShowImage = (data) =>
		dispatch(contestActions.changeShowImage(data));

	const offerStatus = () => {
		const { status } = data;
		if (status === CONSTANTS.APP_CONSTANTS.OFFER_STATUS_REJECTED) {
			return <i
				className={classNames('fas fa-times-circle reject',
					styles.reject)} />;
		} if (status === CONSTANTS.APP_CONSTANTS.OFFER_STATUS_WON) {
			return <i
				className={classNames('fas fa-check-circle resolve',
					styles.resolve)} />;
		}
		return null;
	};

	const findConversationInfo = () => {
		const participants = [id, data.User.id];
		participants.sort((participant1, participant2) => participant1 - participant2);
		for (let i = 0; i < messagesPreview.length; i++) {
			if (isEqual(participants, messagesPreview[i].participants)) {
				return {
					participants: messagesPreview[i].participants,
					_id: messagesPreview[i]._id,
					blackList: messagesPreview[i].blackList,
					favoriteList: messagesPreview[i].favoriteList,
				};
			}
		}
		return null;
	};

	const goToExpandedDialog = (data) => dispatch(chatActions.goToExpandedDialog(data))

	const goChat = () => {
		goToExpandedDialog({
			interlocutor: data.User,
			conversationData: findConversationInfo()
		});
	};

	const changeMark = (value) => {
		dispatch(offerActions.offerStoreCleareError());
		dispatch(offerActions.changeMarkAction({
			mark: value,
			offerId: data.id,
			isFirst: !data.mark,
			creatorId: data.User.id,
		}))
	};

	const creativeInfoClasses = {
		info: styles.creativeInfoContainer,
		nameContainer: styles.nameAndEmail
	}
	return (
		<div className={styles.offerContainer}>
			{offerStatus()}
			<div className={styles.mainInfoContainer}>
				<div className={styles.userInfo}>
					<Components.ContestUserInfo
						data={data.User}
						flagLogin={false}
						classes={creativeInfoClasses}
					/>
					<div className={styles.creativeRating}>
						<span className={styles.userScoreLabel}>
							Creative Rating
						</span>
						<Components.RatingComponent
							initialRating={rating}
							readonly
						/>
					</div>
				</div>
				<div className={styles.responseConainer}>
					{contestType === CONSTANTS.APP_CONSTANTS.LOGO_CONTEST
						? (<img onClick={() => changeShowImage({
							imagePath: data.fileName,
							isShowOnFull: true
						})}
							className={styles.responseLogo}
							src={`${CONSTANTS.APP_CONSTANTS.PUBLIC_URL}${data.fileName}`}
							alt="logo"
						/>)
						: <span className={styles.response}>{data.text}</span>
					}
					{data.User.id !== id && (
						<Components.RatingComponent
							onClick={changeMark}
							placeholderRating={data.mark}
						/>
					)}
				</div>
				{role !== CONSTANTS.APP_CONSTANTS.CREATOR &&
					<i onClick={goChat} className="fas fa-comments" />}
			</div>
			{needButtons(data.status) &&
				<Components.OfferSolutionButtons
					setOfferStatus={setOfferStatus}
					data={data}
				/>}
		</div>
	)
};
