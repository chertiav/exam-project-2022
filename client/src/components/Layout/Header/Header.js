import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//==========================================
import { userActions, chatActions } from '../../../store/actions';
import { controller } from '../../../api/ws/socketController';
import * as Components from '../../';
import * as CONSTANTS from '../../../constants';

export const Header = () => {


	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const logOut = (id) => {
		localStorage.removeItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN);
		controller.unsubscribe(id);
		navigate('/login');
	};

	useEffect(() => {
		dispatch(userActions.getUserAction())
		return () => {
			dispatch(userActions.clearUserStore());
			dispatch(chatActions.clearChat());
		}
	}, [dispatch]);

	const isPathBlueHeder = CONSTANTS.HEADER_CONSTANTS.PAGE_FOR_HEADER_BLUE
		.includes(pathname);

	return (
		!isPathBlueHeder
			? <Components.HeaderWhite logOut={logOut} />
			: <Components.HeaderBlue logOut={logOut} />
	)
};
