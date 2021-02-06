import React from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { destroyCategory, ICategory } from '../redux/slices/categories';
import { useDispatch } from 'react-redux';
import { activateUser, IUserFull } from '../redux/slices/users';

interface UserCardProps {
	user: IUserFull;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const dispatch = useDispatch();
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
					{user.isActive ? 'Bloquear Usuario' : 'Activar Usuario'}
				</button>
			</div>
		</StyledQuizCard>
	);
};

export default UserCard;
