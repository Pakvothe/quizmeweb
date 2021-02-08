import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValidations } from '@redux/slices/users';
import { IState } from '../../types/slices';
import ValidationCard from '@components/ValidationCard';
import strings from '@constants/strings';
interface indexProps {}

const Validations: React.FC<indexProps> = ({}) => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	const { validations, loading } = useSelector(
		(state: IState) => state.users
	);

	useEffect(() => {
		dispatch(getValidations());
	}, []);

	if (loading)
		return (
			<main className='container'>
				<h1>{s.loading}</h1>
			</main>
		);

	return (
		<main className='container'>
			<h1>{s.validationsTitle}</h1>
			{validations.length ? (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						marginTop: '1em',
					}}
				>
					{validations.map((validation) => (
						<ValidationCard
							key={validation._id}
							validation={validation}
						/>
					))}
				</div>
			) : (
				<h2>{s.validationsNoValidations}</h2>
			)}
		</main>
	);
};

export default Validations;
