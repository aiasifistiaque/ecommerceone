//

const logoutAction = () => dispatch => {
	localStorage.removeItem('token');
	localStorage.setItem('cart', JSON.stringify([]));

	dispatch({ type: 'USER_LOGOUT' });

	document.location.href = '/login';
};

export default logoutAction;
