import React, { useEffect } from 'react';
import useGetAllProducts from '../../hooks/useGetAllProducts';
import HomeProductCard from './HomeProductCard';
import Loading from '../Loading';
import { useSelector, useDispatch } from 'react-redux';
import getAllProducts from '../../store/actions/productActions/getAllProducts';

export default function ProductComponent() {
	const dispatch = useDispatch();
	const getProducts = useSelector(state => state.getAllProducts);
	//const { products, loading, error } = useGetAllProducts();
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	if (loading) return <Loading />;
	else
		return (
			<div className='home-products-container'>
				{products.map((item, i) => (
					<HomeProductCard product={item} key={i} />
				))}
			</div>
		);
}
