import React, { useState } from 'react';
import { StyledSearchbar, StyledBarButton } from '../styles/searchBarStyled';
import router from 'next/router';
import { getUsersByInput } from '../redux/slices/users';
import { useDispatch } from 'react-redux';
import { getQuizzesBySearchInput } from '../redux/slices/quizzes';
import { getCategoriesByInput } from '../redux/slices/categories';
import strings from '../pages/strings';
import { useSelector } from 'react-redux';

/* --- Types --- */
import { IState } from '../types/slices';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = ({}) => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
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
		} else return;
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledSearchbar
				type='text'
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<StyledBarButton type='submit'>{s.searchBtn}</StyledBarButton>
		</form>
	);
};

export default Searchbar;
