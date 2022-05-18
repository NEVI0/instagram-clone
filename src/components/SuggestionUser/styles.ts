import styled from 'styled-components';

export const SuggestionUser = styled.div`
	display: flex;
	align-items: center;
	column-gap: 12px;

	> .user__image {
		width: 34px;
		height: 34px;
		border-radius: 100%;
	}

	> .user__data {
		flex: 1;
		line-height: 18px;

		> .user__name {
			font-size: 14px;
			font-weight: 600;
			line-height: auto;
		}

		> .user__followers {
			font-size: 12px;
			color: ${props => props.theme.colors.textLight};
		}
	}

	> .follow__button {
		font-size: 12px;
		font-weight: 600;
		color: ${props => props.theme.colors.blue};
	}
`;
