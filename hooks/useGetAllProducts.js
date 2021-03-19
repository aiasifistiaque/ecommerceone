import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetAllProducts() {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(api.products)
			.then(function (response) {
				setProducts(response.data);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, []);

	return { products, loading };
}
