import React, { useState, useEffect } from 'react';
import ShippingInput from './ShippingInput';
import PaymentInput from './PaymentInput';
import useAddNewOrder from '../../hooks/useAddNewOrder';
import Router from 'next/router';

const Shipping = () => {
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postcode, setPostcode] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('cash');
	const [submit, setSubmit] = useState(false);

	const { loading, success, error, errorMsg } = useAddNewOrder(
		submit,
		{ address: address, city: city, postalCode: postcode },
		paymentMethod
	);

	useEffect(() => {
		if (!loading) setSubmit(false);
		if (success) {
			localStorage.setItem('cart', JSON.stringify([]));
			Router.replace('/orderplaced');
		}
	}, [loading, success]);

	return (
		<div className='shipping'>
			<h3>Shipping</h3>

			<ShippingInput
				caption='Address'
				title='address'
				value={address}
				onChange={e => setAddress(e)}
			/>

			<ShippingInput
				caption='City'
				title='city'
				value={city}
				onChange={e => setCity(e)}
			/>

			<ShippingInput
				caption='Post Code'
				title='Post code'
				value={postcode}
				onChange={e => setPostcode(e)}
			/>

			<PaymentInput onChange={e => setPaymentMethod(e)} />

			{error && <p style={{ color: 'crimson' }}>{errorMsg}</p>}

			<div className='login-form-submit' onClick={() => setSubmit(true)}>
				{loading ? <p>loading...</p> : <p>Proceed to Order Confirmation</p>}
			</div>
		</div>
	);
};

export default Shipping;
