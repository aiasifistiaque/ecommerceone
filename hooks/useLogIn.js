import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions';
import Router from 'next/router';

function useLogIn(email, password, submit, redirect) {
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);
		if (submit == true) {
			axios
				.post(api.login, { email, password }, api.config)
				.then(res => {
					console.log(res);
					setLoading(false);
					setToken(res.data);
					dispatch(loginAction(res.data));
					localStorage.setItem('token', JSON.stringify(res.data));
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				})
				.then(() => {
					if (redirect == 'home') {
						Router.replace('/');
					} else if (redirect == 'checkout') {
						Router.replace('/checkout');
					}
				});
		} else {
			setLoading(false);
		}
	}, [submit]);

	return { loading, token };
}

export default useLogIn;
