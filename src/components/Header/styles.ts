import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: center;
	height: 60px;
	border-bottom: 1px solid ${props => props.theme.colors.gray};
	background-color: ${props => props.theme.colors.container};
	
	> .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		max-width: 937px;
		width: 100%;

		> .search {
			border: 1px solid red;
			display: flex;
			align-items: center;
			column-gap: 16px;
			padding: 0 16px;
			border-radius: 8px;
			height: 36px;
			width: 268px;
			background-color: #EFEFEF;
			border: 1px solid #EFEFEF;
			
			> .search__input {
				flex: 1;
				line-height: 25px;
				font-size: 14px;
				background-color: transparent;
				border: none;
				outline: none;
				color: ${props => props.theme.colors.text};
			}
		}

		> .nav {
			display: flex;
			align-items: center;
			column-gap: 24px;

			> .nav__link__icon {
				font-size: 24px;
				color: ${props => props.theme.colors.text};
				cursor: pointer;
			}

			> .nav__link__user {
				width: 24px;
				border-radius: 100%;
			}
		}
	}
`;

export const Logo = styled.img`
	margin-top: 7px;
	width: 103px;
	height: 29px;
	object-fit: cover;
	cursor: pointer;
`;

export const SearchIcon = styled(FiSearch)`
	font-size: 16px;
	color: ${props => props.theme.colors.textLight};
`;
