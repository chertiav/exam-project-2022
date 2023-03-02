import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//============================
import * as Components from '../../';
import { offerActions } from '../../../store/actions';
import * as CONSTANTS from '../../../constants';

export const OfferList = ({ setOfferStatus, needButtons, contestData }) => {

	const {
		offerStore: { offers, haveMore, isFetching },
	} = useSelector(state => state);
	const dispatch = useDispatch();
	const { id } = useParams();
	const limit = CONSTANTS.DASHBOARD_CONSTANTS.LIST_LIMIT;

	const getOffers = useCallback((data) => {
		dispatch(offerActions.getAllOffersByContestIdActions(data));
	}, [dispatch]);

	const loadMore = (offset) => {
		getOffers({ id, limit, offset });
	};

	const clearOfferStore = useCallback(() => {
		dispatch(offerActions.offerStoreCleareOffersStore())
	}, [dispatch]);

	useEffect(() => {
		getOffers({ id, limit });
		return () => {
			clearOfferStore();
		}
	}, [clearOfferStore, getOffers, id, limit]);

	const renderOffers = () => {
		return (
			offers.map(offer => {
				return (
					<Components.OfferBox
						data={offer}
						key={offer.id}
						needButtons={needButtons}
						setOfferStatus={setOfferStatus}
						contestType={contestData.contestType}
					/>
				)
			}
			)
		)
	};

	return (
		<Components.ContestsContainer
			loadMore={loadMore}
			haveMore={haveMore}
			isFetching={isFetching}
			type={'offer'}
		>
			{renderOffers()}
		</Components.ContestsContainer>
	)
};