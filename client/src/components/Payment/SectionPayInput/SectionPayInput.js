import React from 'react';
//==========================
import * as Components from '../../';

export const SectionPayInput = ({ payInputs, classes, changeFocus, ...rest }) => {
	return (
		payInputs.map((payInputItem) =>
			< div {...rest} key={payInputItem.title}>
				<span>{payInputItem.title}</span>
				<Components.UI.PayInput
					isInputMask
					name={payInputItem.name}
					mask={payInputItem.mask}
					type={payInputItem.type}
					label={payInputItem.label}
					classes={classes}
					changeFocus={changeFocus}
				/>
			</ div>
		)
	)
};
