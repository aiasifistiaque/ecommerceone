import React, { useEffect, useState } from 'react';

function useCartTotalPrice() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('cart'));
		if (items.length == 0) {
			setTotalPrice(0);
			setLoading(false);
		} else {
			let price = 0;
			items.map(item => (price = price + item.price));
			setTotalPrice(price.toFixed(2));
			setLoading(false);
		}
	});

	return { totalPrice, loading };
}

export default useCartTotalPrice;
