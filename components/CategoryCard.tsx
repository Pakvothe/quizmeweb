import React from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { destroyCategory } from '../redux/slices/categories';
import { useDispatch, useSelector } from 'react-redux';
import strings from '../pages/strings';

/* --- Types --- */
import { CategoryCardProps } from '../types/categories';
import { IState } from '../types/slices';

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	return (
		<StyledQuizCard>
			<div className='card__info'>
				<h1 className='info__title'>{category.description_en}</h1>
				<h1 className='info__title'>{category.description_es}</h1>
				<button
					className='card__button'
					onClick={() =>
						dispatch(destroyCategory(category._id as string))
					}
				>
					{s.DeleteBtn}
				</button>
			</div>
		</StyledQuizCard>
	);
};

export default CategoryCard;
