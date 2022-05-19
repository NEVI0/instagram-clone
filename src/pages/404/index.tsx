import React, { useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {

	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.replace('/home');
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{ marginTop: 250 }}>
			Not Found;
		</div>
	);

}

export default NotFound;
