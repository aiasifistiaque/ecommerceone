import React, { useState, useEffect } from 'react';
import useSignUp from '../../hooks/useSignUp';
import { useSelector, useDispatch } from 'react-redux';
import signupAction from '../../store/actions/userActions/signupAction';

const RegisterForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');
	//const [submit, setSubmit] = useState(false);

	//const { loading } = useSignUp(name, email, password, submit);
	const signupSelector = useSelector(state => state.signup);
	const dispatch = useDispatch();

	const signupPressed = () => {
		setValidationError(false);

		if (name.length < 4 || email.length < 3 || password.length < 4) {
			setValidationError(true);
			setValidationErrorText('there was an error');
		} else {
			dispatch(signupAction(name, email, password));
		}
	};

	return (
		<div className='login-form'>
			<h2>Sign Up</h2>
			<input
				type='text'
				placeholder='name'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
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

			{signupSelector.loading ? (
				<div className='login-form-submit'>
					<p>Loading...</p>
				</div>
			) : (
				<div className='login-form-submit' onClick={signupPressed}>
					<p>Sign Up</p>
				</div>
			)}
			{validationError && (
				<p style={{ color: 'tomato' }}>{validationErrorText}</p>
			)}
			<p>{signupSelector.error}</p>
		</div>
	);
};

export default RegisterForm;
