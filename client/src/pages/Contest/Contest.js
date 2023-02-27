import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import LightBox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
//====================================
import styles from './Contest.module.sass';
import { contestActions, offerActions, chatActions } from '../../store/actions';
import * as CONSTANTS from '../../constants';
import * as Components from '../../components'

export const Contest = () => {

	const {
		contestByIdStore: {
			isFetching, contestData, error,
			isBrief, isShowOnFull, imagePath,
		},
		contestCountByIdStore: { AllCountOffers },
		offerStore: { errorGetAllOfers, errorOffersStore },
		userStore: { data },
		chatStore,
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const { id } = useParams();
	const limit = CONSTANTS.DASHBOARD_CONSTANTS.LIST_LIMIT;

	const getDataByContest = useCallback(() => {
		dispatch(contestActions.getContestByIdAction(id));
		dispatch(contestActions.getCountOffersByContestdActions(id));
	}, [dispatch, id]);

	const getOffers = () => {
		dispatch(offerActions.getAllOffersByContestIdActions({ id, limit }));
	};

	const clearContestById = useCallback(() => {
		dispatch(contestActions.clearContestById());
	}, [dispatch]);

	const changeContestViewMode = (data) =>
		dispatch(contestActions.changeContestViewMode(data));

	const changeShowImage = (data) =>
		dispatch(contestActions.changeShowImage(data));

	const offerStoreCleareError = useCallback(() => {
		dispatch(offerActions.offerStoreCleareError())
	}, [dispatch]);

	useEffect(() => {
		getDataByContest();
		return () => {
			clearContestById();
		}
	}, [getDataByContest, clearContestById])

	const setOfferStatus = ({ userData, offerId, command }) => {
		offerStoreCleareError();
		const { id, orderId, priority } = contestData;
		const obj = data.role === CONSTANTS.APP_CONSTANTS.MODERATOR
			? command === 'delete'
				? { offerId, email: userData.email }
				: { command, offerId, email: userData.email }
			: { command, offerId, creatorId: userData.id, orderId, priority, contestId: id };
		data.role === CONSTANTS.APP_CONSTANTS.MODERATOR
			? command === 'delete'
				? dispatch(offerActions.deleteOffersActions(obj))
				: dispatch(offerActions.setOfferStatusModeratorAction(obj))
			: dispatch(offerActions.setOfferStatusAction(obj));
	};

	const findConversationInfo = (interlocutorId) => {
		const { messagesPreview } = chatStore;
		const { id } = data;
		const participants = [id, interlocutorId];
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

	const goChat = () => {
		const { User } = contestData;
		dispatch(chatActions.goToExpandedDialog({
			interlocutor: User,
			conversationData: findConversationInfo(User.id),
		}));
	};

	const needButtonsModerator = (offerStatus) => {
		const contestStatus = contestData.status;
		return (
			contestStatus === CONSTANTS.APP_CONSTANTS.CONTEST_STATUS_ACTIVE
			&& offerStatus === CONSTANTS.APP_CONSTANTS.OFFER_STATUS_PENDING
		);
	}

	const needButtonsCustomer = (offerStatus) => {
		const contestCreatorId = contestData.User.id;
		const userId = data.id;
		const contestStatus = contestData.status;
		return (
			contestCreatorId === userId
			&& contestStatus === CONSTANTS.APP_CONSTANTS.CONTEST_STATUS_ACTIVE
			&& offerStatus === CONSTANTS.APP_CONSTANTS.OFFER_STATUS_ACTIVE
		);
	}

	const needButtons = (offerStatus) => {
		switch (data.role) {
			case CONSTANTS.APP_CONSTANTS.CUSTOMER: {
				return needButtonsCustomer(offerStatus);
			}
			case CONSTANTS.APP_CONSTANTS.MODERATOR: {
				return needButtonsModerator(offerStatus);
			}
			default: break;
		}
	}

	return (
		<>
			{isShowOnFull && (
				<LightBox
					mainSrc={`${CONSTANTS.APP_CONSTANTS.PUBLIC_URL}${imagePath}`}
					onCloseRequest={() => changeShowImage({
						isShowOnFull: false,
						imagePath: null
					})}
				/>
			)}
			{error
				? <div className={styles.tryContainer}>
					<Components.UI.TryAgain getData={getDataByContest} />
				</div>
				: (isFetching
					? (<div className={styles.containerSpinner}>
						<Components.UI.SpinnerLoader />
					</div>)
					: (<div className={styles.mainInfoContainer}>
						<div className={styles.infoContainer}>
							<div className={styles.buttonsContainer}>
								<Stack direction={'row'}>
									<span
										onClick={() => changeContestViewMode(true)}
										className={classNames(styles.btn, {
											[styles.activeBtn]: isBrief
										})}
									>	Brief
									</span>
									<span
										onClick={() => changeContestViewMode(false)}
										className={classNames(styles.btn, {
											[styles.activeBtn]: !isBrief
										})}
									>	Offer
									</span>
								</Stack>
								<Components.UI.BackButton location={'/dashboard'} classes={styles.btn} />
							</div>
							{isBrief
								? <Components.Brief contestData={contestData} role={data.role} goChat={goChat} />
								: (
									<div className={styles.offersContainer}>
										{(data.role === CONSTANTS.APP_CONSTANTS.CREATOR
											&& contestData.status === CONSTANTS.APP_CONSTANTS.CONTEST_STATUS_ACTIVE)
											&& (<Components.OfferForm
												contestType={contestData.contestType}
												contestId={contestData.id}
												customerId={contestData.User.id}
											/>)}
										{errorGetAllOfers
											&& <Components.UI.TryAgain getData={getOffers} />}
										{errorOffersStore
											&& <Components.UI.Error
												data={errorOffersStore.data}
												status={errorOffersStore.status}
												clearError={offerStoreCleareError}
											/>}
										<div className={styles.offers}>
											<Components.OfferList
												setOfferStatus={setOfferStatus}
												needButtons={needButtons}
												contestData={contestData}
												getDataByContest={getDataByContest}
											/>
										</div>
									</div>
								)
							}
						</div>
						{data.role !== CONSTANTS.APP_CONSTANTS.MODERATOR &&
							<Components.ContestSideBar
								contestData={contestData}
								totalEntries={AllCountOffers}
							/>}
					</div>
					)
				)}
		</>
	)
};
