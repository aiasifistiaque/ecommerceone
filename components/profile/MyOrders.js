import React from 'react';
import useGetMyOrders from '../../hooks/useGetMyOrders';
import Loading from '../Loading';
import Router from 'next/router';

const MyOrders = () => {
	const { orders, loading } = useGetMyOrders();

	if (loading) return <Loading />;

	return (
		<div className='my-orders'>
			<h3>My orders</h3>
			<p>{orders.length}</p>
			{orders.length == 0 ? (
				<p>no current orders</p>
			) : (
				<table style={{ width: '100%' }}>
					<thead>
						<tr>
							<th>ID</th>
							{
								//<th>date</th>
							}

							<th>total</th>
							<th>paid</th>
							<th>delivered</th>
							<th>details</th>
						</tr>
					</thead>

					<tbody>
						{orders.map((order, i) => (
							<tr
								key={i}
								style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
								<td>{order._id}</td>
								{
									//<td>{order.createdAt}</td>
								}
								<td>{order.totalPrice}</td>
								<td>{order.isPaid ? 'yes' : 'no'}</td>
								<td>{order.isDelivered ? 'yes' : 'no'}</td>
								<td
									style={{ color: 'dodgerblue', cursor: 'pointer' }}
									onClick={() => Router.push(`/order/${order._id}`)}>
									Detail
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default MyOrders;
