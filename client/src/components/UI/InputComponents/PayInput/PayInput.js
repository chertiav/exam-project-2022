import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import { ErrorMessage, Field } from 'formik';

export const PayInput = ({
	label, type, changeFocus, classes, isInputMask, mask, name, ...rest }) => (

	<Field name={name}>
		{(props) => {
			const { field, meta: { touched, error } } = props;
			const inputClassName = classNames(classes.input, {
				[classes.notValid]: touched && error
			});

			if (isInputMask) {
				return (
					<div className={classes.container}>
						<InputMask
							{...field}
							mask={mask}
							maskChar={null}
							type={type}
							placeholder={label}
							className={inputClassName}
							onFocus={() => changeFocus(field.name)}
							{...rest}
						/>
						{(touched && error) && (
							<ErrorMessage
								name={field.name}
								component="span"
								className={classes.error}
							/>
						)}
					</div>
				);
			}
			return (
				<div className={classes.container}>
					<input
						{...field}
						{...rest}
						value={props.value}
						type={type}
						placeholder={label}
						className={inputClassName}
					/>
					{(touched && error) && (
						<ErrorMessage
							name={field.name}
							component="span"
							className={classes.error}
						/>
					)}
				</div>
			);

		}}
	</Field>
);
