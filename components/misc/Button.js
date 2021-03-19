import React from 'react';

const Button = ({ onClick, title }) => {
	return (
		<div className='login-form-submit' onClick={onClick}>
			<p>{title}</p>
		</div>
	);
};

export default Button;
