import React from 'react';
import Head from 'next/head';

export default function AppHead({ title, icon }) {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
}
