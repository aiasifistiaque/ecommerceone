import React from 'react';
import AppHead from '../components/AppHead';
import NavBar from '../components/nav/NavBar';
import Checout from '../components/cart/Checout';
import CartItem from '../components/cart/CartItem';
import { useSelector } from 'react-redux';

function cart() {
	const { cartItems } = useSelector(state => state.cart);

	return (
		<div className='page'>
			<AppHead title='cart' />
			<NavBar />

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '5%',
					flex: 1,
					flexWrap: 'wrap',
				}}>
				<div className='shopping-cart'>
					<h3>Shopping Cart</h3>
					{cartItems.length == 0 ? (
						<div>
							<h3>Cart is empty</h3>
						</div>
					) : (
						cartItems.map((item, i) => (
							<CartItem product={item} key={i} index={i} />
						))
					)}
				</div>
				<Checout />
			</div>
		</div>
	);
}

export default cart;
