import React from 'react';
import { useLocation } from 'react-router-dom';
//================================
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';

export const Footer = () => {

	const { pathname } = useLocation();

	const isPathGreyFooter = CONSTANTS.APP_CONSTANTS.PAGE_FOR_HEADER_BLUE
		.includes(pathname);

	return (
		!isPathGreyFooter
			? <Components.FooterMain />
			: <Components.FooterMainGrey />
	)
};
