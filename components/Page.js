import React from 'react';
import Head from 'next/head';
import NavBar from './nav/NavBar';

export default function Page({ children, title }) {
	return (
		<div className='page'>
			<Head>
				<title>{title || 'ecomm'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			{children}
		</div>
	);
}
