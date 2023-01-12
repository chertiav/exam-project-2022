import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//==========================================
import styles from './Header.module.sass';
import * as Components from '../../';
import { userActions, chatActions } from '../../../store/actions';

export const Header = () => {

	const { userStore: { data, isFetching } } = useSelector(state => state)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.getUserAction())
		return () => {
			dispatch(userActions.clearUserStore());
			dispatch(chatActions.clearChat());
		}
	}, [dispatch]);

	return (
		<div className={styles.headerContainer} >
			<Components.FixedHeader />
			{!isFetching
				?
				<>
					<Components.LoginSignnUpHeaders data={data} />
					<Components.NavContainer data={data} />
				</>
				: null}
		</div >
	)
};
