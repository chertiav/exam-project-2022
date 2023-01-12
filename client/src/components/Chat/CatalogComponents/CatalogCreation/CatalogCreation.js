import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import classNames from 'classnames';
//========================================
import styles from './CatalogCreation.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';
import { chatActions } from '../../../../store/actions';

export const CatalogCreation = () => {

	const {
		catalogCreationMode, isFetching
	} = useSelector((state) => state.chatStore);
	const dispatch = useDispatch();
	const { CHAT_CONSTANTS: {
		ADD_CHAT_TO_OLD_CATALOG, CREATE_NEW_CATALOG_AND_ADD_CHAT
	} } = CONSTANTS;

	const changeTypeOfChatAdding = (data) =>
		dispatch(chatActions.changeTypeOfChatAdding(data));
	const changeShowAddChatToCatalogMenu = () =>
		dispatch(chatActions.changeShowAddChatToCatalogMenu());

	useEffect(() => {
		dispatch(chatActions.getCatalogListAction())
	}, [dispatch])

	return (
		<>
			{!isFetching && (
				<div className={styles.catalogCreationContainer}>
					<i className="far fa-times-circle"
						onClick={() => changeShowAddChatToCatalogMenu()} />
					<div className={styles.buttonsContainer}>
						<span
							onClick={() =>
								changeTypeOfChatAdding(ADD_CHAT_TO_OLD_CATALOG)}
							className={classNames({
								[styles.active]: catalogCreationMode === ADD_CHAT_TO_OLD_CATALOG
							})}
						>
							Old
						</span>
						<span
							onClick={() =>
								changeTypeOfChatAdding(CREATE_NEW_CATALOG_AND_ADD_CHAT)}
							className={classNames({
								[styles.active]: catalogCreationMode === CREATE_NEW_CATALOG_AND_ADD_CHAT
							})}
						>
							New
						</span>
					</div>
					{catalogCreationMode === CREATE_NEW_CATALOG_AND_ADD_CHAT
						? <Components.CreateCatalog />
						: <Components.AddToCatalog />
					}
				</div>
			)}
		</>
	);
};
