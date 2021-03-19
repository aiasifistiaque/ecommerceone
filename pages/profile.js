import React from 'react';
import Page from '../components/Page';
import MyOrders from '../components/profile/MyOrders';
import useGetProfile from '../hooks/useGetProfile';
import Loading from '../components/Loading';
import Link from 'next/link';

const profile = () => {
	return (
		<Page>
			<MyProfile />
			<MyOrders />
		</Page>
	);
};

const MyProfile = () => {
	const { user, loading } = useGetProfile();
	if (loading) return <Loading />;
	return (
		<div className='my-profile'>
			<h3>profile</h3>
			<h5>{user.name}</h5>
			<p>{user.email}</p>
			{user.role == 'admin' && (
				<Link href='/admin'>
					<div className='login-form-submit'>
						<p>Go to admin panel</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default profile;
