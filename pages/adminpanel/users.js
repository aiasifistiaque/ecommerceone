import React from 'react';
import useGetAllUsers from '../../hooks/useGetAllUsers';
import PageLoading from '../../components/PageLoading';
import Page from '../../components/Page';

const users = () => {
	const { users, loading } = useGetAllUsers();
	const userHeading = { _id: 'ID', name: 'Name', email: 'Email', role: 'Role' };

	if (loading) return <PageLoading />;

	return (
		<Page>
			<div style={{ padding: '5%' }}>
				<SingleUserHeading user={userHeading} />
				{users.map((user, i) => (
					<SingleUser user={user} key={i} />
				))}
			</div>
		</Page>
	);
};

const SingleUser = ({ user }) => {
	return (
		<div className='single-user'>
			<div>
				<p>{user._id}</p>
			</div>
			<div>
				<p>{user.name}</p>
			</div>
			<div>
				<p>{user.email}</p>
			</div>
			<div>
				<p>{user.role}</p>
			</div>
		</div>
	);
};

const SingleUserHeading = ({ user }) => {
	return (
		<div className='single-user'>
			<div>
				<h4>{user._id}</h4>
			</div>
			<div>
				<h4>{user.name}</h4>
			</div>
			<div>
				<h4>{user.email}</h4>
			</div>
			<div>
				<h4>{user.role}</h4>
			</div>
		</div>
	);
};

export default users;
