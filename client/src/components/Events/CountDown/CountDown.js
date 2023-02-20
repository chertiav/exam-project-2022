import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material';

export const CountDown = ({ date, setChekEvents }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			const now = new Date().getTime();
			const distance = (Date.parse(date) - now) / 1000;
			if (distance > 0) {
				const days = Math.floor(distance / 60 / 60 / 24);
				const hours = Math.floor(distance / 60 / 60 % 24);
				const minutes = Math.floor((distance / 60) % 60);
				const seconds = Math.floor(distance % 60);
				setDays(days);
				setHours(hours);
				setMinutes(minutes);
				setSeconds(seconds);
			} else {
				if (distance <= 0) setChekEvents(true);
				clearInterval(timerId);
			}
		}, 0)
		return () => {
			clearInterval(timerId)
		};
	}, [date, setChekEvents])


	return (
		<Stack direction={'row'} mr={'0.5rem'}>
			<Stack margin={'0 0.5rem'} textAlign={'center'}>
				<Box component={'span'}>{days}</Box>
				<Box component={'span'} fontSize={'0.7rem'}>day</Box>
			</Stack>
			<Box component={'span'}>:</Box>
			<Stack margin={'0 0.5rem'} textAlign={'center'}>
				<Box component={'span'}>{hours < 10 ? '0' + hours : hours}</Box>
				<Box component={'span'} fontSize={'0.7rem'}>hh</Box>
			</Stack>
			<Box component={'span'}>:</Box>
			<Stack margin={'0 0.5rem'} textAlign={'center'}>
				<Box component={'span'}>{minutes < 10 ? '0' + minutes : minutes}</Box>
				<Box component={'span'} fontSize={'0.7rem'}>mm</Box>
			</Stack>
			<Box component={'span'}>:</Box>
			<Stack margin={'0 0.5rem'} textAlign={'center'}>
				<Box component={'span'}>{seconds < 10 ? '0' + seconds : seconds}</Box>
				<Box component={'span'} fontSize={'0.7rem'}>ss</Box>
			</Stack>
		</Stack >
	)
}
