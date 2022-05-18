import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		line-height: 150%;
		color: ${props => props.theme.colors.text};
		font-family: ${props => props.theme.defaults.fontFamily};
	}

	a {
		text-decoration: none;
	}

	input, button, a {
		font-family: ${props => props.theme.defaults.fontFamily};
	}

	button, a {
		cursor: pointer;
	}

	h1, h2, h3, h4, h5, p {
		margin: 0;
	}

	p, span, strong, em {
		font-size: ${props => props.theme.defaults.fontSize};
	}
`;
