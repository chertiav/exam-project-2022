import { Box, Stack } from '@mui/material';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
//==================================
import * as Components from '../../';

export const ListEvents = ({ events, setEvents, setChekEvents }) => {

	const deleteEvent = (id) => {
		const newEvents = events.filter((item) => item.id !== id);
		setEvents(newEvents);
		localStorage.setItem('events', JSON.stringify(newEvents));
	};

	return (
		<Stack boxSizing={'border-box'} maxWidth={'40rem'} width={'100%'}>
			{events.length === 0
				? <Box m={'1rem auto'}> There are no planned events!</Box>
				: events
					.sort((a, b) => Date.parse(a.dateTime) - Date.parse(b.dateTime))
					.map((item) =>
						<Stack
							key={item.id}
							direction={'row'} p={'1rem'} mt={'0.5rem'}
							border={'1px solid #495d8b'}
							borderRadius={'4px'}
							justifyContent={'space-between'}
							alignItems={'center'}
							flexWrap={'wrap'}
						>
							{item.nameEvent}
							<Stack direction={'row'} alignItems={'center'}>
								<Components.CountDown
									date={item.dateTime}
									setChekEvents={setChekEvents} />
								<FaTrashAlt onClick={() => deleteEvent(item.id)} cursor={'pointer'} />
							</Stack>
						</Stack>
					)
			}
		</Stack >
	)
};
