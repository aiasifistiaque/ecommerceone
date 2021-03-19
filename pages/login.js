import React, { useEffect } from 'react';
import Page from '../components/Page';
import LoginForm from '../components/login/LoginForm';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Router from 'next/router';

const login = () => {
	const { isLoggedIn } = useIsLoggedIn();

	useEffect(() => {
		console.log('i am running', isLoggedIn);
		if (isLoggedIn) {
			Router.replace('/');
		}
	}, [isLoggedIn]);

	return (
		<Page title='login'>
			<LoginForm redirect='/' />
		</Page>
	);
};

export default login;
