import React from 'react';
import { FiHome, FiMessageCircle, FiPlusSquare, FiCompass, FiHeart, FiSearch } from 'react-icons/fi';

import Link from 'next/link';
import * as S from './styles';

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
	return (
		<S.Header>
			<div className="nav wrapper">
				<Link href="/home">
					<img
						src="/images/instagram-logo.png"
						alt="instagram-logo"
						className="logo"
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

				<div className="nav__links">
					{
						NAV_LINKS.map(link => (
							<Link href={ link.to } key={ link.id.toString() }>
								<>{ link.icon }</>
							</Link>
						))
					}

					<Link href="/">
						<img
							src="/images/user.jpg"
							alt="user-image"
							className="link__user"
						/>
					</Link>
				</div>
			</div>
		</S.Header>
	);
}

export default Header;
