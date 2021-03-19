import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../constants';
import Router from 'next/router';

function loginFunction(email, password, redirect) {
	axios
		.post(api.login, { email, password }, api.config)
		.then(res => {
			localStorage.setItem('token', JSON.stringify(res.data));
			if (redirect == 'home') {
				Router.replace('/');
			} else if (redirect == 'checkout') {
				Router.replace('/checkout');
			}
		})
		.catch(function (e) {
			return { error: true };
		});
}

export default loginFunction;
