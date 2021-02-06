import React from 'react';
import StyledSearchbar from '../styles/searchBarStyled';

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = ({}) => {
	return <StyledSearchbar type='text' placeholder='Buscar...' />;
};

export default Searchbar;
