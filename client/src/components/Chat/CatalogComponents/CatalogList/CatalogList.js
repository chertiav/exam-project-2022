import React from 'react';
import { useDispatch } from 'react-redux';
//===========================================
import styles from '../CatalogListContainer/CatalogListContainer.module.sass';
import { chatActions } from '../../../../store/actions';
import * as Components from '../../../';

export const CatalogList = ({ catalogList }) => {

	const dispatch = useDispatch();

	const goToCatalog = (event, catalog) => {
		dispatch(chatActions.changeShowModeCatalog(catalog));
		event.stopPropagation();
	};

	const deleteCatalog = (event, catalogId) => {
		dispatch(chatActions.deleteCatalogAction(catalogId));
		event.stopPropagation();
	};

	const getListCatalog = () => {
		const elementList = catalogList.map((catalog) =>
			<Components.Catalog
				key={new Date() + catalog._id}
				catalog={catalog}
				deleteCatalog={deleteCatalog}
				goToCatalog={goToCatalog}
			/>
		);
		return (
			elementList.length
				? elementList
				: <span className={styles.notFound}>Not found</span>
		)
	};

	return (
		<div className={styles.listContainer}>
			{getListCatalog()}
		</div>
	);
};