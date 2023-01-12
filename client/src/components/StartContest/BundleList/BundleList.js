import React from 'react';
//=============================
import * as Components from '../../';

export const BundleList = ({ bundles, setBundle }) => {
	return (
		bundles.map((bundle) =>
			<Components.BundleBox
				key={bundle.header}
				path={bundle.path}
				header={bundle.header}
				describe={bundle.describe}
				setBundle={setBundle}
			/>
		)
	)
};
