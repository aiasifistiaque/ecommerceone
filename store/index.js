import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const ISSERVER = typeof window === 'undefined';

const cartItemsFromStorage =
	!ISSERVER && localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

const tokenFromStorage =
	!ISSERVER && localStorage.getItem('token')
		? JSON.parse(localStorage.getItem('token'))
		: null;

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	token: tokenFromStorage,
};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
