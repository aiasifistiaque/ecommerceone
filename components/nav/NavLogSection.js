import React from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import NavItem from './NavItem';
import NavLogoutButton from './NavLogoutButton';

const NavLogSection = () => {
	const { loading, isLoggedIn } = useIsLoggedIn();
	if (loading) return null;
	else if (isLoggedIn)
		return (
			<>
				<NavItem href='/profile'>Profile</NavItem>
				<NavLogoutButton />
			</>
		);
	else
		return (
			<>
				<NavItem href='/login'>Login</NavItem>
				<NavItem href='/register'>Register</NavItem>
			</>
		);
};

export default NavLogSection;
