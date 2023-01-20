import React from 'react';
import { useSelector } from 'react-redux';
//===============================
import styles from './HeaderWhite.module.sass';
import * as Components from '../../..';

export const HeaderWhite = ({ logOut }) => {

	const { userStore: { isFetching, data } } = useSelector(state => state);

	return (
		<div className={styles.headerContainer} >
			<Components.FixedHeader />
			{!isFetching
				?
				<>
					<Components.LoginSignnUpHeaders data={data} logOut={logOut} />
					<Components.NavContainer data={data} />
				</>
				: null}
		</div >
	)
};
