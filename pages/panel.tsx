import React from 'react';
import { useSelector } from 'react-redux';
interface panelProps {
	name: string;
}

const Panel: React.FC<panelProps> = ({ name }) => {
	const { user } = useSelector((state) => state.user);
	return <h1>{user.firstName}</h1>;
};

export default Panel;
