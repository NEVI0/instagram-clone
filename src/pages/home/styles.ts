import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-self: center;
	align-items: flex-start;
	column-gap: 28px;
	padding-bottom: 24px;
	margin-top: calc(${props => props.theme.defaults.headerHeight} + 28px);

	> .column {
		display: flex;
		flex-direction: column;
	}

	> .col1 {
		width: 65%;
		display: flex;
		flex-direction: column;
		row-gap: 24px;

		> .stories {
			overflow-x: auto;
			display: flex;
			align-items: center;
			padding: 14px 0;
			border-radius: 4px;
			border: 1px solid ${props => props.theme.colors.gray};
			background-color: ${props => props.theme.colors.container};

			::-webkit-scrollbar {
				display: none;
			}
		}
	}

	> .col2 {
		width: 35%;

		> .column__data {
			margin: 20px 0;
			position: fixed;
			width: 297px;
			display: flex;
			flex-direction: column;
			row-gap: 20px;
			
			> .user {
				display: flex;
				align-items: center;
				justify-content: space-between;

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

			> .suggestions {
				display: flex;
				flex-direction: column;
				row-gap: 10px;

				> .suggestions__header {
					display: flex;
					align-items: center;
					justify-content: space-between;

					> .suggestion__title {
						font-size: 14px;
						font-weight: 600;
						color: ${props => props.theme.colors.textLight};
					}

					> .see__all {
						font-size: 12px;
						font-weight: 600;
					}
				}
			}

			> .instagram__data {
				font-size: 12px;
				color: #c7c7c7;
				font-weight: 400;

				> .copyright {
					margin-top: 16px;
				}
			}
		}
	}
`;
