import React from 'react';
import Link from 'next/link';
import useGetCart from '../../hooks/useGetCart';

function Checout() {
	const { totalPrice } = useGetCart();

	return (
		<div className='checkout-form'>
			<p>Total price:</p>
			<p> Tk.{totalPrice}</p>
			<Link href='/checkout'>
				<div className='checkout-button'>
					<p>Proceed to checkout</p>
				</div>
			</Link>
		</div>
	);
}

export default Checout;
