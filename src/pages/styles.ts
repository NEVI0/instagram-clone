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
	padding-bottom: 24px;

	> .container__column {
		display: flex;
		flex-direction: column;
	}

	> .container__column-1 {
		width: 60%;
		display: flex;
		flex-direction: column;
		row-gap: 24px;

		> .stories {
			display: flex;
			align-items: center;
			padding: 16px 0;
			border-radius: 3px;
			border: 1px solid ${props => props.theme.colors.gray};
			background-color: ${props => props.theme.colors.container};
			position: relative;
			overflow-x: auto;

			::-webkit-scrollbar {
				display: none;
			}
		}

		> .posts {
			display: flex;
			flex-direction: column;
			row-gap: 24px;
		}
	}

	> .container__column-2 {
		width: 40%;

		> .user {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 18px 0;

			> .user__data {
				display: flex;
				align-items: center;
				column-gap: 16px;
				cursor: pointer;

				> .user__image {
					width: 56px;
					border-radius: 100%;
				}

				> .user__description {
					display: flex;
					flex-direction: column;
					font-size: 14px;

					> .user__tag {
						font-weight: 600;
					}

					> .user__name {
						margin-top: -4px;
						color: ${props => props.theme.colors.textLight};
					}
				}
			}

			> .switch__account {
				font-size: 12px;
				font-weight: 600;
				color: ${props => props.theme.colors.blue};
			}
		}
	}
`;
