import React, { useState, useEffect } from 'react';
import useCreateProduct from '../../hooks/useCreateProduct';

const CreateProductForm = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState();
	const [image, setImage] = useState('');
	const [brand, setBrand] = useState('');
	const [countInStock, setCountInStock] = useState();
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [submit, setSubmit] = useState(false);

	const { loading } = useCreateProduct(
		name,
		price,
		image,
		brand,
		countInStock,
		category,
		description,
		submit
	);

	useEffect(() => {
		if (!loading) setSubmit(false);
	}, [loading]);

	return (
		<div className='login-form'>
			<h3>Create a product</h3>
			<input
				type='text'
				placeholder='name'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				type='number'
				placeholder='price'
				value={price}
				onChange={e => setPrice(e.target.value)}
			/>
			<input
				type='text'
				placeholder='image'
				value={image}
				onChange={e => setImage(e.target.value)}
			/>

			<input
				type='text'
				placeholder='brand'
				value={brand}
				onChange={e => setBrand(e.target.value)}
			/>

			<input
				type='number'
				placeholder='count in stock'
				value={countInStock}
				onChange={e => setCountInStock(e.target.value)}
			/>

			<input
				type='text'
				placeholder='category'
				value={category}
				onChange={e => setCategory(e.target.value)}
			/>

			<input
				type='text'
				placeholder='description'
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>

			{loading ? (
				<div className='login-form-submit'>
					<p>Loading...</p>
				</div>
			) : (
				<div
					className='login-form-submit'
					onClick={() => {
						setSubmit(true);
					}}>
					<p>Create Product</p>
				</div>
			)}
		</div>
	);
};

export default CreateProductForm;
