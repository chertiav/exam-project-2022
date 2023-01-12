import React from 'react';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

export const AgreeTermOfServiceInput = ({
	id, type, classes, label, title, linkTo, linkTitle, ...rest
}) => (
	<Field {...rest}>
		{(props) => {
			const {
				meta: { touched, error },
				field,
			} = props;
			return (
				<>
					<label htmlFor={id}>
						<div className={classes.container}>
							<input {...field} placeholder={label} id={id} type={type} />
							<span >{`${title} `} <Link to={linkTo}>{linkTitle}</Link></span>
						</div>
					</label>
					{touched && error && (
						<span className={classes.warning}>{error}</span>
					)}
				</>
			);
		}}
	</Field >
);
