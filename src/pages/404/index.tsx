import React, { useEffect } from 'react';
import Lottie from 'react-lottie';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import * as lottieAnimation from '../../../public/animations/not-found.json';
import * as S from './styles';

const NotFound: NextPage = () => {

	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.replace('/home');
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<S.NotFound>
			<Lottie 
				width={ 480 }
				height={ 270 }
				isStopped={ false }
				isPaused={ false }
				options={{
					loop: true,
					autoplay: true, 
					animationData: lottieAnimation,
					rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
				}}
			/>

			<div className="notfound">
				<h3 className="notfound__title">
					Ops... there is nothing here!
				</h3>

				<p className="notfound__message">
					You are going to be redirect to home
				</p>
			</div>
		</S.NotFound>
	);

}

export default NotFound;
