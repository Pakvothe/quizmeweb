import React, { useState, useEffect } from 'react';
import StyledSearchbar from '../styles/searchBarStyled';
import router from 'next/router';
import { getUsersByInput } from '../redux/slices/users';
import { useDispatch } from 'react-redux';
import { getQuizzesBySearchInput } from '../redux/slices/quizzes';
import { getCategoriesByInput } from '../redux/slices/categories';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = ({}) => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (router.pathname.includes('quizzes')) {
			return dispatch(
				getQuizzesBySearchInput({ input, categoryFilter: '', page: 1 })
			);
		}
		if (router.pathname.includes('users')) {
			return dispatch(getUsersByInput(input));
		}
		if (router.pathname.includes('categories')) {
			return dispatch(getCategoriesByInput(input));
		}
	};

	useEffect(() => {}, []);

	return (
		<>
			<StyledSearchbar
				type='text'
				placeholder='Buscar...'
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<button onClick={handleSubmit}>SEARCH</button>
		</>
	);
};

export default Searchbar;
