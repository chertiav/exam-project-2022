import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

export const FormInput = ({ classes, label, name, setIsSubmit, ...rest }) => (
	<Field name={name}>
		{(props) => {
			const { field, meta: { touched, error } } = props;
			const inputClassName = classNames(classes.input, {
				[classes.notValid]: touched && error,
				[classes.valid]: touched && !error,
			});
			return (
				<div className={classes.container}>
					<input
						type="text" {...field}
						placeholder={label}
						className={inputClassName}
						{...rest}
					/>
					<ErrorMessage
						name={name}
						component="span"
						className={classes.warning}
					/>
				</div>
			);
		}}
	</Field>
);
