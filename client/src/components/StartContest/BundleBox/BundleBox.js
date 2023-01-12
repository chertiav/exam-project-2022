import React from 'react';
//============================================
import styles from './BundleBox.module.sass';
import * as CONSTANTS from '../../../constants';

export const BundleBox = ({ path, setBundle, header, describe }) => {

	const defaultPathToImages = `${CONSTANTS.APP_CONSTANTS.STATIC_IMAGES_PATH}contestLabels/`;

	const renderImage = () => {
		return (
			path.map((element) =>
				<img
					key={element}
					src={defaultPathToImages + element}
					className={styles.imgContainer}
					alt={element.replace(/.png/g, 'Contest')}
				/>
			)
		)
	};

	const mouseOverHandler = () => {
		const element = document.getElementById(header);
		for (let i = 0; i < element.children[0].children.length; i++) {
			element.children[0].children[i].src = `${defaultPathToImages}blue_${path[i]}`;
		}
	};

	const mouseOutHandler = () => {
		const element = document.getElementById(header);
		for (let i = 0; i < element.children[0].children.length; i++) {
			element.children[0].children[i].src = defaultPathToImages + path[i];
		}
	};

	const getBackClass = () => (path.length === 1 ? ' ' : ` ${styles.combinedBundle}`);

	return (
		<div
			onMouseOver={mouseOverHandler}
			onMouseOut={mouseOutHandler}
			onClick={() => setBundle(header)}
			id={header}
			className={styles.bundleContainer + getBackClass()}
		>
			<div>
				{renderImage()}
			</div>
			<div className={styles.infoContainer}>
				<span className={styles.bundleName}>{header}</span>
				<hr />
				<span className={styles.infoBundle}>{describe}</span>
			</div>
		</div>
	);
};
