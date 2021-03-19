import React from 'react';

export default function SmallText({ children }) {
	return <p style={{ fontSize: 12, color: 'rgba(0,0,0,.6)' }}>{children}</p>;
}
