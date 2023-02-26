import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//=====================================
import * as Components from '../../components'
import * as CONSTANTS from '../../constants';

export const Dashboard = () => {

	const { userStore: { data } } = useSelector(state => state)

	return (
		data.role === CONSTANTS.APP_CONSTANTS.MODERATOR
			? <Components.ModeratorDashbord />
			: data.role === CONSTANTS.APP_CONSTANTS.CUSTOMER
				? <Components.CustomerDashboard />
				: data.role === CONSTANTS.APP_CONSTANTS.CREATOR
					? <Components.CreatorDashboard />
					: <Navigate to="/" replace={true} />
	)
};

