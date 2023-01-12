import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
//================================================s
import * as utils from '../utils';

export const OnlyNotAuthorizedUserRoute = () => {
	const auth = utils.function.useAuth();
	return auth ? <Navigate to="/" /> : <Outlet />;
};
