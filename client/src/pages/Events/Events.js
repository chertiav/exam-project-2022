import { Container, Stack, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
//============================================
import * as Components from '../../components';

export const Events = () => {

	const [events, setEvents] = useState([]);
	const [chekEvents, setChekEvents] = useState(true);

	useEffect(() => {
		const fromStorage = JSON.parse(localStorage.getItem('events'));
		!fromStorage ? setEvents([]) : setEvents([...fromStorage]);
	}, []);

	useEffect(() => {
		if (chekEvents) {
			const now = new Date().getTime();
			const lengthEvents = events.filter(i => Date.parse(i.dateTime) - now < 0).length;
			if (lengthEvents) {
				toast.error(`Completed ${lengthEvents} event timers `, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				})
			};
			setChekEvents(false)
		}
	}, [events, chekEvents]);

	return (
		<Container>
			<Stack p={'2.5rem'} color={'#495d8b'} lineHeight={1.5}>
				<Box
					component={'h1'}
					textAlign={'center'} pb={'1.5rem'} fontSize={'1.5rem'}
				>
					List of planned events
				</Box>
				<Stack alignItems={'center'}>
					<Components.FormEvents events={events} setEvents={setEvents} />
					<Components.ListEvents
						events={events}
						setEvents={setEvents}
						setChekEvents={setChekEvents}
					/>
				</Stack>
			</Stack>
		</Container >
	)
};
