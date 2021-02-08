import React from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser } from '../redux/slices/users';
import strings from '@constants/strings';

/* --- Types --- */
import { IUserFull } from '../types/users';
import { IState } from '../types/slices';

interface UserCardProps {
	user: IUserFull;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	return (
		<StyledQuizCard>
			<div className='card__info'>
				<h1 className='info__title'>{user.email}</h1>
				<p className='info__desc'>
					{user.firstName} {user.lastName}
				</p>
				<button
					className='card__button'
					style={{
						backgroundColor: user.isActive
							? 'var(--clr-error)'
							: 'var(--clr-primary)',
					}}
					onClick={() => {
						dispatch(
							activateUser({
								userId: user._id,
								isActive: !user.isActive,
							})
						);
					}}
				>
					{user.isActive ? s.BlockUserBtn : s.ActivateUserBtn}
				</button>
			</div>
		</StyledQuizCard>
	);
};

export default UserCard;
