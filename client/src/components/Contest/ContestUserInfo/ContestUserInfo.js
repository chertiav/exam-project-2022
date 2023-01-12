import React from 'react';
//==========================================
import * as utils from '../../../utils';

export const ContestUserInfo = ({ data, flagLogin, classes }) => {
	return (
		<div className={classes.info}>
			<img src={utils.function.getAvar(data.avatar)} alt="user" />
			<div className={classes.nameContainer}>
				<span>{`${data.firstName} ${data.lastName}`}</span>
				<span>{flagLogin ? data.displayName : data.email}</span>
			</div>
		</div>
	)
};
