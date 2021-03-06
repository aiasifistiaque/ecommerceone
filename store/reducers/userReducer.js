//

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case 'USER_LOGIN_REQUEST':
			return { loading: true };
		case 'USER_LOGIN_SUCCESS':
			return { loading: false, token: action.payload };
		case 'USER_LOGIN_FAIL':
			return { loading: false, error: action.payload };
		case 'USER_LOGOUT':
			return {};
		default:
			return { loading: false };
	}
};

export const userSignupReducer = (state = {}, action) => {
	switch (action.type) {
		case 'USER_REGISTER_REQUEST':
			return { loading: true };
		case 'USER_REGISTER_SUCCESS':
			return { loading: false };
		case 'USER_REGISTER_FAIL':
			return { loading: false, error: action.payload };

		default:
			return { loading: false };
	}
};
