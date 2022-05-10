import styled from 'styled-components';

export const Post = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	border: 1px solid ${props => props.theme.colors.gray};
	background-color: ${props => props.theme.colors.container};

	> .post__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;

		> .user {
			display: flex;
			align-items: center;
			column-gap: 12px;

			> .story__circle {
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				background-color: ${props => props.theme.colors.primary};
				cursor: pointer;

				> .story__image {
					width: 32px;
					height: 32px;
					border-radius: 100%;
					border: 2px solid ${props => props.theme.colors.container};
				}
			}

			> .user__name {
				cursor: pointer;
				font-size: 14px;
				font-weight: 500
			}
		}

		> .post__header__options {
			font-size: 20px;
			cursor: pointer;
		}
	}

	> .post__content {
		display: flex;
		align-items: center;
		justify-content: center;
		
		> .post__image {
			width: 100%;
			max-height: 750px;
		}
	}

	> .post__actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;

		> .post__actions-main {
			display: flex;
			align-items: center;
			column-gap: 16px;
			cursor: pointer;
		}

		.action__button {
			font-size: 24px;
		}
	}
`;
