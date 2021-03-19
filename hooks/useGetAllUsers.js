import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../constants';

const useGetAllUsers = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setLoading(true);
		const token = JSON.parse(localStorage.getItem('token'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		axios
			.post(`${api.getAllUsers}`, { body: '' }, config)
			.then(function (response) {
				setUsers(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, []);
	return { users, loading };
};

export default useGetAllUsers;
