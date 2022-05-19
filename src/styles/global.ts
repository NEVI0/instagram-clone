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

	input, p, span, strong, em {
		font-size: ${props => props.theme.defaults.fontSize};
	}

	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: ${props => props.theme.colors.container};
		border-left: 1px solid ${props => props.theme.colors.gray};
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	.wrapper {
		width: 100%;
		max-width: ${props => props.theme.defaults.containerMaxWidth};
	}

	.gradient__background {
		background: #d6249f;
  		background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%);
	}
`;
