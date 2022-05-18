import styled from 'styled-components';

export const RefreshContent = styled.button`
	position: fixed;
	z-index: 4;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${props => props.theme.colors.container};
	border: 1px solid ${props => props.theme.colors.container};
	padding: 6px 12px;
	border-radius: 50px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
	font-size: 14px;
	font-weight: 600;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	outline: none;
	transition: .3s;
`;
