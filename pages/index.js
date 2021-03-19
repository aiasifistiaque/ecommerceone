import Head from 'next/head';

import NavBar from '../components/nav/NavBar';
import ProductComponent from '../components/products/ProductComponent';

export default function Home() {
	return (
		<div>
			<Head>
				<title>AI SHOP</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<NavBar />
			<div>
				<ProductComponent />
			</div>
		</div>
	);
}
