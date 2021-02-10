import React, { useRef, useState } from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { destroyCategory } from '../redux/slices/categories';
import { useDispatch, useSelector } from 'react-redux';
import strings from '@constants/strings';
import Link from 'next/link';

/* --- Types --- */
import { CategoryCardProps } from '../types/categories';
import { IState } from '../types/slices';
import { useRouter } from 'next/router';
import DialogOverlay from './DialogOverlay';
import { useToast } from '@chakra-ui/toast';

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef(null);
	const toast = useToast();
	const action = () => {
		toast({
			title: s.categoryDeleted,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
		dispatch(destroyCategory(category._id as string));
	};

	return (
		<>
			<StyledQuizCard>
				<div className='card__info'>
					<Link href={`/quizzes/?category=${category._id}`}>
						<h1 className='info__title'>{category.description_es}</h1>
					</Link>
					<Link href={`/quizzes/?category=${category._id}`}>
						<h1 className='info__title'>{category.description_en}</h1>
					</Link>
					<button
						className='card__button error'
						onClick={() => setIsOpen(true)}
					>
						{s.DeleteBtn}
					</button>
					<button
						className='card__button warning'
						onClick={() =>
							router.push({
								pathname: `/categories/${category._id}`,
								query: {
									description_en: category.description_en,
									description_es: category.description_es,
								},
							})
						}
						style={{ marginTop: '1em' }}
					>
						{s.editBtn}
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

export default CategoryCard;
