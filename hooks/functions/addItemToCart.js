//
const addItemToCart = product => {
	var storage = [];
	storage = JSON.parse(localStorage.getItem('cart'));
	if (storage == null) {
		storage = [];
	}
	storage.push({
		product: product._id,
		name: product.name,
		image: product.image,
		price: product.price,
		countInStock: product.countInStock,
	});

	localStorage.setItem('cart', JSON.stringify(storage));
};

export default addItemToCart;
