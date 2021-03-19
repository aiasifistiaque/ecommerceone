import React, { useEffect, useState } from 'react';

function useCartLength() {
	const [cartLength, setCartLength] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('cart')).length;
		setCartLength(items);
		setLoading(false);
	});

	return { cartLength, loading };
}

export default useCartLength;
