import React from 'react';
import Page from '../components/Page';
import useGetProfile from '../hooks/useGetProfile';
import PageLoading from '../components/PageLoading';
import Link from 'next/link';

const admin = () => {
	const { user, loading } = useGetProfile();
	if (loading) return <PageLoading />;
	return (
		<Page>
			{user.role != 'admin' ? (
				<div className='loading'>
					<h2>Not Authorized to view this page</h2>
				</div>
			) : (
				<div className='loading' style={{ flexDirection: 'column' }}>
					<Link href='/adminpanel/users'>
						<div className='login-form-submit'>
							<p>View users</p>
						</div>
					</Link>

					<Link href='/adminpanel/products'>
						<div className='login-form-submit'>
							<p>View Products</p>
						</div>
					</Link>

					<Link href='/adminpanel/orders'>
						<div className='login-form-submit'>
							<p>View Orders</p>
						</div>
					</Link>
				</div>
			)}
		</Page>
	);
};

export default admin;
