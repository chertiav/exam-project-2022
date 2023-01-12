import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useField } from 'formik';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
//=================================================
import styles from './ImageUpload.module.sass';
import * as CONSTANTS from '../../../../constants';
import * as utils from '../../../../utils';

export const ImageUpload = ({ name, setFile, setIsSubmit, setFlagDeleteAvatar, fileCheck }) => {

	const { userStore: { data: { avatar } } } = useSelector(state => state)

	const [field] = useField(name);
	const filePicker = useRef();
	const [imageURL, setImageURL] = useState();
	const fileReader = new FileReader();
	const imageType = /image.*/;

	useEffect(() => {
		if (fileCheck === 'reset') setImageURL('');
	}, [fileCheck])

	fileReader.onload = () => {
		setImageURL(fileReader.result);
	};
	const actionsChangeImage = (file) => {
		if (file.type.match(imageType)) {
			name === 'offerData'
				? setIsSubmit(false)
				: setFlagDeleteAvatar(avatar !== 'anon.png' ? avatar : '');
			setFile(file);
			fileReader.readAsDataURL(file);
		}
	}
	field.onChange = (e) => {
		const file = e.target.files[0];
		actionsChangeImage(file);
	}
	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const file = e.dataTransfer.files[0];
		actionsChangeImage(file);
	};
	const deleteAvatar = () => {
		setImageURL(
			name === 'offerData'
				? CONSTANTS.APP_CONSTANTS.ANONYM_LOGO_PATH
				: CONSTANTS.APP_CONSTANTS.ANONYM_IMAGE_PATH
		);
		name === 'offerData'
			? setIsSubmit(true)
			: setFlagDeleteAvatar(avatar !== 'anon.png' ? avatar : '');
		setFile(null);
	}
	const onDragEmpty = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handlePick = () => {
		filePicker.current.click()
	}
	return (
		<div className={styles.imageUploadContainer}>
			<img
				src={
					name === 'offerData'
						? imageURL ? imageURL : CONSTANTS.APP_CONSTANTS.ANONYM_LOGO_PATH
						: imageURL ? imageURL : utils.function.getAvar(avatar)
				}
				id="imagePreview"
				className={styles.imgStyle}
				alt="user"
				onDrop={onDrop}
				onDragEnter={onDragEmpty}
				onDragOver={onDragEmpty}
			/>
			<div className={styles.uploadInputContainer}>
				<span>* Support only images <br />
					{`( *${CONSTANTS.USER_PROFILE.ACCEPT_IMAGE_FORMAT_FILE.join(', *')} )`}
				</span>
				<input
					{...field}
					id="fileInput"
					type="file"
					ref={filePicker}
					accept={CONSTANTS.USER_PROFILE.ACCEPT_IMAGE_FORMAT_FILE.join(',')}
				/>
				<Stack direction="row" spacing={2}>
					<Button type='button' onClick={handlePick}>Chose file</Button>
					<Button type='button' onClick={deleteAvatar}>Delete file</Button>
				</Stack>
			</div>
		</div>
	)
};
