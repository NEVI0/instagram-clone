import styled from 'styled-components';

export const NotFound = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${props => props.theme.colors.container};

	.notfound {
		text-align: center;
		margin-top: -50px;

		&__title {
			font-size: 1.5rem;
			margin-bottom: .5rem;
		}

		&__message {
			font-size: 1rem;
			color: ${props => props.theme.colors.textLight};
		}
	}
`;
