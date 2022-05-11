import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		line-height: 150%;
		color: ${props => props.theme.colors.text};
	}

	a {
		text-decoration: none;
	}

	input {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	button, a {
		cursor: pointer;
	}

	h1, h2, h3, h4, h5 {
		margin: 0;
	}	
`;
