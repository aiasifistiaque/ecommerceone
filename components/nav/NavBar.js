import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import NavItem from './NavItem';
import NavLogSection from './NavLogSection';
import Link from 'next/link';
import useGetCart from '../../hooks/useGetCart';
import { useSelector } from 'react-redux';

export default function NavBar() {
	//const { totalPrice, length } = useGetCart();
	const { cartItems } = useSelector(state => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let total = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
	}, [cartItems]);

	const length = cartItems.length;

	return (
		<Navbar expand='lg' bg='dark'>
			<Link href='/'>
				<Navbar.Brand
					href='#home'
					style={{
						color: 'white',
						paddingLeft: '1rem',
						paddingRight: '1rem',
						fontSize: 25,
					}}>
					Shop101
				</Navbar.Brand>
			</Link>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}>
					<NavItem href='/'>Home</NavItem>
					<NavLogSection />
					<NavItem href='/cart'>
						Cart ({length}) Tk.{totalPrice}
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
