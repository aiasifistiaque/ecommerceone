import React from 'react';

const ShippingInput = ({ caption, title, value, onChange }) => {
	return (
		<div className='shipping-input'>
			<div>
				<p>{caption}</p>
			</div>

			<input
				type='text'
				placeholder={title}
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	);
};

export default ShippingInput;
