import React from 'react';
import Grid from '@mui/material/Grid';
import { Outlet, useLocation } from 'react-router-dom';
//=================================================
import * as Components from '../../components';

export const Layout = () => {

	const { pathname } = useLocation();
	const checkPathname = pathname !== "/login" && pathname !== "/registration";

	return (
		<Grid container minHeight={'100vh'} flexDirection={'column'}>
			{checkPathname && < Components.Header />}
			<Grid container flex={'1 1 auto'}>
				<Outlet />
			</Grid>
			{checkPathname && < Components.Footer />}
			{pathname === "/registration" && < Components.FooterRegistration />}
		</Grid>
	)
};
