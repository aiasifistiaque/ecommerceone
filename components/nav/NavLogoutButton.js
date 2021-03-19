import React from 'react';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';

const NavLogoutButton = () => {
	const logout = () => {
		localStorage.removeItem('token');
	};
	const dispatch = useDispatch();

	return (
		<div className='nav-item' onClick={() => dispatch(logoutAction())}>
			<p>Logout</p>
		</div>
	);
};

export default NavLogoutButton;
