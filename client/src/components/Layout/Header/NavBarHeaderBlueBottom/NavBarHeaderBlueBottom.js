import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp, BsChevronRight } from "react-icons/bs";
import { Stack } from '@mui/system';
//=====================================
import styles from './NavBarHeaderBlueBottom.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as Components from '../../../';


export const NavBarHeaderBlueBottom = ({ menuActive }) => {

	const menuGroup = CONSTANTS.HEADER_CONSTANTS.MENU_HEADER_BLUE_BOTTOM;

	const classesAuthBtn = {
		signInBtn: styles.signInBtn,
		signUpBtn: styles.signUpBtn,
	}

	const renderSubmenu = (subMenuItems) => {
		return (
			subMenuItems.map((item) =>
				<div key={item.title} className={styles.menuSubItem} >
					<Link to={item.link}>{item.title}</Link>
				</div>
			)
		)
	};

	const renderArrow = (checkLastItemGroup) => {
		return (
			<>
				<BsChevronDown width={10} height={10}
					className={checkLastItemGroup ? styles.iconDownLast : styles.iconDown}
				/>
				{checkLastItemGroup
					? <BsChevronRight width={10} height={10} className={styles.iconUpLast} />
					: <BsChevronUp width={10} height={10} className={styles.iconUp} />
				}
			</>
		)
	}

	const renderItemsMenu = (menuItems, checkLastItemGroup, checkLastItem) => {
		return (
			menuItems.length ?
				<div className={checkLastItem ? styles.menuListContainerLastItem : styles.menuListContainer} >
					{menuItems.map((item, index) =>
						<div key={item.title}
							className={
								!checkLastItemGroup || menuItems.length - 1 !== index
									? styles.menuItem
									: styles.menuItemSub
							}
						>
							<Link to={item.link}><span>{item.title}</span></Link>
							{checkLastItemGroup && menuItems.length - 1 === index ? renderArrow(checkLastItemGroup) : null}
							{item?.items?.length
								? (!checkLastItemGroup && menuItems.length - 1 !== index)
									? renderSubmenu(item.items)
									: renderItemsMenu(item.items, false, true)
								: null
							}
						</div>
					)}
				</div >
				: null
		)
	};

	const renderNavMenu = () => {
		return (
			menuGroup.map((menuGroupItem, index) =>
				<React.Fragment key={menuGroupItem.titleGroup}>
					<div className={styles.navItem}>
						<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
							<Link to={menuGroupItem.linkPage}><span>{menuGroupItem.titleGroup}</span></Link>
							{menuGroupItem.itemsGroup.length ? renderArrow() : null}
						</Stack>
						{menuGroup.length - 1 === index
							? renderItemsMenu(menuGroupItem.itemsGroup, true, false)
							: renderItemsMenu(menuGroupItem.itemsGroup, false, false)
						}
					</div>
					{menuGroup.length - 2 === index && <div className={styles.navItemSeparator}></div>}
				</React.Fragment>
			)
		)
	};

	return (
		<div className={menuActive ? styles.containerBurger : styles.container}>
			<div className={styles.navBox}>
				{renderNavMenu()}
			</div>
			<div container className={styles.navbarFixedBottom}>
				<Components.AuthButtons
					titleLogin={'Login'}
					titleSignUp={'Sign Up'}
					classes={classesAuthBtn}
				/>
			</div>
		</div >
	)
};
