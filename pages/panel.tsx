import React from 'react';
import { DefaultRootState, RootStateOrAny, useSelector } from 'react-redux';
import { IState } from '../redux/slices/user';
interface IPanelProps {
	name: string;
}

const Panel: React.FC<IPanelProps> = () => {
	const { user } = useSelector((state: IState) => state.user);
	return <h1>{user.firstName}</h1>;
};

export default Panel;
