import React from 'react';
import SmallText from '../misc/SmallText';
import AddToCart from './AddToCart';
import OutOfStock from './OutOfStock';

const ProductPageProductDetails = ({ product }) => {
	return (
		<div className='product-page-product-details'>
			<h3>{product.name}</h3>
			<p>Tk. {product.price}</p>
			<SmallText>({product._id})</SmallText>
			<p>{product.description}</p>

			{product.countInStock > 0 ? (
				<AddToCart product={product} />
			) : (
				<OutOfStock />
			)}
		</div>
	);
};

export default ProductPageProductDetails;
