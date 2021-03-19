import React from 'react';

const PaymentInput = ({ onChange }) => {
	return (
		<div onChange={e => onChange(e.target.value)} style={{ margin: 20 }}>
			<h3>Payment</h3>
			<div className='payment-input'>
				<input type='radio' name='gender' value='cash' checked />
				<label>Cash on delivery</label>
			</div>
			<div className='payment-input'>
				<input type='radio' name='gender' value='card' />
				<label>Card</label>
			</div>
		</div>
	);
};

export default PaymentInput;
