import React, { useEffect } from 'react';
//===================================================
import styles from './ContestsContainer.module.sass';
import * as  Components from '../..'

export const ContestsContainer = ({ children, loadMore, haveMore, isFetching, type }) => {


	useEffect(() => {
		const scrollHandler = (e) => {
			const scrollHeight = e.target.documentElement.scrollHeight;
			const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
			if (currentHeight + 1 >= scrollHeight) {
				if (haveMore) {
					loadMore(children.length)
				}
			}
		}
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [haveMore, loadMore, children.length])

	if ((!isFetching) && children.length === 0) {
		return (
			<div className={styles.notFound}>
				{type === 'contest'
					? 'Nothing not found'
					: 'There is no suggestion at this moment'}
			</div>
		)
	} return (
		<div>
			{children}
			{
				(isFetching) &&
				<div className={styles.spinnerContainer}>
					<Components.UI.SpinnerLoader />
				</div>}
		</div>
	)
};
