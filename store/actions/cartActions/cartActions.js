const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS';
const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD';

export const addToCart = (product, qty = 1) => async (dispatch, getState) => {
	//const { data } = await axios.get(`/api/products/${id}`);
	const data = product;

	dispatch({
		type: 'CART_ADD_ITEM',
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const emptyCart = id => (dispatch, getState) => {
	dispatch({
		type: 'CART_CLEAR_ITEMS',
		payload: id,
	});

	localStorage.setItem('cart', JSON.stringify([]));
};

export const saveShippingAddress = data => dispatch => {
	dispatch({
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = data => dispatch => {
	dispatch({
		type: CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});

	localStorage.setItem('paymentMethod', JSON.stringify(data));
};
