import React, { useEffect, useRef, useState } from 'react';
import { IValidation } from '../types/users';
import ValidationCardStyled from '@styles/validationStyled';
import { IState } from '../types/slices';

import {
	validateUser,
	getValidations,
	deleteValidation,
} from '@redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';
import strings from '@constants/strings';
import DialogOverlay from './DialogOverlay';
import { useToast } from '@chakra-ui/toast';

interface ValidationCardProps {
	validation: IValidation;
}

const ValidationCard: React.FC<ValidationCardProps> = ({ validation }) => {
	const v = validation.userId;
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	const [option, setOption] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef(null);
	const toast = useToast();
	const notValidate = async () => {
		await dispatch(deleteValidation(validation._id));
		toast({
			title: s.validationDeclined,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		await dispatch(getValidations());
	};

	const validate = async () => {
		await dispatch(
			validateUser({
				userId: v._id,
				validationId: validation._id,
			})
		);
		toast({
			title: s.validationAccepted,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		await dispatch(getValidations());
	};

	return (
		<>
			<ValidationCardStyled>
				<h1 className='validation__email'>{v.email}</h1>
				<p className='validation__fullName'>
					{v.firstName} {v.lastName}
				</p>
				<div className='validation__desc'>
					<h2>{s.validationReason}</h2>
					<p>{validation.description}</p>
				</div>
				<div className='validation__buttons'>
					<button
						className='validation__button success'
						onClick={() => {
							setOption('validate');
							setIsOpen(true);
						}}
					>
						{s.validationAccept}
					</button>
					<button
						className='validation__button error'
						onClick={() => {
							setOption('notValidate');
							setIsOpen(true);
						}}
					>
						{s.validationReject}
					</button>
				</div>
			</ValidationCardStyled>
			<DialogOverlay
				onClose={onClose}
				dispatch={option === 'validate' ? validate : notValidate}
				isOpen={isOpen}
				cancelRef={cancelRef}
				confirmText={
					option === 'validate' ? s.validationAccept : s.validationReject
				}
				color={option === 'validate' ? 'green' : 'red'}
			/>
		</>
	);
};

export default ValidationCard;
