import React from 'react';
import { FiHome, FiMessageCircle, FiPlusSquare, FiCompass, FiHeart } from 'react-icons/fi';
import Link from 'next/link';

import * as S from './styles';

const NAV_LINKS = [
	{
		id: 1,
		to: '/...',
		icon: <FiHome className="nav__link__icon" />
	},
	{
		id: 2,
		to: '/...',
		icon: <FiMessageCircle className="nav__link__icon" />
	},
	{
		id: 3,
		to: '/...',
		icon: <FiPlusSquare className="nav__link__icon" />
	},
	{
		id: 4,
		to: '/...',
		icon: <FiCompass className="nav__link__icon" />
	},
	{
		id: 5,
		to: '/...',
		icon: <FiHeart className="nav__link__icon" />
	}
];

const Header: React.FC = () => {
	return (
		<S.Header>
			<div className="container">
				<S.Logo
					src="/images/instagram-logo.png"
					alt="Instagram Logo"
				/>

				<div className="search">
					<S.SearchIcon />

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
								{ link.icon }
							</Link>
						))
					}

					<Link href="/">
						<img
							src="/images/user.jpg"
							alt="user-image"
							className="nav__link__user"
						/>
					</Link>
				</div>
			</div>
		</S.Header>
	);
}

export default Header;
