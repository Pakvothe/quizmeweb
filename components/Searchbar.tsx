import React from 'react';
import StyledSearchbar from '../styles/searchBarStyled';
import strings from '../pages/strings';
import { useSelector } from 'react-redux';
import { IState } from '../redux/slices/users';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = ({ }) => {
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	
	return <StyledSearchbar type='text' placeholder={s.search} />;
};

export default Searchbar;
