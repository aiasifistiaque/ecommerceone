import React from 'react';
import addItemToCart from '../../hooks/functions/addItemToCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions/cartActions';

const AddToCart = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<div
			className='add-to-cart'
			onClick={() => dispatch(addToCart(product, 1))}>
			<p>ADD TO CART</p>
		</div>
	);
};

export default AddToCart;
