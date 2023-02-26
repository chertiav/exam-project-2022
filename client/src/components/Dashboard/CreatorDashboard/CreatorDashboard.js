import React from 'react';
//================================
import { contestActions } from '../../../store/actions';
import * as Components from '../../';

export const CreatorDashboard = () => {
	return (
		<Components.ForMultipleRolesDashbord
			action={contestActions.getContestsCreativeAction}
		/>
	);
};
