//
import axios from 'axios';
import { api } from '../constants';

const getAllProducts = async () => {
	const products = await axios.get(api.products);
};

export default getAllProducts;
