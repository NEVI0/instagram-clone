import styled from 'styled-components';

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 24px;
	background-color: ${props => props.theme.colors.body};
`;

export const Container = styled.div`
	width: 100%;
	max-width: 937px;
	align-self: center;
	display: flex;
	align-items: flex-start;
	column-gap: 28px;

	> .container__column {
		display: flex;
		flex-direction: column;
	}

	> .container__column-1 {
		flex: 0.6;
	}

	> .container__column-2 {
		flex: 0.4;
	}
`;
