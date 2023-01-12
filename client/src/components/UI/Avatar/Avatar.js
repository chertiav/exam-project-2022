import React from 'react'
//======================================
import * as utils from '../../../utils';

export const Avatar = ({ avatar, alt, ...rest }) => {

	return (
		<img src={utils.function.getAvar(avatar)} {...rest} alt={alt} />
	)
}
