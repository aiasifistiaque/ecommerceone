import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';
import loginFunction from './functions/loginFunction';

function useSignUp(name, email, password, submit) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		if (submit == true) {
			axios
				.post(api.register, { name, email, password }, api.config)
				.then(res => {
					console.log(res);
					loginFunction(email, password, 'home');
					setLoading(false);
					//localStorage.setItem('token', JSON.stringify(res.data));
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				});
		} else {
			setLoading(false);
		}
	}, [submit]);

	return { loading };
}

export default useSignUp;
