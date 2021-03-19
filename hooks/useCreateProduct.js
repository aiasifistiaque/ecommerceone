import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';
import Router from 'next/router';

function useCreateProducrt(
	name,
	price,
	image,
	brand,
	countInStock,
	category,
	description,
	submit
) {
	const [loading, setLoading] = useState(true);

	const newProduct = {
		name,
		price: parseInt(price),
		image,
		brand,
		countInStock: parseInt(countInStock),
		category,
		description,
		numReviews: 0,
	};

	console.log(newProduct);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('token'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		setLoading(true);
		if (submit == true) {
			axios
				.post(api.createProduct, newProduct, config)
				.then(res => {
					setLoading(false);
					console.log('siccess');
					Router.replace('/adminpanel/products');
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				});
		} else {
			setLoading(false);
		}
	}, [submit]);

	return { loading };
}

export default useCreateProducrt;
