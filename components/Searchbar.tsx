import React, { useState } from 'react';
import { StyledSearchbar, StyledBarButton } from '../styles/searchBarStyled';
import router from 'next/router';
import { getUsersByInput } from '../redux/slices/users';
import { useDispatch } from 'react-redux';
import { getQuizzesBySearchInput } from '../redux/slices/quizzes';
import { getCategoriesByInput } from '../redux/slices/categories';
import { saveInput } from '../redux/slices/global';
import strings from '@constants/strings';
import { useSelector } from 'react-redux';

/* --- Types --- */
import { IState } from '../types/slices';

interface SearchbarProps {
	width?: string;
	categoryFilter?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ width, categoryFilter }) => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		dispatch(saveInput(input));
		if (router.pathname.includes('quizzes')) {
			return dispatch(
				getQuizzesBySearchInput({
					input,
					categoryFilter: categoryFilter || '',
					page: 1,
				})
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
		<form onSubmit={handleSubmit} style={{ width: '60%' }}>
			<StyledSearchbar
				width={width}
				type='text'
				value={input}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value);
				}}
			/>
			<StyledBarButton type='submit'>{s.searchBtn}</StyledBarButton>
		</form>
	);
};

export default Searchbar;
