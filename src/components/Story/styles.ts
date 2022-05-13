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
		background: #d6249f;
  		background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%);

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
