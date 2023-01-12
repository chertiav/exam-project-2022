import React from 'react';
//=====================================
import * as utils from '../../../utils';

export const UserInfoBlock = ({ dataInfoBlock, classes }) => {
	return (
		utils.function.getInfoBlockValues(dataInfoBlock).map(item =>
			<div className={classes.infoBlock} key={item.key}>
				<span className={classes.label}>{item.displayView}</span>
				<span className={classes.info}>
					{item.key === 'balance' ? `${item.value}$` : item.value}
				</span>
			</div>
		)
	)
};
