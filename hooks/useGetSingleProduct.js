import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetSingleProduct(id) {
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios
			.get(`${api.products}/${id}`)
			.then(function (response) {
				setProduct(response.data);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, [id]);

	return { product, loading };
}
