import React from 'react';
import PageLoading from '../../components/PageLoading';
import Page from '../../components/Page';
import useGetAllProducts from '../../hooks/useGetAllProducts';
import Button from '../../components/misc/Button';
import Link from 'next/link';

const products = () => {
	const { products, loading } = useGetAllProducts();
	const productHeading = {
		_id: 'ID',
		name: 'Name',
		price: 'Price',
		category: 'Category',
		brand: 'Brand',
	};

	if (loading) return <PageLoading />;

	return (
		<Page>
			<div style={{ padding: '5%' }}>
				<div style={{ margin: '40px 0' }}>
					<h3>Products</h3>
					<Link href='/adminpanel/createproduct'>
						<Button title='Create Product' />
					</Link>
				</div>

				<SingleProductHeading product={productHeading} />
				{products.map((product, i) => (
					<SingleProduct product={product} key={i} />
				))}
			</div>
		</Page>
	);
};

const SingleProduct = ({ product }) => {
	return (
		<div className='single-user'>
			<div>
				<p>{product._id}</p>
			</div>
			<div>
				<p>{product.name}</p>
			</div>
			<div>
				<p>{product.price}</p>
			</div>
			<div>
				<p>{product.category}</p>
			</div>
			<div>
				<p>{product.brand}</p>
			</div>
		</div>
	);
};

const SingleProductHeading = ({ product }) => {
	return (
		<div className='single-user'>
			<div>
				<h4>{product._id}</h4>
			</div>
			<div>
				<h4>{product.name}</h4>
			</div>
			<div>
				<h4>{product.price}</h4>
			</div>
			<div>
				<h4>{product.category}</h4>
			</div>
			<div>
				<h4>{product.brand}</h4>
			</div>
		</div>
	);
};

export default products;
