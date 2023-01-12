import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
//==================================================
import * as utils from '../utils';

export const ProtectedRoute = () => {

	const { userStore: { data } } = useSelector(state => state);
	const auth = utils.function.useAuth();
	const { pathname, search } = useLocation();

	return (
		auth
			? data
				? <Outlet />
				: <Navigate to={pathname + search} replace />
			: <Navigate to='/login' />);
};