import React, { useState, useEffect } from 'react';
import { FiHome, FiMessageCircle, FiPlusSquare, FiCompass, FiHeart, FiSearch } from 'react-icons/fi';

import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

const NOT_AVAILABLE_PATHS = [
	'/404'
];

const NAV_LINKS = [
	{
		id: 1,
		to: '/messenger',
		icon: <FiHome className="nav__link" />
	},
	{
		id: 2,
		to: '/text',
		icon: <FiMessageCircle className="nav__link" />
	},
	{
		id: 3,
		to: '/text',
		icon: <FiPlusSquare className="nav__link" />
	},
	{
		id: 4,
		to: '/text',
		icon: <FiCompass className="nav__link" />
	},
	{
		id: 5,
		to: '/text',
		icon: <FiHeart className="nav__link" />
	}
];

const Header: React.FC = () => {

	const router = useRouter();
	const [ shouldHide, setShouldHide ] = useState<boolean>(false);

	useEffect(() => {
		setShouldHide(NOT_AVAILABLE_PATHS.includes(router.pathname));
	}, [router.pathname]);

	return (
		<S.Header shouldHide={ shouldHide }>
			<div className="header wrapper">
				<Link href="/home">
					<img
						src="/images/instagram-logo.png"
						alt="instagram-logo"
						className="header__logo"
					/>
				</Link>

				<div className="search">
					<FiSearch className="search__icon" />

					<input
						type="text"
						className="search__input"
						placeholder="Search"
					/>
				</div>

				<div className="nav">
					{
						NAV_LINKS.map(link => (
							<Link href={ link.to } key={ link.id.toString() }>
								<div>{ link.icon }</div>
							</Link>
						))
					}

					<Link href="/">
						<img
							src="/images/user.jpg"
							alt="user-image"
							className="nav__image"
						/>
					</Link>
				</div>
			</div>
		</S.Header>
	);

}

export default Header;
