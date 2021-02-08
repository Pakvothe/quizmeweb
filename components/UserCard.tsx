import React, { useRef, useState } from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser, getUsers, promoteUser } from '../redux/slices/users';
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
	const [option, setOption] = useState('');
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef(null);
	const toast = useToast();
	const activate = () => {
		toast({
			title: `${s.userHas} ${user.isActive ? s.blocked : s.unblocked}`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		dispatch(activateUser({ userId: user._id, isActive: !user.isActive }));
	};
	const promote = async () => {
		toast({
			title: `${s.userHas} ${
				user.role === 'ADMIN' ? s.demote : s.promote
			}`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		await dispatch(
			promoteUser({
				userId: user._id,
				role: user.role === 'ADMIN' ? 'USER' : 'ADMIN',
			})
		);
		dispatch(getUsers());
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
							setOption('activate');
							setIsOpen(true);
						}}
					>
						{user.isActive ? s.BlockUserBtn : s.ActivateUserBtn}
					</button>
					<button
						className='card__button'
						style={{
							marginTop: '1em',
							backgroundColor:
								user.role === 'ADMIN'
									? 'var(--clr-error)'
									: 'var(--clr-primary)',
						}}
						onClick={() => {
							setOption('promote');
							setIsOpen(true);
						}}
					>
						{user.role === 'ADMIN'
							? s.demoteUserBtn
							: s.promoteAdminBtn}
					</button>
				</div>
			</StyledQuizCard>
			<DialogOverlay
				onClose={onClose}
				dispatch={option === 'promote' ? promote : activate}
				isOpen={isOpen}
				cancelRef={cancelRef}
				confirmText={
					option === 'promote'
						? user.role === 'ADMIN'
							? s.demoteUserBtn
							: s.promoteAdminBtn
						: user.isActive
						? s.BlockUserBtn
						: s.ActivateUserBtn
				}
				color={
					option === 'promote'
						? user.role === 'ADMIN'
							? 'red'
							: 'green'
						: user.isActive
						? 'red'
						: 'green'
				}
			/>
		</>
	);
};

export default UserCard;
