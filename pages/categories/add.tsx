import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../redux/slices/categories';
import { Form, Button } from '../../styles/styledGlobal';
import { IState } from '../../types/slices';
import strings from '@constants/strings';
import { useToast } from '@chakra-ui/toast';

const AddCategory: React.FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	const toast = useToast();

	const [input, setInput] = useState({
		description_es: '',
		description_en: '',
	});

	const handleSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();
		await dispatch(createCategory(input));
		toast({
			title: s.categoryCreated,
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'bottom-left',
		});
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
					<Button type='submit'>{s.addBtn}</Button>
				</Form>
			</div>
		</main>
	);
};

export default AddCategory;
