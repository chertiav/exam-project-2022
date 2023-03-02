import React from 'react';
//================================
import { contestActions } from '../../../store/actions';
import * as Components from '../../';

export const ModeratorDashbord = () => {
	return (
		<Components.ForMultipleRolesDashbord
			action={contestActions.getContestsModeratorAction}
		/>
	);
};
