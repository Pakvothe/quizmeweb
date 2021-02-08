import React, { useRef, useState } from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser } from '../redux/slices/users';
import strings from '@constants/strings';

/* --- Types --- */
import { IUserFull } from '../types/users';
import { IState } from '../types/slices';
import DialogOverlay from './DialogOverlay';
import { useToast } from '@chakra-ui/toast';

interface UserCardProps {
	user: IUserFull;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef(null);
	const toast = useToast();
	const action = () => {
		toast({
			title: `${s.userHas} ${user.isActive ? s.blocked : s.unblocked}`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		dispatch(activateUser({ userId: user._id, isActive: !user.isActive }));
	};

	return (
		<>
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
							setIsOpen(true);
						}}
					>
						{user.isActive ? s.BlockUserBtn : s.ActivateUserBtn}
					</button>
				</div>
			</StyledQuizCard>
			<DialogOverlay
				onClose={onClose}
				dispatch={action}
				isOpen={isOpen}
				cancelRef={cancelRef}
				confirmText={user.isActive ? s.BlockUserBtn : s.ActivateUserBtn}
				color={user.isActive ? 'red' : 'green'}
			/>
		</>
	);
};

export default UserCard;
