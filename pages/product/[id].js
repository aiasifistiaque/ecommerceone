import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
//import useGetSingleProduct from '../../hooks/useGetSingleProduct';
import PageLoading from '../../components/PageLoading';
import ProductPageProductDetails from '../../components/products/ProductPageProductDetails';
import Page from '../../components/Page';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';

export default function Product() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const { product, loading } = useSelector(state => state.getAProduct);
	//const { product, loading } = useGetSingleProduct(id);
	//const { product, loading } = getProduct;

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	if (loading) return <PageLoading />;
	return (
		<Page title='product'>
			<div className='product-page'>
				<div style={{ flex: 6 }}>
					<img src={product.image} width={'100%'} height={'auto'} />
				</div>
				<div style={{ flex: 4 }}>
					<ProductPageProductDetails product={product} />
				</div>
			</div>
		</Page>
	);
}
