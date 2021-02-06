import React from 'react';
import StyledQuizCard from '../styles/quizCardStyled';
import { destroyCategory, ICategory } from '../redux/slices/categories';
import { useDispatch } from 'react-redux';

interface CategoryCardProps {
	category: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
	const dispatch = useDispatch();
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
					Eliminar
				</button>
			</div>
		</StyledQuizCard>
	);
};

export default CategoryCard;
