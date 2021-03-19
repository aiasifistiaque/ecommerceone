import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userLoginAction from '../../store/actions/userActions/userLoginAction';

const LoginForm = ({ redirect }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const tokenSelector = useSelector(state => state.token);

	//const { loading, token } = useLogIn(email, password, submit, redirect);
	//const { loading, token, error } = tokenSelector;

	const loginButtonPressed = () => {
		setValidationError(false);
		if (email.length < 5) {
			setValidationError(true);
			setValidationErrorText('email is not valid');
		} else if (password.length < 1) {
			setValidationError(true);
			setValidationErrorText('password is required');
		} else {
			dispatch(userLoginAction(email, password, redirect));
			setLoading(tokenSelector.loading);
		}
	};

	return (
		<div className='login-form'>
			<h2>Log In</h2>
			<input
				type='text'
				placeholder='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>

			{validationError && (
				<p style={{ color: 'crimson' }}>{validationErrorText}</p>
			)}

			{tokenSelector.loading ? (
				<div className='login-form-submit'>
					<p>Loading...</p>
				</div>
			) : (
				<div className='login-form-submit' onClick={loginButtonPressed}>
					<p>Log In</p>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
