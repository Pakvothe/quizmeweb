import React, { useRef, useState } from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import Link from 'next/link';
import strings from '@constants/strings';
import { useDispatch, useSelector } from 'react-redux';
import { destroyQuiz } from '../redux/slices/quizzes';

/* --- Types --- */
import { IState } from '../types/slices';
import { QuizCardProps } from '../types/quizzes';
import DialogOverlay from './DialogOverlay';
import { useToast } from '@chakra-ui/toast';

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef(null);
	const toast = useToast();
	const action = () => {
		toast({
			title: s.quizDeleted,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		dispatch(destroyQuiz(quiz._id));
	};

	return (
		<>
			<StyledQuizCard>
				<div className='card__img'>
					<img src={quiz.image} alt='Alt' />
				</div>
				<div className='card__info'>
					<Link href={`/quizzes/${quiz._id}`}>
						<h1 className='info__title'>{quiz.title}</h1>
					</Link>
					<p className='info__desc'>{quiz.description}</p>
					<button
						className='card__button error'
						onClick={() => {
							setIsOpen(true);
						}}
					>
						{s.DeleteBtn}
					</button>
				</div>
			</StyledQuizCard>
			<DialogOverlay
				onClose={onClose}
				dispatch={action}
				isOpen={isOpen}
				cancelRef={cancelRef}
				confirmText={s.DeleteBtn}
				color='red'
			/>
		</>
	);
};

export default QuizCard;
