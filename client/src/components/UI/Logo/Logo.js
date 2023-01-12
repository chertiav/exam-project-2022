import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//=========================================
import * as CONSTANTS from '../../../constants';

export const Logo = ({ to, ...props }) => (
	<Link to={to}>
		<img {...props} alt="logo" />
	</Link>
);

Logo.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
};

Logo.defaultProps = {
	to: '/',
	src: `${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`,
	alt: 'logo',
};
