import React from 'react';
//=================================
import * as Components from '../../';

export const BlockInput = ({ inputs, formInputClasses }) => {
	return (
		inputs.map(input =>
			< Components.UI.FormInput
				key={input.name}
				name={input.name}
				type={input.type}
				label={input.label}
				classes={formInputClasses}
			/>
		)
	)
};
