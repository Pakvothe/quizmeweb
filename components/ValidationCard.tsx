import React from 'react';
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

interface ValidationCardProps {
	validation: IValidation;
}

const ValidationCard: React.FC<ValidationCardProps> = ({ validation }) => {
	const v = validation.userId;
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	return (
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
					onClick={async () => {
						await dispatch(
							validateUser({
								userId: v._id,
								validationId: validation._id,
							})
						);
						await dispatch(getValidations());
					}}
				>
					{s.validationAccept}
				</button>
				<button
					className='validation__button error'
					onClick={async () => {
						await dispatch(deleteValidation(validation._id));
						await dispatch(getValidations());
					}}
				>
					{s.validationReject}
				</button>
			</div>
		</ValidationCardStyled>
	);
};

export default ValidationCard;
