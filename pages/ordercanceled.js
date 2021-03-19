import React, { useEffect } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const ordercanceled = () => {
	return (
		<Page>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<h2>there was an error while processing the order</h2>
				<Link href='/checkout'>
					<div className='login-form-submit'>
						<p>go back</p>
					</div>
				</Link>
			</div>
		</Page>
	);
};

export default ordercanceled;
