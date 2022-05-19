import styled from 'styled-components';

export const Header = styled.div<{ shouldHide: boolean; }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid ${props => props.theme.colors.gray};
	background-color: ${props => props.theme.colors.container};
	height: ${props => props.theme.defaults.headerHeight};
	${props => props.shouldHide && `top: -${props.theme.defaults.headerHeight};`};
	z-index: 5;
	
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;

		&__logo {
			width: 103px;
			height: 29px;
			margin-top: 7px;
			cursor: pointer;
		}

		.search {
			display: flex;
			align-items: center;
			column-gap: 16px;
			padding: 0 16px;
			border-radius: 8px;
			height: 36px;
			width: 240px;
			background-color: #EFEFEF;
			border: 1px solid #EFEFEF;
			margin-left: 110px;
			
			&__icon {
				font-size: 16px;
				color: ${props => props.theme.colors.textLight};
			}

			&__input {
				flex: 1;
				border: none;
				outline: none;
				line-height: 25px;
				background-color: transparent;
			}
		}

		.nav {
			display: flex;
			align-items: center;
			column-gap: 20px;

			&__link {
				font-size: 24px;
				color: ${props => props.theme.colors.text};
				cursor: pointer;
			}

			&__image {
				width: 24px;
				border-radius: 100%;
				cursor: pointer;
			}
		}
	}
`;
