import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { getUsers, IState } from '../redux/slices/users';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { users } = useSelector((state: IState) => state.users);
	useEffect(() => {
		dispatch(getUsers());
	}, []);
	return (
		<>
			<main className='container'>
				<CardsContainer users={users} />
			</main>
		</>
	);
};

export default Panel;
