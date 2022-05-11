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
		padding: 14px 16px;

		> .user {
			display: flex;
			align-items: center;
			column-gap: 12px;

			> .story__circle {
				width: 42px;
				height: 42px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				background-color: ${props => props.theme.colors.primary};
				cursor: pointer;

				> .story__image {
					width: 34px;
					height: 34px;
					border-radius: 100%;
					border: 2px solid ${props => props.theme.colors.container};
				}
			}

			> .user__name {
				cursor: pointer;
				font-size: 14px;
				font-weight: 600
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
			max-height: 765px;
		}
	}

	> .post__actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 16px;

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

	> .post__add__comment {
		display: flex;
		align-items: center;
		padding: 14px 16px;
		column-gap: 16px;
		border-top: 1px solid ${props => props.theme.colors.gray};

		> .smile__icon {
			font-size: 24px;
		}

		> .add__comment__input {
			flex: 1;
			border: none;
			outline: none;
			font-size: 14px;
		}

		> .add__comment__button {
			color: ${props => props.theme.colors.blue};
			font-weight: 600;
			font-size: 14px;
		}
	}
`;
