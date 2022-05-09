import styled from 'styled-components';

export const StoriesList = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 0;
	border-radius: 3px;
	border: 1px solid ${props => props.theme.colors.gray};
	background-color: ${props => props.theme.colors.container};
	position: relative;

	> .stories__button {
		outline: none;
		width: 30px;
		height: 30px;
		border-radius: 100%;
		border: 1px solid ${props => props.theme.colors.container};
		background-color: ${props => props.theme.colors.container};
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
		position: absolute;

		> .stories__button-icon {
			color: ${props => props.theme.colors.text};
			font-size: 24px;
		}

		&-left {
			left: 16px;
		}

		&-right {
			right: 16px;
		}
	}

	> .story {
		margin-left: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;

		> .story__circle {
			width: 66px;
			height: 66px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 100%;
			background-color: ${props => props.theme.colors.primary};

			> .story__image {
				width: 58px;
				height: 58px;
				border-radius: 100%;
				border: 2px solid ${props => props.theme.colors.container};
			}
		}

		> .story__name {
			font-size: 12px;
			color: ${props => props.theme.colors.text};
		}
	}
`;
