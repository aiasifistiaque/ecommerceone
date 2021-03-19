import React, { useEffect } from 'react';
import Page from '../components/Page';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Loading from '../components/Loading';
import LoginForm from '../components/login/LoginForm';
import Shipping from '../components/checkout/Shipping';

export default function checkout() {
	const { loading, isLoggedIn } = useIsLoggedIn();

	if (loading) return <Loading />;

	return (
		<Page title='checkout'>
			{isLoggedIn ? <Shipping /> : <LoginForm redirect='checkout' />}
		</Page>
	);
}
