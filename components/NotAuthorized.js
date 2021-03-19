import React from 'react';
import Page from './Page';

const NotAuthorized = () => {
	return (
		<Page>
			<div className='loading'>
				<h2>Not Authorized to view this page</h2>
			</div>
		</Page>
	);
};

export default NotAuthorized;
