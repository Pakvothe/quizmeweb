import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* --- ReduxActions --- */
import { createCategory, updateCategory } from '../../redux/slices/categories';

/* --- Types --- */
import { IState } from '../../types/slices';

/* --- Styles --- */
import { Form, Button } from '../../styles/styledGlobal';

/* --- Utils --- */
import strings from '@constants/strings';

const AddCategory: React.FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	const [input, setInput] = useState({
		description_es: router.query.description_es as string,
		description_en: router.query.description_en as string,
	});

	const handleSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();
		const { id: catId } = router.query;
		await dispatch(
			updateCategory({ category: input, catId: catId as string })
		);
		router.push('/categories');
	};

	return (
		<main className='container' style={{ height: '88vh' }}>
			<h1
				style={{
					textAlign: 'center',
					marginBottom: '1em',
					textTransform: 'uppercase',
				}}
			>
				{s.addCat}
			</h1>
			<div
				style={{
					display: 'flex',
					height: '90%',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Form onSubmit={handleSubmit}>
					<input
						name='description_es'
						type='text'
						placeholder='Descripción en español'
						onChange={(ev) =>
							setInput({
								...input,
								description_es: ev.target.value,
							})
						}
						value={input.description_es}
					/>
					<input
						name='description_en'
						type='text'
						placeholder='English description'
						onChange={(ev) =>
							setInput({
								...input,
								description_en: ev.target.value,
							})
						}
						value={input.description_en}
					/>
					<Button type='submit'>{s.editBtn}</Button>
				</Form>
			</div>
		</main>
	);
};

export default AddCategory;
