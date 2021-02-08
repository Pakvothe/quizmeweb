import React from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { destroyCategory } from '../redux/slices/categories';
import { useDispatch, useSelector } from 'react-redux';
import strings from '@constants/strings';

/* --- Types --- */
import { CategoryCardProps } from '../types/categories';
import { IState } from '../types/slices';
import { useRouter } from 'next/router';

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	return (
		<StyledQuizCard>
			<div className='card__info'>
				<h1 className='info__title'>{category.description_es}</h1>
				<h1 className='info__title'>{category.description_en}</h1>
				<button
					className='card__button error'
					onClick={() =>
						dispatch(destroyCategory(category._id as string))
					}
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
	);
};

export default CategoryCard;
