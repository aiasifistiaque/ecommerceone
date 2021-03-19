import React from 'react';
import PageLoading from '../../components/PageLoading';
import Page from '../../components/Page';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import Router from 'next/router';

const orders = () => {
	const { orders, loading } = useGetAllOrders();
	const itemHeading = {
		_id: 'ID',
		name: 'Name',
		price: 'Total Price',
		isPaid: 'Paid',
		isDelivered: 'Delivered',
	};

	if (loading) return <PageLoading />;

	return (
		<Page>
			<div style={{ padding: '5%' }}>
				<div style={{ margin: '40px 0' }}>
					<h3>Orders</h3>
				</div>

				<SingleOrderHeading item={itemHeading} />
				{orders.map((order, i) => (
					<SingleOrder item={order} key={i} />
				))}
			</div>
		</Page>
	);
};

const SingleOrder = ({ item }) => {
	return (
		<div className='single-user'>
			<div style={{ flex: 2 }}>
				<p>{item._id}</p>
			</div>
			<div>
				<p>{item.user.name}</p>
			</div>
			<div>
				<p>Tk. {item.totalPrice}</p>
			</div>
			<div>
				<p>{item.isDelivered ? 'yes' : 'no'}</p>
			</div>
			<div>
				<p>{item.isPaid ? 'yes' : 'no'}</p>
			</div>
			<div>
				<a
					style={{
						color: 'dodgerblue',
						textDecorationLine: 'underline',
						cursor: 'pointer',
					}}
					onClick={() => {
						Router.push(`/order/${item._id}`);
					}}>
					View details
				</a>
			</div>
		</div>
	);
};

const SingleOrderHeading = ({ item }) => {
	return (
		<div className='single-user'>
			<div style={{ flex: 2 }}>
				<h4>{item._id}</h4>
			</div>

			<div>
				<h4>{item.name}</h4>
			</div>

			<div>
				<h4>{item.price}</h4>
			</div>
			<div>
				<h4>{item.isDelivered}</h4>
			</div>
			<div>
				<h4>{item.isPaid}</h4>
			</div>
			<div>
				<h4>Details</h4>
			</div>
		</div>
	);
};

export default orders;
