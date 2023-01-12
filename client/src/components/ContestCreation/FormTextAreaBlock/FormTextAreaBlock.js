import React from 'react';
//================================
import * as Components from '../../';

export const FormTextAreaBlock = ({ classes, textAreaData }) => {
	return (
		textAreaData.map((textAreaItem) =>
			< div key={textAreaItem.name} className={classes.inputContainer} >
				<span className={classes.inputHeader}>
					{textAreaItem.title}
				</span>
				<Components.UI.FormTextArea
					name={textAreaItem.name}
					type={textAreaItem.type}
					label={textAreaItem.label}
					classes={classes}
				/>
			</ div>
		)
	)
};
