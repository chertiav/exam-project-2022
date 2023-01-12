import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
//========================================
import * as CONSTANTS from '../../../../constants';

export const FieldFileInput = ({
	classes, setFile, contestType, setDeleteFile, ...rest }) => {

	const {
		contestStore: { contests },
		contestByIdStore: { contestData, isEditContest },
	} = useSelector(state => state);

	const [fileName, setFileName] = useState(
		contests[contestType]?.file?.name ||
		contestData?.originalFileName ||
		''
	);

	const MIMTYPE_REGEXP = /^application\/(msword|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.ms-powerpoint|vnd.openxmlformats-officedocument.presentationml.presentation|pdf)$/

	return (
		<Field name={rest.name}>
			{() => {

				const onChange = (e) => {
					const fileFielde = e.target.files[0];
					if (fileFielde && MIMTYPE_REGEXP.test(fileFielde.type)) {
						setFile(fileFielde);
						setFileName(fileFielde.name);
						if (isEditContest) {
							setDeleteFile(contestData?.fileName ? contestData.fileName : '')
						};
					}
				};

				const deleteFile = () => {
					setFileName('');
					setFile('');
					if (isEditContest) {
						setDeleteFile(contestData?.fileName ? contestData.fileName : '')
					};
				}

				return (
					<>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={{ xs: 1, sm: 2 }}
							mb={{ xs: 1 }}
						>
							<div className={classes.fileUploadContainer}>
								<label htmlFor="fileInput" className={classes.labelClass}>
									Choose file
								</label>
								<span id="fileNameContainer" className={classes.fileNameClass}>
									{fileName}
								</span>
								<input
									className={classes.fileInput}
									id="fileInput"
									type="file"
									accept={CONSTANTS.CREATION_CONTEST.ACCEPT_FORMAT_FILE.join(',')}
									onChange={onChange}
								/>
							</div>
							<Stack justifyContent={'center'}>
								<Button size='medium'
									color='inherit'
									variant='contained'
									type='button'
									onClick={deleteFile}
								>
									Delete file
								</Button>
							</Stack>
						</Stack>
						<span >* Support only files <br />
							{`( *${CONSTANTS.CREATION_CONTEST.TEXT_FORMAT_FILE.join(', *')} )`}
						</span>
					</>
				);
			}
			}
		</Field>
	);
};
