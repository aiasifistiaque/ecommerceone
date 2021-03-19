import React from 'react';
import HomeProductCardTextContainer from './HomeProductCardTextContainer';
import Link from 'next/link';

const HomeProductCard = ({ product }) => {
	return (
		<Link href={`/product/${product._id}`}>
			<div className='home-product-card'>
				<img
					src={product.image}
					height={200}
					width={'100%'}
					className='product-card-image'
				/>
				<HomeProductCardTextContainer>
					<h4>{product.name}</h4>
					<p>Tk. {product.price}</p>
				</HomeProductCardTextContainer>
			</div>
		</Link>
	);
};

export default HomeProductCard;
