import styled from 'styled-components';

export const Story = styled.div`
	margin-left: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	> .story__circle {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		background-color: ${props => props.theme.colors.primary};

		> .story__image {
			width: 56px;
			height: 56px;
			border-radius: 100%;
			border: 2px solid ${props => props.theme.colors.container};
		}
	}

	> .story__name {
		font-size: 12px;
		color: ${props => props.theme.colors.text};
	}

	:last-child {
		margin-right: 16px;
	}
`;
