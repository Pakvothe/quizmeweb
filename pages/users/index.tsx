import Searchbar from '@components/Searchbar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import { getUsers } from '../../redux/slices/users';
import { IState } from '../../types/slices';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { users } = useSelector((state: IState) => state.users);
	useEffect(() => {
		dispatch(getUsers());
	}, []);
	return (
		<>
			<main className='container'>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Searchbar />
				</div>
				<CardsContainer users={users} />
			</main>
		</>
	);
};

export default Panel;
