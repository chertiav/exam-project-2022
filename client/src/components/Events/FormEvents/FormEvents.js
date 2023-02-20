import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Box } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Schems from '../../../validators/validationSchems';
//============================================
import styles from './FormEvents.module.sass';

export const FormEvents = ({ events, setEvents }) => {

	const navigate = useNavigate();
	const goHome = () => navigate('/');

	const onSubmit = (values, { resetForm }) => {
		const newEvent = {
			...values,
			dateTime: new Date(values.date + 'T' + values.time),
			id: Date.now(),
		};
		const newEvents = [...events, newEvent];
		setEvents(newEvents);
		localStorage.setItem('events', JSON.stringify(newEvents));
		resetForm();
	};

	const renderForm = (props) => {
		return (
			<Form>
				<Stack boxSizing={'border-box'} alignItems={'center'}>
					<Stack maxWidth={'30rem'} width={'100%'}>
						<Box component={'label'} htmlFor='nameEvent' mr={'1rem'}>Enter event</Box>
						<Field name='nameEvent' type={'text'} className={styles.input} />
					</Stack>
					<ErrorMessage name='nameEvent'>{msg => <Stack alignItems={'center'} color={'red'}>{msg}</Stack>}</ErrorMessage>
					<Stack direction={'row'} mb={1} flexWrap={'wrap'}>
						<Stack>
							<Stack direction={'row'} m={2} alignItems={'center'}>
								<Box component={'label'} htmlFor='date' mr={'1rem'}>Enter date</Box>
								<Field name='date' type='date' className={styles.input} />
							</Stack>
							<ErrorMessage name='date'>
								{msg => <Stack alignItems={'center'} color={'red'}>{msg}</Stack>}
							</ErrorMessage>
						</Stack>
						<Stack>
							<Stack direction={'row'} m={2} alignItems={'center'}>
								<Box component={'label'} htmlFor='time' mr={'1rem'}>Enter time</Box>
								<Field name='time' type='time' className={styles.input} />
							</Stack>
							<ErrorMessage name='time'>
								{msg => <Stack alignItems={'center'} color={'red'}>{msg}</Stack>}
							</ErrorMessage>
						</Stack>
					</Stack>
				</Stack>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent={'center'}>
					<Button
						disabled={!props.isValid}
						type="submit" variant="contained" color="success" size="large"
					>Save
					</Button>
					<Button onClick={() => goHome()}
						type="button" variant="contained" color="secondary" size="large">
						Return
					</Button>
					<Button type="reset" variant="contained" color="error" size="large">
						Reset
					</Button>
				</Stack>
			</Form >
		)
	};

	return (
		<Stack mb={'1rem'}>
			<Formik
				initialValues={{ nameEvent: '', date: '', time: '' }}
				onSubmit={onSubmit}
				validationSchema={Schems.EventsSchema}
			>
				{renderForm}
			</Formik>
		</Stack>
	)
}
