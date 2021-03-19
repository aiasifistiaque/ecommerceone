import React from 'react';
import { removeFromCart } from '../../store/actions/cartActions/cartActions';
import { useDispatch } from 'react-redux';

const DeleteFromCart = ({ product, index }) => {
	const dispatch = useDispatch();
	//console.log(product);

	const deleteFromCart = () => {
		let storage = [];
		storage = JSON.parse(localStorage.getItem('cart'));
		storage.splice(index, 1);
		localStorage.setItem('cart', JSON.stringify(storage));
	};

	return (
		<div
			className='delete-from-cart'
			onClick={() => dispatch(removeFromCart(product.product))}>
			<p>Delete</p>
		</div>
	);
};

export default DeleteFromCart;
