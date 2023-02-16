import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBlock = ({ inputText, classes }) => {
	return (
		<div className={classes.search} >
			<input className={classes.input} type="text" placeholder={inputText} />
			<button className={classes.buttonSearch}>
				<SearchIcon className={classes.searchIcon} />
			</button>
		</div>
	)
}
