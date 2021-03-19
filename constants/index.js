//

export const backend = 'https://ecommbackend.herokuapp.com/api';
export const dev = 'http://localhost:5000/api';

const server = backend;

export const api = {
	products: `${server}/products`,
	login: `${server}/login`,
	register: `${server}/register`,
	order: `${server}/order`,
	userorder: `${server}/order/userorder`,
	profile: `${server}/profile`,
	getAllUsers: `${server}/profile/getallusers`,
	createProduct: `${server}/products/createproduct`,
	getAllOrders: `${server}/order/getallorders`,
	payment: `${server}/payment`,
	config: {
		headers: {
			'Content-Type': 'application/json',
		},
	},
};
