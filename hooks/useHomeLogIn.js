import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions';
import Router from 'next/router';

function useHomeLogIn(email, password, submit) {
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
					Router.replace('/');
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				});
		} else {
			setLoading(false);
		}
	}, [submit]);

	return { loading, token };
}

export default useHomeLogIn;
